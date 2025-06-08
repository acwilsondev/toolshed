import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { getItemById, updateItem, deleteItem } from "~/utils/db.server";
import { ItemUpdateValidationService } from "~/utils/itemUpdateValidator.server";
import { validateRequest, checkRateLimit } from "~/utils/validationMiddleware.server";
import { UpdateItemSchema } from "~/utils/validation.server";
import { 
  ErrorHandlerStrategy,
  generateRequestId,
  withErrorHandler,
  AuthenticationError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  ValidationError
} from "~/utils/errorHandler.server";
import { z } from "zod";
import type { CreateItemRequest } from "~/utils/types";

function requireAuth(request: Request): string {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthenticationError("Bearer token required");
  }
  return authHeader.replace("Bearer ", "");
}

function extractUserIdFromToken(token: string): string {
  // In production, decode the JWT and extract user ID
  if (!token || !token.startsWith("mock-jwt-token-")) {
    throw new AuthenticationError("Invalid token format");
  }
  return token.replace("mock-jwt-token-", "");
}

// Path parameter validation schema
const ItemParamsSchema = z.object({
  id: z.string().uuid('Invalid item ID format')
});

// Create the loader with standardized error handling
const loaderImpl = async ({ request, params }: LoaderFunctionArgs) => {
  const requestId = generateRequestId();
  const errorHandler = new ErrorHandlerStrategy(requestId, new URL(request.url).pathname);
  
  requireAuth(request);
  
  // Rate limiting
  const clientId = request.headers.get('X-Forwarded-For') || 'unknown';
  const rateLimit = checkRateLimit(clientId, 100, 60000);
  if (!rateLimit.allowed) {
    throw new RateLimitError(rateLimit.resetTime, rateLimit.remaining);
  }

  // Validate path parameters
  const validation = await validateRequest(request, params, {
    paramsSchema: ItemParamsSchema
  });
  
  if (!validation.success) {
    throw new ValidationError('Invalid path parameters', validation.errors || []);
  }
  
  const { id } = validation.data!.params!;
  const item = await getItemById(id);
  if (!item) {
    throw new NotFoundError('Item');
  }

  return errorHandler.createSuccessResponse(item, undefined, {
    remaining: rateLimit.remaining,
    resetTime: rateLimit.resetTime
  });
};

export const loader = withErrorHandler(loaderImpl, 'get item');

// Create the action with standardized error handling
const actionImpl = async ({ request, params }: ActionFunctionArgs) => {
  const requestId = generateRequestId();
  const errorHandler = new ErrorHandlerStrategy(requestId, new URL(request.url).pathname);
  
  const token = requireAuth(request);
  const userId = extractUserIdFromToken(token);
  
  // Rate limiting
  const rateLimit = checkRateLimit(userId, 50, 60000); // Lower limit for write operations
  if (!rateLimit.allowed) {
    throw new RateLimitError(rateLimit.resetTime, rateLimit.remaining);
  }

  if (request.method === "PUT") {
    // Validate input with comprehensive schemas
    const validation = await validateRequest(request, params, {
      bodySchema: UpdateItemSchema,
      paramsSchema: ItemParamsSchema
    });
    
    if (!validation.success) {
      throw new ValidationError('Invalid request data', validation.errors);
    }
    
    const { body, params: validatedParams } = validation.data!;
    const { id } = validatedParams!;
    
    // Business logic validation (quantity vs reservations)
    const validator = new ItemUpdateValidationService();
    const businessValidation = await validator.validateItemUpdate(id, body!);
    
    if (!businessValidation.isValid) {
      throw new ConflictError("Item update validation failed", businessValidation.errors);
    }
    
    const item = await updateItem(id, body!);
    if (!item) {
      throw new NotFoundError('Item');
    }

    // Prepare response data with warnings
    const responseData = {
      ...item,
      ...(businessValidation.warnings && { _warnings: businessValidation.warnings })
    };
    
    return errorHandler.createSuccessResponse(
      responseData,
      businessValidation.warnings,
      {
        remaining: rateLimit.remaining,
        resetTime: rateLimit.resetTime
      }
    );

  } else if (request.method === "DELETE") {
    // Validate path parameters
    const validation = await validateRequest(request, params, {
      paramsSchema: ItemParamsSchema
    });
    
    if (!validation.success) {
      throw new ValidationError('Invalid path parameters', validation.errors);
    }
    
    const { id } = validation.data!.params!;
    
    // Business logic validation (deletion vs active reservations)
    const validator = new ItemUpdateValidationService();
    const businessValidation = await validator.validateItemDeletion(id);
    
    if (!businessValidation.isValid) {
      throw new ConflictError("Item deletion validation failed", businessValidation.errors);
    }
    
    const success = await deleteItem(id);
    if (!success) {
      throw new NotFoundError('Item');
    }

    // Return 204 No Content with rate limit headers
    const headers: Record<string, string> = {
      'X-RateLimit-Remaining': rateLimit.remaining.toString(),
      'X-RateLimit-Reset': rateLimit.resetTime.toString()
    };
    
    return new Response(null, { status: 204, headers });

  } else {
    throw new ValidationError(`Method ${request.method} not allowed`, [`Supported methods: PUT, DELETE`]);
  }
};

export const action = withErrorHandler(actionImpl, 'item operations');
