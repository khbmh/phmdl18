/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 44;
const num2 = 79;

let result;

/*

=============== 

       simple if-else

===============

*/

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}

console.log(result);



/*

=============== 

       ternary operator
       
===============

*/

num1 > num2 ? (result = num1 * 2) : (result = num1 + num2);

console.log(result);
