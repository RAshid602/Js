const accoundId=13334;
let accountEmail="something@gmail.com";
var accountPassword="something";
accoundCity="jabalpur";

// i can change let, var but cannot const 
// we prefer not to use var as it has issue in scope
// accoundId=1346;  will give error
accountEmail="somethingNew@gmail.com";
accountPassword="new password";

console.log(accountEmail);
console.table( [accoundId,accountEmail,accountPassword]);
