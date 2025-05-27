let score = "33"
console.log(typeof score);
console.log(typeof(score));
let a = Number(score)
console.log(typeof(a))
console.log(a)

let khushi = "33abc"
let valueInNumber = Number(khushi);
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
//"33abc" => NaN

let cat = null
console.log(typeof(cat))
let bat = Number(cat)
console.log(typeof(bat))
console.log(bat)

let sat = undefined
console.log(typeof(sat))
let aat = Number(sat)
console.log(typeof(aat))
console.log(aat)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let Logged = ""
let booleanLogged = Boolean(Logged)
console.log(booleanLogged);

let isLogged = "Khushi"
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged);

// 1-> true; 0 => false
// "" => false
// "khushi"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof(stringNumber))
console.log(stringNumber)


// ************* Operations *****************

let value = 3
let negvalue = -value
console.log(negvalue)


console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)  // ** => power
console.log(2/2)
console.log(2%2)


let str1 = "hello"
let str2 = " khushi"
let str3 = str1+str2
console.log(str3)

console.log("1"+2);
console.log(1 + "2");
console.log("1" + 2 + 2)
console.log(2 + 2 + "1")
