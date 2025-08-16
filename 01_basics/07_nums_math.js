// const score=400

// const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString); //change number into string
// console.log(balance.toString().length);
// //------------------------------------------------------------------------------------

// // to fixed function
// // e commerce website me price ko decimal  value dene ke lie hota h 

// console.log(balance.toFixed(2))// value deni pdegi ki kha tk precise krna h //o/p :- 100.00
// //-------------------------------------------------------------------------------------------------------


// const otherNumber= 123.8966

// console.log(otherNumber.toPrecision(4)) // value ko precise krega + round off bhi krega decimal values ko ...o/p- 123.9

// const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN')); // value me 0s ke bich me , ko add kr dega readability ko badhane ke lie 

//--------------------------------------------------------------------------------------------------------------------------------

// +++++++++++++++++++++++++ MATHS Library +++++++++++++++++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-4)) // - value change into positive value

// console.log(Math.round(4.6)) // o/p-5

// console.log(Math.ceil(4.1)); // gives ceil value .. gar .0 se value jayad hogi to valu ko+1 kr dega 

// console.log(Math.floor(4.9));


// console.log(Math.min(50,87,54,32)); // minimum value 

// console.log(Math.max(50,87,54,32)); // returns maximum value 
 

//++++++++ Math.random +++++++++++++++++++++

console.log(Math.random()); // gives random value between 0 & 1  after each execution.....o/p- 0.08307364100604264

console.log((Math.random()*10)+1); // for finding the random value greater than 1  ....o/p- 2.696020237609981

console.log(Math.floor(Math.random()*10)+1); // o/p- 6

const min= 10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+ min); // to find random value but greater than 10 . .... output will bw change after each new execution like 12,17,15



