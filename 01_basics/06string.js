const name = "khushi";
const repocount = 6

//console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // Known as string interpollation
console.log(` ${name}  ${repocount}`);

const gameName = new String("Khushi_singh_yes");

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('K'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newStringOne = "  khushi  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://khushi.com%20singh";

console.log(url.replace('%20', '_'));
console.log(url.includes('khushi'));
console.log(url.includes('happy'));

console.log(gameName.split('_'));

