const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

const string = balance.toString();
console.log(string);
console.log(string.length);

console.log(balance.toFixed(2));

const otherNumber = 23.89966;
console.log(otherNumber.toPrecision(3))

const numberTwo = 123.8966;
console.log(numberTwo.toPrecision(3))

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
console.log(Number.MIN_VALUE);

// +++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // gives positive value

console.log(Math.round(4.4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // 4 se ek bada value lega jaise 5
console.log(Math.floor(4.9));// 4 ko hi lega

console.log(Math.min(4,9,3,1,0,8,6));
console.log(Math.max(4,9,3,1,2,0,8,7));

console.log(Math.random()); // it gives number between 0 and 1

console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1) + min));