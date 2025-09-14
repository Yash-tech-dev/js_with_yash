// array -> object-> null

// array has parent as object and object has null as parent

// String -> object -> null


// function -> object -> null 


function multipleBy5(num){
    return num*5

}
// console.log(multipleBy5(6).power=4)
// console.log(multipleBy5.prototype); // o/p=> {} ultimatley it is also giving object 


//--------------------to create your function using prototype------------------------------------

function createUser(userName,score){
    this.userName=userName;
    this.score=score;


}

createUser.prototype.doIncrement=function(){  // here doIncrement method is userdeefined function that is created with the help of prototype
    this.score++;

}
createUser.prototype.printPrice=function(){ // here printPrice is  used for printing the price of the thing that is created with prototype
    console.log(`Price is ${this.score}`);
    
}
const chai=new createUser("chai",45) //new keyword is used fro diffrentiating which object is using the current value
const tea =new createUser("tea",89)
 
chai.doIncrement()
chai.printPrice()

tea.printPrice()
tea.doIncrement()
tea.printPrice()


// ----------------------importance of new keyword -------------------------------------

// JavaScript does these steps:

// Create a new empty object: {}

// Set the prototype of this new object to ConstructorFunction.prototype.

// Call the constructor function with this bound to the new object.

// Return the new object (unless the constructor explicitly returns a non-primitive object).