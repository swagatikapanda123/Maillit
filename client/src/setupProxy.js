const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        ["/api", "/auth/google", '/api/*'],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
        // ["/api/*"],
        // proxy({
        //     target: "http://localhost:5000",
        // })
    )
}

// "proxy": {
//     "/api/*": {
//       "target" : "http://localhost:5000"
//     }
//   },