let url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");

request(url, getData);

function getData(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    console.log("in else");
    getTopicsLinks(html);
  }
}

function getTopicsLinks(html) {
  console.log("in func");
  let $ = cheerio.load(html);
  let linkArray = $(".no-underline.d-flex.flex-column.flex-justify-center");
  for (let i = 0; i < linkArray.length; i++) {
    let href = $(linkArray[i]).attr("href");
    console.log(href);
  }
}
