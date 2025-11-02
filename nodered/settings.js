module.exports = {
  uiHost: "0.0.0.0",
  uiPort: process.env.PORT || 1880,

  // Chạy Node-RED dưới tiền tố /nodered
  httpAdminRoot: '/nodered',
  httpNodeRoot: '/nodered',

  // Cho phép CORS để SPA gọi API
  httpNodeCors: {
    origin: "*",
    methods: "GET,PUT,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization"
  },

  functionGlobalContext: { }
}
