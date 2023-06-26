// 1. User Strict
// added in ES 5
// user this for Valina javascript.
'user strict'

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'elie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var는 이용하지 마라 이유는 선언하기도 전에 값을 넣어도 된다는 문제점이 생긴다(혼란 발생가능성 높아짐)

// var hositing(어디에 선언한거에 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다)

// var는 bloack scope가 없다
{
    age=4;
    var age;
}
console.log(age);

// 3. Constants (보안성, 스레드 보안, 실수를 줄일 수 있음)
// 변경할 필요가 없는값을 선언할때 사용

const day = 5;

// 4. variavle types
// single item : number, string, boolean, null, undefined, symbol object, box COntainer

const count = 17;
const size = 17.1;
console.log(`value:${count}. type:${typeof count}`);
console.log(`value:${size}, type : ${typeof size}`);

// number - spicla
const infinity = 1 / 0;
const nefativeInfinity = -1 / 0;
const nAn = 'not a Number' / 2;
console.log(infinity);
console.log(nefativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`)
const helloBob = `hi ${brendan}!`;
console.log(`value : ${helloBob}`);

// boolean
// false " 0, null, undefined, Nan, ''
// true : any other value

const canRead = true;
const test = 3 < 1; / //false
console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

//null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = {name : 'ellie', age : 20};
ellie.age = 21;
console.log(ellie);

//5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
