module.exports = {
  services: {
    target: {
      apiName: 'target',
      url: process.env.TARGET_SERVICE_URL || 'http://localhost:3003/',
    },
    upload: {
      apiName: 'upload',
      url: process.env.UPLOAD_SERVICE_URL || 'http://localhost:3002/',
    },
    read: {
      apiName: 'read',
      url: process.env.READ_SERVICE_URL || 'http://localhost:3004/',
    },
  },
};
