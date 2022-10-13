const config = require("./config");
const app = require("./src/app");

const port = config.PORT || 8001;
const ip = config.IP || "127.0.0.1";

app.listen({ port, ip }, () =>
  console.log(`🚀 Server ready at http://${ip}:${port}`)
);

module.exports = app;
