// 1. function
function printhello() {
    console.log('hello');
};

printhello();

function log(message){
    console.log(message);
};
log('Hello');
log(1234);

// 2.Parameters
function changeName(obj){
    obj.name = 'coder';
};
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from='unkwnow') { 
    console.log(`{message} by ${from}`);
};
showMessage('hi');

//4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
};
printAll('dreams', 'coding', 'ellie');

// 5. Local Scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
let globalmessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalmessage);
    function pringAnother(){
        console.log(message);
        let childmessage = 'hello';
    }
};
printMessage();

//6. Return a value
function sum(a, b){
    return a + b;
};
const result = sum(1,2);

// 7. Early return , early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        return;
    }
};

//1. Function expression
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. callback function using function expression
function randomQuize(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
};

const printYes = function () {
    console.log('yes');
};

const printNo = function print() {
    console.log('no');
};
randomQuize('wrong', printYes, printNo);
randomQuize('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;

function hello() {
    console.log('IIFE');
}
hello();