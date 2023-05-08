const express = require("express");

const { ServerConfig, Logger } = require("./config");

const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log("started the server successfully on PORT: 3000");
  Logger.info("Successfully started the server", "root", {});
});
