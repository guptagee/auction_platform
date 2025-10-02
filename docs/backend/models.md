Backend Data Models (Mongoose)

Auction (`backend/models/auctionSchema.js`)
- Fields
  - title: String
  - description: String
  - startingBid: Number
  - category: String
  - condition: Enum("New","Used")
  - currentBid: Number (default 0)
  - startTime: String (ISO)
  - endTime: String (ISO)
  - image: { public_id: String, url: String } REQUIRED
  - createdBy: ObjectId -> User REQUIRED
  - bids: Array<{ userId: ObjectId, userName: String, profileImage: String, amount: Number }>
  - highestBidder: ObjectId -> User
  - commissionCalculated: Boolean (default false)
  - createdAt: Date

Bid (`backend/models/bidSchema.js`)
- Fields
  - amount: Number
  - bidder: { id: ObjectId -> User REQUIRED, userName: String, profileImage: String }
  - auctionItem: ObjectId -> Auction REQUIRED

User (`backend/models/userSchema.js`)
- Fields
  - userName: String (min 3, max 40)
  - password: String (min 8, select: false)
  - email: String
  - address: String
  - phone: String (exact 11 chars)
  - profileImage: { public_id: String REQUIRED, url: String REQUIRED }
  - paymentMethods: { bankTransfer: { bankAccountNumber, bankAccountHolderName, bankName, ifscCode, upiId }, paypal: { paypalEmail } }
  - role: Enum("Auctioneer","Bidder","Super Admin")
  - unpaidCommission: Number (default 0)
  - auctionsWon: Number (default 0)
  - moneySpent: Number (default 0)
  - createdAt: Date

- Methods
  - pre('save'): hashes password if modified
  - comparePassword(enteredPassword): Promise<boolean>
  - generateJsonWebToken(): JWT signed with env `JWT_SECRET_KEY`