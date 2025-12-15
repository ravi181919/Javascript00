// Swap the two numbers 
// Not Re - Assign

let numOne = 10; 
let numTwo = 20; 

// Algorithm => 

/**
 *  1. make a new variable
 *  2. assign a value of previous varible, in a new variable 
 *  3. and assign a new variable to to swap variable values 
 */

// Solution =>  

console.log(`Before :: First Value ${numOne} Second Value ${numTwo}`);

//  make a new variable
let temp = numOne; // 10
numOne = numTwo; // 20
numTwo = temp; // 10 

console.log(`After :: First Value ${numOne} Second Value ${numTwo}`);
