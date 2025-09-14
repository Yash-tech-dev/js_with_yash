// const user={
//     username:"yash",
//     loginCount:10,
//     signedIn:true,

//     userDetails:function(){
//         console.log(`userName is:${this.username}`);
        
//     }
// }
// user.userDetails()

// function user(username,loginnAcc,isSigned){
//     this.username=username;
//     this.loginnAcc=loginnAcc;
//     this.isSigned=isSigned;
//     return this
// }

// const userOne=user("yash",2,"true")
// const usertwo=user("piyush",4,"true")
// console.log(userOne); // here it still showing the value usertwo ("piyush",4,"true") this is because we are not using the new keyword 

// const userOne = new User("yash", 2, true);
// const userTwo = new User("piyush", 4, true);

// working of new keyword 

// This does four things automatically for you:

// Creates a new empty object {}

// Sets this inside the function to that new object

// Runs your function body

// Returns that new object by default (no return needed)


//----------so the code will be -----------------------------

function user(username,loginnAcc,isSigned){
    this.username=username;
    this.loginnAcc=loginnAcc;
    this.isSigned=isSigned;
    
}

const userOne=new user("yash",2,"true")
const usertwo=new user("piyush",4,"true")
//console.log(userOne); //user { username: 'yash', loginnAcc: 2, isSigned: 'true' }

//console.log(usertwo); //user { username: 'piyush', loginnAcc: 4, isSigned: 'true' }

console.log(userOne.constructor); // [Function: user] 

console.log(userOne instanceof user); // true



