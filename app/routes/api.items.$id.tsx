import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getItemById, updateItem, deleteItem } from "~/utils/db.server";
import { ItemUpdateValidationService } from "~/utils/itemUpdateValidator.server";
import { validateRequest, checkRateLimit } from "~/utils/validationMiddleware.server";
import { UpdateItemSchema } from "~/utils/validation.server";
import { z } from "zod";
import type { CreateItemRequest } from "~/utils/types";

function requireAuth(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return authHeader.replace("Bearer ", "");
}

function extractUserIdFromToken(token: string): string {
  // In production, decode the JWT and extract user ID
  return token.replace("mock-jwt-token-", "");
}

// Path parameter validation schema
const ItemParamsSchema = z.object({
  id: z.string().uuid('Invalid item ID format')
});

export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    requireAuth(request);
    
    // Rate limiting
    const clientId = request.headers.get('X-Forwarded-For') || 'unknown';
    const rateLimit = checkRateLimit(clientId, 100, 60000);
    if (!rateLimit.allowed) {
      return json(
        { error: 'Rate limit exceeded', resetTime: rateLimit.resetTime },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString()
          }
        }
      );
    }

    // Validate path parameters
    const validation = await validateRequest(request, params, {
      paramsSchema: ItemParamsSchema
    });
    
    if (!validation.success) {
      return validation.response!;
    }
    
    const { id } = validation.data!.params!;
    const item = await getItemById(id);
    if (!item) {
      return json({ error: "Item not found" }, { status: 404 });
    }

    return json(item, {
      headers: {
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        'X-RateLimit-Reset': rateLimit.resetTime.toString()
      }
    });

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Get item error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  try {
    const token = requireAuth(request);
    const userId = extractUserIdFromToken(token);
    
    // Rate limiting
    const rateLimit = checkRateLimit(userId, 50, 60000); // Lower limit for write operations
    if (!rateLimit.allowed) {
      return json(
        { error: 'Rate limit exceeded', resetTime: rateLimit.resetTime },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString()
          }
        }
      );
    }

    if (request.method === "PUT") {
      // Validate input with comprehensive schemas
      const validation = await validateRequest(request, params, {
        bodySchema: UpdateItemSchema,
        paramsSchema: ItemParamsSchema
      });
      
      if (!validation.success) {
        return validation.response!;
      }
      
      const { body, params: validatedParams } = validation.data!;
      const { id } = validatedParams!;
      
      // Business logic validation (quantity vs reservations)
      const validator = new ItemUpdateValidationService();
      const businessValidation = await validator.validateItemUpdate(id, body!);
      
      if (!businessValidation.isValid) {
        return json({
          error: "Item update validation failed",
          details: businessValidation.errors,
          warnings: businessValidation.warnings
        }, { status: 409 });
      }
      
      const item = await updateItem(id, body!);
      if (!item) {
        return json({ error: "Item not found" }, { status: 404 });
      }

      // Include warnings and rate limit headers in success response
      return json({
        ...item,
        ...(businessValidation.warnings && { _warnings: businessValidation.warnings })
      }, {
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString()
        }
      });

    } else if (request.method === "DELETE") {
      // Validate path parameters
      const validation = await validateRequest(request, params, {
        paramsSchema: ItemParamsSchema
      });
      
      if (!validation.success) {
        return validation.response!;
      }
      
      const { id } = validation.data!.params!;
      
      // Business logic validation (deletion vs active reservations)
      const validator = new ItemUpdateValidationService();
      const businessValidation = await validator.validateItemDeletion(id);
      
      if (!businessValidation.isValid) {
        return json({
          error: "Item deletion validation failed",
          details: businessValidation.errors
        }, { status: 409 });
      }
      
      const success = await deleteItem(id);
      if (!success) {
        return json({ error: "Item not found" }, { status: 404 });
      }

      return new Response(null, { 
        status: 204,
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString()
        }
      });

    } else {
      return json({ error: "Method not allowed" }, { status: 405 });
    }

  } catch (error) {
    if (error instanceof Response) {
      return error;
    }
    console.error("Item action error:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
}
