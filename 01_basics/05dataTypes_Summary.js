//  Primitive

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const bigNumber = 234412289945n;
const value = null;
console.log(typeof(value));

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)
;
// Reference (Non Primitive)

// Array,Objects,Functions

// Array

const heros = ["Khushi","is","Best"];

// Objects

let myObj = {
    name : "Khushi",
    age :22,
}

// Function

const myFunction = function(){
    console.log("Hello Khushi");
}

console.log(typeof(myFunction));




// +++++++++++++++++++++++++++++++++++++


// stack(primitive) , heap(non primitive)

let khushi = "hello";
let anothername = khushi;

anothername = "chaiaurcode";

console.log(khushi);
console.log(anothername);

let userone = {
    email : "khushi@google.com",
    upi : "user@byl"
}

let usertwo = userone;

usertwo.email = "yes@google.com";

console.log(userone.email);
console.log(usertwo.email);