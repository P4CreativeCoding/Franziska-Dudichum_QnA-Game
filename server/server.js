const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const fs = require("fs");
const path = require("path");

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../client/index.js");
  fs.readFile(filePath, "utf-8", (err, htmlContent) => {
    if (err) {
      console.error("Error reading HTML file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.type("html").send(htmlContent);
    }
  });
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
