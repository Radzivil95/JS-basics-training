/*
The final task for now — in this case you are provided with some existing code, which has two errors present in it. 
The results panel should be outputting the name Chris, and a statement about how old Chris will be in 20 years' time. 
How can you fix the problem and correct the output?

const myName = 'Default';
myName = 'Chris';

let myAge = '42';
*/


let myName = 'Default';
myName = 'Chris';

let myAge = 42;


console.log(`My name is ${myName} and in 20 years, I will be ${myAge + 20}`);