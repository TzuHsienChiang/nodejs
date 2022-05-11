//第一種方式
/*
1.在hello.js定義一個方法叫sayHello()
2.匯出sayHello這個函式，並且匯出後取名為say(所以在另個檔案要使用時就要用匯出後改得名）：module.exports.say= sayHello;
3.去app.js匯入了hello模組(hello.js檔案)，並取一個新名、新變數去store匯入內容，匯入完就可以使用它
const hello=require("./hello") 
4.呼叫方法：匯入後新名.匯出後新名（當我在app.js呼叫函式，就會出現hello.js匯出的say內容）
hello.say(); */

// hello.js //1個js檔案（hello.js)就是1個模組(hello模組)
const title="I am Hello Module";
const sayHello = () => {
    console.log('Hello!');
};//第一種方式 1.定義一個方法叫sayHello()
module.exports.say= sayHello;//2.hello.js這個模組檔案匯出一個叫say的東西，而這個叫say的東西是執行hello.js檔案的sayHello函式：印出:hello!

const sayGoodnight=()=>{
    console.log("GoodNight!");
}

const greetings=()=> {
    console.log("GoodMorning!");
}
module.exports.greetsA= greetings;

//第二種方式：物件形式寫法(全部寫一起，key可以自己取，值就是這個key會指向的位置，也就是會指向要執行的指令，所以也可以打成say:sayHello，但就不能用第三種寫法了喔)
module.exports={
    sayHello:sayHello, 
    sayGoodnight:sayGoodnight,
    title: title,
};


//第三種方式：物件形式簡寫（當key、value是同個字的話，可以這樣寫）

module.exports={
    sayHello, //=sayHello: sayHello
    sayGoodnight,
    title,

};