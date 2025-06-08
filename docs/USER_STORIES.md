# Toolshed MVP - User Stories for QA Testing

This document outlines user stories for the Toolshed MVP go-to-market QA session. Each story includes acceptance criteria and edge cases that should be tested.

## Epic 1: User Registration and Authentication

### US-001: New User Registration

**As a** neighborhood resident  
**I want to** create an account on Toolshed  
**So that** I can share and borrow tools with my neighbors  

**Acceptance Criteria:**

- [ ] User can access registration page from home page
- [ ] User can enter name, email, password, neighborhood, and contact method
- [ ] Password is securely hashed and stored
- [ ] User receives confirmation of successful registration
- [ ] User is automatically logged in after registration
- [ ] Email validation prevents duplicate accounts

**Edge Cases to Test:**

- [ ] Duplicate email registration attempt
- [ ] Invalid email format
- [ ] Weak password handling
- [ ] Empty required fields
- [ ] Special characters in name/neighborhood

### US-002: User Login

**As a** registered user  
**I want to** log into my account  
**So that** I can access my tools and reservations  

**Acceptance Criteria:**

- [ ] User can access login page
- [ ] User can login with email and password
- [ ] Session is maintained across page refreshes
- [ ] User is redirected to appropriate page after login
- [ ] Invalid credentials show appropriate error message

**Edge Cases to Test:**

- [ ] Non-existent email login attempt
- [ ] Correct email with wrong password
- [ ] Case sensitivity in email
- [ ] Session persistence duration

### US-003: User Logout

**As a** logged-in user  
**I want to** log out of my account  
**So that** my account remains secure  

**Acceptance Criteria:**

- [ ] User can access logout functionality
- [ ] Session is properly terminated
- [ ] User is redirected to public page
- [ ] Protected pages require re-authentication

## Epic 2: Tool Management

### US-004: Add New Tool

**As a** tool owner  
**I want to** list my tools for sharing  
**So that** neighbors can borrow them when needed  

**Acceptance Criteria:**

- [ ] User can access tool creation form
- [ ] User can enter title, description, category, location
- [ ] User can add tags for better searchability
- [ ] User can specify quantity available
- [ ] Tool appears in owner's tool list
- [ ] Tool appears in community browse list

**Edge Cases to Test:**

- [ ] Very long titles/descriptions
- [ ] Special characters in tool information
- [ ] Missing required fields
- [ ] Zero or negative quantity
- [ ] Duplicate tool names by same owner

### US-005: View My Tools

**As a** tool owner  
**I want to** see all my listed tools  
**So that** I can manage my inventory  

**Acceptance Criteria:**

- [ ] User can access personal tool inventory
- [ ] All owned tools are displayed
- [ ] Tools show current availability status
- [ ] User can see active reservations per tool

### US-006: Edit Tool Information

**As a** tool owner  
**I want to** update my tool details  
**So that** information stays accurate and current  

**Acceptance Criteria:**

- [ ] User can access edit form for owned tools
- [ ] All tool fields can be modified
- [ ] Changes are saved and reflected immediately
- [ ] Other users see updated information

**Edge Cases to Test:**

- [ ] Editing tool with active reservations
- [ ] Reducing quantity below reserved amount
- [ ] Concurrent edits by owner

### US-007: Delete Tool

**As a** tool owner  
**I want to** remove tools I no longer want to share  
**So that** my listing stays current  

**Acceptance Criteria:**

- [ ] User can delete owned tools
- [ ] Confirmation prompt prevents accidental deletion
- [ ] Tool is removed from all listings
- [ ] Associated reservations are handled appropriately

**Edge Cases to Test:**

- [ ] Deleting tool with pending reservations
- [ ] Deleting tool with active loans

## Epic 3: Tool Discovery

### US-008: Browse Available Tools

**As a** potential borrower  
**I want to** see what tools are available in my area  
**So that** I can find what I need  

**Acceptance Criteria:**

- [ ] User can access tool browse page
- [ ] All available tools are displayed
- [ ] Tools show basic information (title, owner, location)
- [ ] Only available quantities are shown
- [ ] User can access detailed tool view

### US-009: Search for Specific Tools

**As a** potential borrower  
**I want to** search for specific tools  
**So that** I can quickly find what I need  

**Acceptance Criteria:**

- [ ] Search functionality is accessible
- [ ] Search works on title, description, tags
- [ ] Results are relevant and ranked
- [ ] No results state is handled gracefully

**Edge Cases to Test:**

- [ ] Empty search terms
- [ ] Special characters in search
- [ ] Very long search terms
- [ ] Case insensitive search

### US-010: View Tool Details

**As a** potential borrower  
**I want to** see detailed information about a tool  
**So that** I can decide if it meets my needs  

**Acceptance Criteria:**

- [ ] User can access detailed tool view
- [ ] All tool information is displayed
- [ ] Owner contact information is available
- [ ] Current availability is shown
- [ ] User can initiate reservation request

## Epic 4: Reservation Management

### US-011: Request Tool Reservation

**As a** potential borrower  
**I want to** request to borrow a tool  
**So that** I can use it for my project  

**Acceptance Criteria:**

- [ ] User can access reservation request form
- [ ] User can specify dates and quantity needed
- [ ] User can add notes about intended use
- [ ] Request is sent to tool owner
- [ ] Requester receives confirmation
- [ ] Reservation appears in pending state

**Edge Cases to Test:**

- [ ] Requesting own tools
- [ ] Overlapping date requests
- [ ] Past date requests
- [ ] Quantity exceeding availability
- [ ] Very long notes

### US-012: View My Reservation Requests

**As a** borrower  
**I want to** see all my reservation requests  
**So that** I can track their status  

**Acceptance Criteria:**

- [ ] User can access personal reservations list
- [ ] All requests are shown with current status
- [ ] Reservations are sorted by relevance (date/status)
- [ ] User can view reservation details

### US-013: Cancel Reservation Request

**As a** borrower  
**I want to** cancel my reservation request  
**So that** I can free up the tool for others if I no longer need it  

**Acceptance Criteria:**

- [ ] User can cancel pending reservations
- [ ] User can cancel approved reservations before pickup
- [ ] Cancellation updates tool availability
- [ ] Owner is notified of cancellation

**Edge Cases to Test:**

- [ ] Canceling already active reservations
- [ ] Canceling returned reservations
- [ ] Multiple rapid cancellation attempts

### US-014: Approve/Reject Reservation Requests

**As a** tool owner  
**I want to** approve or reject borrowing requests  
**So that** I can control who borrows my tools  

**Acceptance Criteria:**

- [ ] Owner can see pending requests for their tools
- [ ] Owner can approve requests
- [ ] Owner can reject requests with optional reason
- [ ] Requester is notified of decision
- [ ] Reservation status updates appropriately

**Edge Cases to Test:**

- [ ] Approving conflicting reservations
- [ ] Rejecting already canceled requests
- [ ] Bulk approval/rejection

### US-015: Mark Tool as Picked Up

**As a** tool owner  
**I want to** mark when a tool is picked up  
**So that** the system tracks active loans  

**Acceptance Criteria:**

- [ ] Owner can mark approved reservations as active
- [ ] Tool availability updates automatically
- [ ] Both parties can see active status
- [ ] Pickup date is recorded

### US-016: Mark Tool as Returned

**As a** tool owner  
**I want to** mark when a tool is returned  
**So that** it becomes available for others  

**Acceptance Criteria:**

- [ ] Owner can mark active loans as returned
- [ ] Tool availability updates automatically
- [ ] Return date is recorded
- [ ] Reservation moves to completed status

**Edge Cases to Test:**

- [ ] Early returns
- [ ] Late returns
- [ ] Damaged tool returns

## Epic 5: Communication and Updates

### US-017: Add Notes to Reservations

**As a** user (owner or borrower)  
**I want to** add notes to reservations  
**So that** I can communicate important information  

**Acceptance Criteria:**

- [ ] Users can add notes to reservations
- [ ] Notes are visible to both parties
- [ ] Note history is maintained
- [ ] Timestamps show when notes were added

### US-018: View Reservation History

**As a** user  
**I want to** see the complete history of a reservation  
**So that** I can understand what has happened  

**Acceptance Criteria:**

- [ ] Users can view complete event history
- [ ] Events are chronologically ordered
- [ ] All state changes are recorded
- [ ] Event details include actor and timestamp

## Epic 6: Administrative Functions

### US-019: User Profile Management

**As a** registered user  
**I want to** update my profile information  
**So that** my contact details stay current  

**Acceptance Criteria:**

- [ ] User can access profile page
- [ ] All profile fields can be updated
- [ ] Password changes require current password
- [ ] Changes are saved and reflected immediately

### US-020: Admin User Management

**As an** administrator  
**I want to** manage user accounts  
**So that** I can maintain platform quality  

**Acceptance Criteria:**

- [ ] Admin can view all user accounts
- [ ] Admin can deactivate problematic accounts
- [ ] Admin can view user activity

## Critical Test Scenarios for MVP QA

### End-to-End Workflows

**Complete Borrowing Flow:**

1. New user registers → logs in → browses tools → requests reservation → owner approves → tool picked up → tool returned

**Complete Sharing Flow:**

1. User registers → adds tool → receives request → approves request → marks as picked up → marks as returned

**Conflict Resolution:**

1. Multiple users request same tool for overlapping dates
2. User cancels after approval but before pickup
3. Tool is damaged during loan period

### Performance and Security Tests

- [ ] System handles multiple concurrent users
- [ ] Authentication sessions work properly
- [ ] Data integrity maintained under load
- [ ] Input validation prevents malicious data
- [ ] Password security is maintained

### Browser and Device Compatibility

- [ ] Chrome/Firefox/Safari compatibility
- [ ] Mobile responsive design
- [ ] Touch interface usability
- [ ] Offline behavior (graceful degradation)

---

**QA Testing Notes:**

- Each user story should be tested in isolation
- Test both happy path and edge cases
- Verify data persistence across sessions
- Check error handling and user feedback
- Validate business rules are enforced
- Test with multiple user roles simultaneously

**Known Limitations for MVP:**

- Real-time notifications not implemented
- Advanced search/filtering limited
- Photo uploads not available
- Damage reporting workflow missing
- Email notifications not configured

**Success Criteria:**

- All critical user stories pass acceptance criteria
- No security vulnerabilities in authentication
- Basic reservation workflow completes successfully
- System remains stable under normal usage patterns
