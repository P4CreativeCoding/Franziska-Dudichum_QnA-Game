const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const fs = require("fs");
const path = require("path");

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "path/to/your/html/file.html");
  fs.readFile(filePath, "utf-8", (err, htmlContent) => {
    if (err) {
      console.error("Error reading HTML file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.type("html").send(htmlContent);
    }
  });
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
