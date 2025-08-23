// Immedieatly Invoked Function Expressions 
 //  An IIFE is a function in JavaScript that is executed immediately after it is defined.It runs once and does not need to be called separately.
 
 
 // use case :- 1 - Avoid polluting global scope (variables inside IIFE are private).

// 2- Encapsulation – create a private scope.

// 3- Initialize code immediately (good for setup code).

// 4- Used in modules, libraries, frameworks.

// Wrapped inside () → converts function into an expression.
// ✅ Second () → immediately executes it.


(function chai (){
    // named ifee
    console.log(`Db connected`);
    
})();                           // this semicolumn is used to seperate the two ifee function 

((name)=> {  // parametrized arrow function with ifee
    // unnamed ifee
    console.log(`DB connected two ${name}`);
    
})("yash");