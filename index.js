import cheerio from "cheerio";

import { getHtml ,scrapePost , getLinks} from "./lib/scrape";
(async ()=> {
// const htmlData = await getHtml("https://toonsouthindia.com/");
// const links = getLinks(htmlData);
// links.forEach(link => scrapePost(link))


const url  = "http://toonsouthindia.com/category/telugu/page";
for(let i=1;i<=8 ; ++i){
  
  const htmlData = await getHtml(`${url}/${i}` )
  const links = getLinks(htmlData);
  // links.forEach(link => console.log(link))
}

})();
