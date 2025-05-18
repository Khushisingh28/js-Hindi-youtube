const accountId = 144553
let accountEmail = "khushi@01.com" // there is a concept of scope
var accountPassword = "12345" // there is no concept of scope 
accountCity = "Jaipur" 
let accountState;

//accountId = 2 // not allowed

console.log(accountId);
accountEmail = "kh@12.com";
accountCity = "Chhapra"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accountId,accountEmail,accountPassword,accountCity,accountState])