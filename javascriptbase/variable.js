// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//conditional operators : if
// if, else, if , else
const name = 'coder';
if (name === 'tmdgus'){
    console.log('Welcome, tmdgus');
}else if(name === 'coder'){
    console.log('amazing');
}else {
    console.log('unkwnon');
}

//9. Ternary operator : ?
// condition ? value1 : valule2
console.log(name === 'elie' ? 'yes' : 'no');

//10 switch

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//loops
let i = 3;
while(i > 0){
    console.log(`while : ${i}`);
    i--;
}

do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for ( i = 3; i > 0; i--){
    console.log(`for:${i}`);
}

for(let i = 3; i>0; i= i-2){
    console.log(`inline variable for : ${i}`);
}

for (let i = 0; i<10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i : ${i}, j : ${j}`)
    }
}

//break
for(let i=0; i<11; i++){
    if(i%2==0 && i!=0){
        console.log(i);
    }
    continue;
}
for(let i=0; i<11; i++){
    console.log(i);
    if(i==8){
        break;
    }
}