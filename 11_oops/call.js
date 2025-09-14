// What is call()?

// The call() method is a built-in function method that lets you call a function with a specific this value and pass arguments individually.

// Basically, it allows you to borrow a function from one object and use it in another.

// example : like you have two functions and you ara calling a function into another function using the arguments of one func into another
// so you will use call function using this keyword to refre the current execution context 

function setUserName(username){
    this.username=username
    console.log("called");
    
}

function createUser(username,email,password){
    setUserName.call(this,username) // here we are using call method with individuall arguments and keep it mind use of this with comma and argument you want to pass)
    this.email=email;
    this.password=password;

}

const chai=new createUser("yash","sainiyash66777@gmail.com",22)
console.log(chai);
