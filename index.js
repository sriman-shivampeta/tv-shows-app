const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static("dist"));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname + "/dist/index.html"))
);

const server = http.createServer(app);

server.listen(port, () => console.log("Running on port " + `${port}`));
