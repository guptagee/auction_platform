Frontend State (Redux Toolkit)

Store
- Location: `frontend/src/store/store.js`
- Exposes configured store with reducers: `user`, `auction`, `bid`.

Slices
- userSlice (`store/slices/userSlice.js`)
  - State: { loading, isAuthenticated, user, leaderboard }
  - Thunks
    - register(formData: multipart): POST `/user/register`
    - login({ email, password }): POST `/user/login`
    - logout(): GET `/user/logout`
    - fetchUser(): GET `/user/me`
    - fetchLeaderboard(): GET `/user/leaderboard`
  - Notes: Uses `axios` with `withCredentials: true` and toasts via `react-toastify`.

- auctionSlice (`store/slices/auctionSlice.js`)
  - State: { loading, itemDetail, auctionDetail, auctionBidders, myAuctions, allAuctions }
  - Thunks
    - getAllAuctionItems(): GET `/auctionitem/allitems`
    - getMyAuctionItems(): GET `/auctionitem/myitems`
    - getAuctionDetail(id): GET `/auctionitem/auction/{id}`
    - createAuction(formData): POST `/auctionitem/create`
    - republishAuction(id, data): PUT `/auctionitem/item/republish/{id}`
    - deleteAuction(id): DELETE `/auctionitem/delete/{id}`

- bidSlice (`store/slices/bidSlice.js`)
  - State: { loading }
  - Thunks
    - placeBid(id, { amount }): POST `/bid/place/{id}` then refreshes auction detail

Usage Example
```jsx
import { useDispatch, useSelector } from 'react-redux'
import { getAllAuctionItems } from '@/store/slices/auctionSlice'

const AuctionsPage = () => {
  const dispatch = useDispatch()
  const { allAuctions, loading } = useSelector(s => s.auction)
  useEffect(() => { dispatch(getAllAuctionItems()) }, [])
  // ... render list
}
```