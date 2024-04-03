const request = require("request");
const cheerio = require("cheerio");

const getIssuesPageHtml = require("./issues");

function getReposPageHtml(url, topic) {
  request(url, cb);
  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      getReposLink(html, topic);
    }
  }
}

function getReposLink(html, topic) {
  const $ = cheerio.load(html);
  const headingsArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
  console.log(topic);
  for (let i = 0; i < 10; i++) {
    const twoAnchors = $(headingsArr[i]).find("a");
    const link = $(twoAnchors[1]).attr("href");
    const fullLink = `https://github.com${link}/issues`;
    const repoName = link.split("/").pop();
    getIssuesPageHtml(fullLink, topic, repoName);
  }
  console.log(".......");
}

module.exports = getReposPageHtml;
