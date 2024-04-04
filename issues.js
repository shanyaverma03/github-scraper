const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

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
    arr.push(link);
  }
  console.log(topic);
  console.log(repoName, ".....", arr);
  //create a folder for the topic which wil contain the repo files
  const folderpath = path.join(__dirname, topic);
  dirCreator(folderpath);
  const filePath = path.join(folderpath, repoName + ".json");
  fs.writeFileSync(filePath, JSON.stringify(arr));
}

module.exports = getIssuesPageHtml;
function dirCreator(folderpath) {
  if (fs.existsSync(folderpath) === false) {
    fs.mkdirSync(folderpath);
  }
}
