//練習印出：console.log("不要再hello world"); 

//第一種方法
/*
1.在hello.js定義一個方法叫sayHello()
2.匯出sayHello這個函式，並且匯出後取名為say(所以在另個檔案要使用時就要用匯出後改得名）：module.exports.say= sayHello;
3.去app.js匯入了hello模組(hello.js檔案)，並取一個新名、新變數去store匯入內容，匯入完就可以使用它
const hello=require("./hello") 
4.呼叫方法：匯入後新名.匯出後新名（當我在app.js呼叫函式，就會出現hello.js匯出的say內容）
hello.say(); */

const hello=require("./hello") //同層 //3.匯入了hello模組(hello.js檔案)，匯入完就可以使用它
hello.say(); //4.當我執行app.js 就會出現hello.js的內容

const greets=require("./hello")
greets.greetsA();

//第二種、第三種方法印出資料 
const hello=require("./hello") //只要匯入一次即可 //hello是接收匯入檔案的所有資料，並store在這hello變量裡面
console.log(hello.title)//取物件概念：取hello(接受自app.js的所有資料)當中的title
