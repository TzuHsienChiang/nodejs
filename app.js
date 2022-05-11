
/*補充：coding style 區塊分類寫*/
// 第一個區塊 內建模組
const path = require('path');
const http = require('http');
const url = require('url');

// 第二個區塊 第三方模組(套件)

// 第三個區塊 自建模組


///////////////////////////使用內建模組 http 來建立 Web server/////////////////////////////////

/*  const server = http.createServer((req, res) => {
	console.log('第一個參數是瀏覽器對 web server 的 request', req);
	console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
	res.end();
});
    server.listen(3000, () => {
        console.log('Web Server is running on port 3000');
    });
*/

///////////////////////依據不同的 request 的 url，回應不同的內容/////////////////////////////////////

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); //MIME type //這串是告訴瀏覽器回傳內容的類型
        return res.end('<h1>This is Home page</h1>');
    }
    if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); //MIME type
        return res.end('<h1>This is Login page</h1>');
    }
	res.end();
});

server.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});

///////////////////////認識 URL 的狀態資訊（內建模組 url）/////////////////////////////////////
console.log(url.parse('https://www.youtube.com/watch?v=ssZTiB8yg94&t=43s'));
