// hello.js //1個js檔案（hello.js)就是1個模組(hello模組)
const sayHello = () => {
    console.log('Hello!');
};//1.定義一個方法叫sayHello()

module.exports.say= sayHello;//2.hello.js這個模組檔案匯出一個叫say的東西，而這個叫say的東西是執行hello.js檔案的sayHello函式：印出:hello!

const greetings=()=> {
    console.log("GoodMorning!");
}
module.exports.greetA= greetings;