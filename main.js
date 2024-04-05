const url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");

const getReposPageHtml = require("./reposPage");

request(url, getTopicsHtml);

function getTopicsHtml(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    getTopicsLinks(html);
  }
}

function getTopicsLinks(html) {
  const $ = cheerio.load(html);
  const linkArray = $(".no-underline.d-flex.flex-column.flex-justify-center");
  for (let i = 0; i < linkArray.length; i++) {
    const href = $(linkArray[i]).attr("href");
    const topic = href.split("/").pop();
    const fullLink = `https://github.com/${href}`;
    getReposPageHtml(fullLink, topic);
  }
}
