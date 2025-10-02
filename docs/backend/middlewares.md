Backend Middlewares

Authentication and Authorization
- isAuthenticated (in `backend/middlewares/auth.js`)
  - Reads `token` from cookies, verifies JWT, attaches `req.user`.
  - Errors: 400 if not authenticated or invalid/expired token.

- isAuthorized(...roles)
  - Verifies that `req.user.role` is included in allowed roles.
  - Errors: 403 Forbidden.

Request Lifecycle Helpers
- catchAsyncErrors (in `backend/middlewares/catchAsyncErrors.js`)
  - Wraps async controller to forward errors to error handler.

- errorMiddleware (in `backend/middlewares/error.js`)
  - Centralized error handler with special cases for JWT errors and Mongoose CastError.
  - Response: { success: false, message } with appropriate status code.

Domain Middleware
- checkAuctionEndTime (in `backend/middlewares/checkAuctionEndTime.js`)
  - Validates auction id, ensures auction has started and not ended.
  - Used on bidding: POST `/bid/place/:id`.