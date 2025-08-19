// //singelton

// //object literals
const user={
    "name":"yash",
    age:18,
    location:"jaipur",
    email:"yash@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]

} 

// // ways to access the value 

// console.log(user.email); 
// console.log(user["email"]); // when brackets used then it act as a string so we need "" to access it 

// console.log(user["name"])

// user.email="piyush@gmail"
// Object.freeze(user); // the object.freeze will restrict to change the object value 
// user.email="hansh@gmail"
// console.log(user.email); // still show piyush@gmail.com

// use of function in javascript
user.fun1=function(){
    console.log("hey do  you wan to learn javascript")

}

user.fun2=function(){
    console.log(`hello js user,${this.name}`);
    
}

console.log(user.fun1())
console.log(user.fun2())