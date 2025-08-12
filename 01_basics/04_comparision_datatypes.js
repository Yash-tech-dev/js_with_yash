// console.log(2>1);

// console.log("2">3);  // true
// console.log("02">0); //true

// console.log(null>0); //false
// console.log(null==0); //false


// console.log(null>=0); //true  here we can't find predictable result
// console.log(null<=0);  //true

// the reason is that equaality check== and comparision operators<,>=,<= work difrrentrly
//null>=0 is true and null>=0 is false 
// because comparision converts null to a number and  treating as a 0.

//When comparing null with == to a number, it’s not converted to 0.
// null is only loosely equal to undefined — and to nothing else.

// Here >= is not equality, it’s a relational operator.
// For relational comparisons (<, <=, >, >=), JavaScript first converts both operands to numbers.

// console.log(undefined==0); //false
// console.log(undefined>0); //false 
// console.log(undefined<=0); //false 

// console.log("2"==2); //true bcoj here onlye value is checking
// console.log("2"===2); // false bcoj here type and value both are checking


// console.log("2">3);
// // > is a relational operator.
// // In relational comparisons, JavaScript converts both operands to numbers (if they’re not already numbers, unless both are strings — then it does lexicographic comparison).
// // "2" → Number("2") → 2
// // but if both the operands are in string then it will give false even in relational operator

