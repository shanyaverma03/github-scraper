const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfKit = require("pdfkit");

function getIssuesPageHtml(url, topic, repoName) {
  request(url, cb);
  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      getIssues(html, topic, repoName);
    }
  }
}

function getIssues(html, topic, repoName) {
  const $ = cheerio.load(html);
  const issuesArr = $(
    ".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title"
  );
  const arr = [];
  for (let i = 0; i < issuesArr.length; i++) {
    const link = $(issuesArr[i]).attr("href");
    arr.push(`https://github.com${link}`);
  }

  // Create a folder for the topic which will contain the repo files
  const folderpath = path.join(__dirname, topic);
  dirCreator(folderpath);
  const filePath = path.join(folderpath, repoName + ".pdf");

  const pdfDoc = new pdfKit();
  pdfDoc.pipe(fs.createWriteStream(filePath));

  arr.forEach((link) => {
    pdfDoc.fontSize(12).fillColor("blue").text(link, {
      link: link,
      underline: true,
    });
    pdfDoc.moveDown(); // Adds space between the links
  });

  pdfDoc.end();
}

module.exports = getIssuesPageHtml;

function dirCreator(folderpath) {
  if (fs.existsSync(folderpath) === false) {
    fs.mkdirSync(folderpath);
  }
}
