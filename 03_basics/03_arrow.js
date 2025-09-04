const user1={
    username:"yash",
    age:22,

     myfun:function(){
        console.log(`${this.username} has logged in`); // this keywords refers the current context or value of object 
        console.log(this);
        
        
     }

}
// user1.myfun() // o/p= yash logged in 
// user1.username="sam"
// user1.myfun() //o/p= sam logged in

//console.log(this); // {} bcoj now this keyword is out of scope and not reffreing any value or context

//=================================================================

// const chai= function(){
//     let username="yash"
//     console.log(this.username); // o/p= undefined 
    
// }
// chai()

const chai= ()=>{  // arrow function declaration
    let username="yash"
    //console.log(this.username); // o/p= undefined 
    
}
chai()


// const addnum=(num1,num2)=>{
//     return num1+num2;
// }
// console.log((addnum(5,6))); // 11



//======================implicit return in arrow func===========================

const addnum=(num1,num2)=> (num1+num2)  // note  we use only round brackets not the curly brackets in implicit return of parameters value
//console.log((addnum(5,6))) // 11




