
/*補充：coding style 區塊分類寫*/
// 第一個區塊 內建模組
const path = require('path');
const http = require('http');

// 第二個區塊 第三方模組(套件)
// app.js 匯入cowsay、使用它
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

// 第三個區塊 自建模組
const hello = require('./hello');

////////////////////////////////////////////////////////////////

hello.sayHello();

console.log(hello.title); 

