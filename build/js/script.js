// var fs  = require("fs");
// var f = fs.readFileSync('./../spares-list.json').toString();
// var pages = JSON.parse(f);
// for (var key in pages) {
//     var page = pages[key];
//     fs.writeFile(
//         key.replace(/ /g, '_')+'.html',
//         '<h1>'+page.title+'</h1>'
//         + '<p>'+page.description+'</p>'
//     );
// }