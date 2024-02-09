let score1 = "33";
let score2 = "33abd"; // yah wala convert ho jaiga but value will not be accurate

let scoreInNumber = Number(score2);
// console.log(scoreInNumber); // answer will be NAN 


let isLoggedIn = "0";
let canBeBoolean = Boolean(isLoggedIn);
console.log(canBeBoolean);

// in a nuttshell
// 1 => true ,           0 =>false
// "something" => true,  ""=>false