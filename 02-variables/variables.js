// var => 
// Re - declare => Variable Name change => Allowed
// Re - assign  => Value change         => Allowed
var score = 100;
console.log(score);

score = 120;
// console.log(score); 

var score = 300;
// console.log(score);


// Let => 
// Re Assign => value change  => Allowed  
// Re Declare => variable name change =>  Not Allowed 

let scoreLet = 150; 
console.log(scoreLet);

scoreLet = 200;
console.log(scoreLet);

// let scoreLet; 

// const => contant 
// Re Assign => value change  => Not Allowed  => TypeError: Assignment to constant variable.
// Re Declare => variable name change =>  Not Allowed 

const name = "Ravi";
// name = "Sanjay";

console.log(name);

// const name;

