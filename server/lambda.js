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

  try {
    const html = await page.content();
    console.log(html);
  } catch (e) {
    console.error(e);
  }

  await browser.close();
  server.close();
}

launchBrowser();
