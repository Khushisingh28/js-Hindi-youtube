// ++++++++++++++++++++++++++ DATES ++++++++++++++++++++++++++++++++++
// Date is a object

let myDate = new Date();
console.log(myDate.toString()) ;
console.log(myDate.toDateString()) ;
console.log(myDate.toLocaleString()) ;

console.log(typeof(myDate)) ;

let myCreatedDate = new Date(2025,0,23); // in javascript months starts from 0
console.log(myCreatedDate.toDateString());
