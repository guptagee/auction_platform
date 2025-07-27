// Development Configuration
const DEV_CONFIG = {
  // API Configuration
  API: {
    BASE_URL: 'http://localhost:5001/api/v1',
    TIMEOUT: 10000,
  },
  
  // App Configuration
  APP: {
    NAME: 'Auction Platform',
    VERSION: '1.0.0',
    ENVIRONMENT: 'development',
  },
  
  // Feature Flags
  FEATURES: {
    ENABLE_ANALYTICS: true,
    ENABLE_NOTIFICATIONS: true,
    ENABLE_DEBUG_MODE: true,
  },
  
  // Cloudinary Configuration (if needed)
  CLOUDINARY: {
    CLOUD_NAME: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your_cloud_name',
    UPLOAD_PRESET: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'your_upload_preset',
  },
  
  // Debug Configuration
  DEBUG: {
    LOG_API_CALLS: true,
    LOG_REDUX_ACTIONS: true,
    LOG_ERRORS: true,
  },
};

export default DEV_CONFIG; 