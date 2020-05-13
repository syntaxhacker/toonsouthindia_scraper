import axios from "axios";
import cheerio from "cheerio";

async function getHtml(url) {
  const {data} = await axios.get(url);
  return data;
}
async function scrapePost(url){
  const htmlData  = await getHtml(url);
  const $ = cheerio.load(htmlData);
  const links = $( 'a' , '.the_content');
  links.each( (index, value) => {
   const link = $(value).attr('href');
   if(link.split('/')[2] == "gplinks.co"){
     console.log(link.split(' ')[0])
   }
});
}

function getLinks(htmlData){
const $ = cheerio.load(htmlData);
const links = $( 'a' , '.entry-title');
// let dlLinks = [];
links.each( (index, value) => {
   const link = $(value).attr('href')
  //  scrapePost(link);
  console.log(link);
  // dlLinks.push(link);
});
// return (dlLinks);

}



export { getHtml , scrapePost , getLinks };
