// // let a=10
// // const b=20
// //var c=30

// //{} // ---scopes basically used with if else or loops 
// if (true){
//     let a=10
//     const b=20
//     var c=30;
// }


// //console.log(a);
// //console.log(b);
// //console.log(c);

// //-------------------let variable (global scope)-------------------

// let a=200

// if(true){
//     let a=90
//     const b=20
//     console.log("inner value ",a); //o/p=10  inner scope value 
    
// }
// console.log(a); //o/p= 200 global value 


//---------------nested scope------------------------

if(true){
    const username="yash"
    if (username==="yash"){
        const website=" js with yash"
        //console.log(username+ website);
    }
    // console.log(website); // out of inner block scope
    
}
// console.log(username); //out of parent class block scope

// ----------------------function hoisting--------------------


console.log( addOne(5)); //o/p=6 here we can declare the function calling because of hoisting

function addOne(num1){
    return num1 +1
}

//----------------------------------

//console.log(addTwo(5)); // ERROR= Cannot access 'addTwo' before initialization , here we can not declare func calling because og otherway of func declaration


// +++++++++other way to declare the function+++++++++++++++++++++
const addTwo= function(num){  // value of addTwo(5)  is taken by into num parameter 
     console.log(num);  //5 
    return num +2
   
    
}
console.log(addTwo(5)); // o/p=7




// for understanding parameters of functions accessibility 
// function box(item) {
//     console.log(item); // ✅ item exists here
// }
// console.log(item); // ❌ item does not exist here