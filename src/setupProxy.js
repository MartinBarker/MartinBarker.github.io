const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Apply headers for all responses
  app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });

  // Your existing API proxy setup
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true
  }));
};
