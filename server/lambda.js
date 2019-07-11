const puppeteer = require("puppeteer");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.use(express.static("public"));
server.listen(7000);

async function launchBrowser() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:7000");

  const html = await page.content();
  await browser.close();
  server.close();

  return html;
}

exports.handler = launchBrowser;
