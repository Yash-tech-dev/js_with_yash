// 🔹 What is a Promise?

// A Promise in JavaScript is an object that represents the result of an asynchronous operation.

// Think of it like a “container for a future value” — something that will give you the result later (success or failure).

// Example in real life:
// 👉 Ordering food online (Zomato/Swiggy)

// You place the order → Promise is created.

// Restaurant accepts → Promise is resolved (food will arrive).

// Restaurant cancels → Promise is rejected (sorry, no food).

// 🔹 States of a Promise

// A promise can be in 3 states:

// Pending → Waiting (e.g., food is being prepared).

// Fulfilled (Resolved) → Success (food delivered ✅).

// Rejected → Failure (order canceled ❌).

// 🔹 How to Create a Promise
// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed successfully!");
//   } else {
//     reject("Something went wrong.");
//   }
// });

// 🔹 Consuming a Promise

// We use .then() and .catch() to handle it:

// promise
//   .then((result) => {
//     console.log(result);  // Runs if resolved
//   })
//   .catch((error) => {
//     console.log(error);  // Runs if rejected
//   })
//   .finally(() => {
//     console.log("Promise settled (either resolved or rejected).");
//   });

// 🔹 Async Example (with setTimeout)
// let orderFood = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let foodReady = true;

//     if (foodReady) {
//       resolve("Food is ready 🍕");
//     } else {
//       reject("Food not available ❌");
//     }
//   }, 2000); // after 2 seconds
// });

// orderFood
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// 🔹 Why Use Promises?

// To avoid callback hell (nested callbacks).

// To handle asynchronous tasks like:

// API requests (fetching data from server),

// File reading,

// Timers,

// Database queries.






// const promiseOne=new Promise(function(resolve,reject){  // promise producer block of code 
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
        
//     },1000)

// }

// )
// promiseOne.then(function(){
//     console.log("promise consumed");
    
// }) // promise consumer block of code ..... then is directly connected with resolve... then contains a callback function 



// another way to define promise

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
        
//     },1000)

// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

//==========================================================

// const twoPromise= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             userName:"yash",email:"chai@example.com"
//         })
//     },1000)
// })

// twoPromise.then(function(user){
//     console.log(user);
    
// })

//===------------------Promise Chaining (use of reject--------------------------------------------

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//         resolve({
//             userName:"Yash", Password:"Yash@1234"
//         })}else{
//             reject("ERROR,Something went wrong")
//         }
        
//     },1000)


// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.userName
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){  // use for reject 
//     console.log(error)
// }).finally(()=>{    // excutes confirmly one time 
//     console.log("the promise is either resolved or rejected")
// })

// ---------------------use of async await-------------------------------------

// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error1=false;
//         if(!error1){
//         resolve(
//             {language:"JavaScript",Pass:"1234"}
//         )}else{
//             reject("there is error");
            
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response=await promiseFive
//         console.log(response);
        
        
//     } catch (error) {
//         console.log(error);
        
        
//     }
// }
// consumePromiseFive()


//-----------------------async with fetch(using api)---------------------------------

async function getApi (){
    try{
        const response=await fetch('https://api.github.com/users/yashsaini')
       
        const data=await response.json()
        console.log(data);
        
    }catch(error){
        console.log(error);
        
        
    }
    
}
getApi()