// falsy values 

//false , 0, -0 , BigInt 0n ,"",null , undefined,NaN

//===================================
// except above all are truthy values 

// some other truthy values 

// "0"  string ke andr ki value truthy value hongi saari
// 'false'
//  " " string ke andr space bhi truthy hoga 
//  []  array bhi truthy hoga empty ho ya fill with values 
//  {}  object bhi same as above 
// function(){}

if ("hello") {
  console.log("This is truthy");
}

if (0) {
  console.log("This will NOT run, because 0 is falsy");
}

if ([]) {
  console.log("Even an empty array is truthy!");
}

if ({}) {
  console.log("Even an empty object is truthy!");
}


// nullish coalescing operator (??): null undefined 

let val1;
//val1 =5?? 10 // 5
val1=null?? 10 // 10
val1=undefined?? 15 //15 
val1=null?? 10?? 15 //10 give very first logical value 



console.log(val1);


//============ternary operator================

//  condition ? true? false 


let num=14
num%2==0 ?console.log("even number"):console.log("odd number");
;
