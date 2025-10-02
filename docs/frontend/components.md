Frontend Components

App Structure
- Key UI components are under `frontend/src/custom-components` and layout under `frontend/src/layout`. Pages are under `frontend/src/pages`.

Reusable Components
- Card (`custom-components/Card.jsx`)
  - Props: { imgSrc, title, startingBid, startTime, endTime, id }
  - Behavior: Displays item image, title, starting bid, dynamic countdown (Starts In / Ends In). Links to `/auction/item/{id}`.
  - Example
```jsx
<Card
  id={auction._id}
  imgSrc={auction.image.url}
  title={auction.title}
  startingBid={auction.startingBid}
  startTime={auction.startTime}
  endTime={auction.endTime}
/> 
```

- CardTwo (`custom-components/CardTwo.jsx`)
  - Props: { imgSrc, title, startingBid, startTime, endTime, id }
  - Behavior: Seller-facing card with countdown, "View Auction", "Delete Auction", and "Republish Auction" actions. Launches drawer to set new times.
  - Example
```jsx
<CardTwo
  id={item._id}
  imgSrc={item.image.url}
  title={item.title}
  startingBid={item.startingBid}
  startTime={item.startTime}
  endTime={item.endTime}
/>
```

- Spinner (`custom-components/Spinner.jsx`)
  - Props: none
  - Behavior: Centered loader using `react-spinners` HashLoader.
  - Example
```jsx
{loading ? <Spinner /> : <Content />}
```

Layout Components
- Header (`layout/Header.jsx`)
  - Shows navigation and auth-aware links; uses Redux `user` state; logout dispatches slice action.
  - Import with: `import Header from '@/layout/Header'` (path alias assumed by tooling).

- SideDrawer (`layout/SideDrawer.jsx`)
  - Mobile side navigation with auth-aware menu and social links.

Pages (Selected)
- Home, Auctions, AuctionItem, ViewAuctionDetails, ViewMyAuctions, CreateAuction, Login, SignUp, UserProfile, Leaderboard, About, Contact, HowItWorks.
  - Export default React components per file under `frontend/src/pages/...`.

Utilities
- cn (`lib/utils.js`)
  - Signature: `cn(...inputs)`
  - Merges class names using `clsx` and `tailwind-merge`.
  - Example
```jsx
<div className={cn('p-4', isActive && 'bg-blue-500')}>Hello</div>
```