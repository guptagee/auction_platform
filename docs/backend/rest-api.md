Backend REST API Reference

Base URL
- http://localhost:5001/api/v1

Authentication
- Uses HTTP-only cookie `token` issued by the `login` and `register` endpoints.

User Endpoints
- POST /user/register
  - Auth: Public
  - Body (multipart/form-data):
    - profileImage: File (png/jpeg/webp) REQUIRED
    - userName, email, password, phone, address, role REQUIRED
    - If role == "Auctioneer": bankAccountNumber, bankAccountName, bankName, ifscCode, upiId, paypalEmail REQUIRED
  - Responses: 201 Created { success, message, user, token }
  - Notes: Stores HTTP-only cookie `token`.

- POST /user/login
  - Auth: Public
  - Body (json): { email, password }
  - Responses: 200 OK { success, message, user, token }

- GET /user/me
  - Auth: Authenticated
  - Responses: 200 OK { success, user }

- GET /user/logout
  - Auth: Authenticated
  - Responses: 200 OK { success, message }

- GET /user/leaderboard
  - Auth: Public
  - Responses: 200 OK { success, leaderboard }

Auction Endpoints
- POST /auctionitem/create
  - Auth: Authenticated, Role: Auctioneer
  - Body (multipart/form-data): { image: File, title, description, category, condition[New|Used], startingBid, startTime, endTime }
  - Responses: 201 Created { success, message, auctionItem }
  - Validations: startTime > now, startTime < endTime, at most one active auction per user.

- GET /auctionitem/allitems
  - Auth: Public
  - Responses: 200 OK { success, items }

- GET /auctionitem/auction/:id
  - Auth: Authenticated
  - Params: id (ObjectId)
  - Responses: 200 OK { success, auctionItem, bidders }

- GET /auctionitem/myitems
  - Auth: Authenticated, Role: Auctioneer
  - Responses: 200 OK { success, items }

- DELETE /auctionitem/delete/:id
  - Auth: Authenticated, Role: Auctioneer
  - Responses: 200 OK { success, message }

- PUT /auctionitem/item/republish/:id
  - Auth: Authenticated, Role: Auctioneer
  - Body (json or form): { startTime, endTime }
  - Responses: 200 OK { success, auctionItem, message, createdBy }
  - Side Effects: Resets bids and commission state; adjusts highest bidder stats.

Bid Endpoints
- POST /bid/place/:id
  - Auth: Authenticated, Role: Bidder
  - Middleware: checkAuctionEndTime
  - Body (json): { amount }
  - Responses: 201 Created { success, message, currentBid }
  - Validations: amount > currentBid and >= startingBid

Error Handling
- Errors return JSON: { success: false, message }
- Notable codes: 400 Bad Request, 403 Forbidden, 404 Not Found, 500 Server Error

Examples
curl - Register (Auctioneer)
```bash
curl -X POST http://localhost:5001/api/v1/user/register \
  -H 'Content-Type: multipart/form-data' \
  -F 'profileImage=@/path/to/image.jpg' \
  -F 'userName=Jane' -F 'email=jane@example.com' -F 'password=secret123' \
  -F 'phone=01234567890' -F 'address=123 Main' -F 'role=Auctioneer' \
  -F 'bankAccountNumber=123456789' -F 'bankAccountName=Jane Doe' \
  -F 'bankName=ACME' -F 'ifscCode=ACME0001' -F 'upiId=jane@upi' \
  -F 'paypalEmail=jane@paypal.com'
```

curl - Login
```bash
curl -X POST http://localhost:5001/api/v1/user/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"jane@example.com","password":"secret123"}' -i
```

curl - Create Auction
```bash
curl -X POST http://localhost:5001/api/v1/auctionitem/create \
  -H 'Content-Type: multipart/form-data' \
  -b 'token=...' -c cookies.txt \
  -F 'image=@/path/to/item.jpg' \
  -F 'title=Vintage Clock' -F 'description=Great condition' \
  -F 'category=Antiques' -F 'condition=Used' \
  -F 'startingBid=50' -F 'startTime=2025-10-10T10:00:00.000Z' \
  -F 'endTime=2025-10-12T10:00:00.000Z'
```

curl - Place Bid
```bash
curl -X POST http://localhost:5001/api/v1/bid/place/{auctionId} \
  -H 'Content-Type: application/json' \
  -b cookies.txt -d '{"amount": 100}'
```