// API Configuration
const API_CONFIG = {
  // Base URL for API calls
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1',
  
  // API Endpoints
  ENDPOINTS: {
    // Authentication
    AUTH: {
      REGISTER: '/user/register',
      LOGIN: '/user/login',
      LOGOUT: '/user/logout',
      ME: '/user/me',
    },
    
    // Auctions
    AUCTIONS: {
      ALL: '/auctionitem/all',
      CREATE: '/auctionitem/create',
      DETAILS: (id) => `/auctionitem/${id}`,
      UPDATE: (id) => `/auctionitem/${id}`,
      DELETE: (id) => `/auctionitem/${id}`,
    },
    
    // Bidding
    BIDS: {
      PLACE: '/bid/place',
      AUCTION_BIDS: (id) => `/bid/auction/${id}`,
    },
    
    // Commission
    COMMISSION: {
      SUBMIT: '/commission/submit',
      ALL: '/commission/all',
      UPDATE: (id) => `/commission/${id}`,
    },
    
    // Super Admin
    SUPER_ADMIN: {
      DASHBOARD: '/superadmin/dashboard',
      USERS: '/superadmin/users',
      UPDATE_USER: (id) => `/superadmin/user/${id}`,
    },
  },
  
  // Request timeout (in milliseconds)
  TIMEOUT: 10000,
  
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },
};

export default API_CONFIG; 