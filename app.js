console.log("不要再hello world"); 
const hello=require("./hello") //同層 //3.匯入了hello模組(hello.js檔案)，匯入完就可以使用它

hello.say(); //4.當我執行app.js 就會出現hello.js的內容

const greet=require("./hello")
greet.greetA();