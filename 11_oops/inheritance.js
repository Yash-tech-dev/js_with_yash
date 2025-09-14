// prototypal Inheritence

// using __proto__ method 

const user={
    userName:"chai"
}

const teacher={
    makeVideo:"true"

}

const teachingSupport={
    isAvail:false
}

teachingSupport.__proto__=teacher  //taditional method
console.log(teachingSupport.makeVideo);


//modern Syntax

//setprototypeof() method

Object.setPrototypeOf(teacher,user)  // teacher is child and user is parent ....here teacher has taken property of user
console.log(teacher.userName); // we are trying to access the prop pf user with the help of teacher object 
console.log(user.makeVideo); // undefined 

//==================================================================================================================

let anotheUser="Yash Saini     "

String.prototype.findlength=function(){
    console.log(this);
    console.log(`true length is: ${this.trim().length}`);
    
    

}

anotheUser.findlength()

"Piyush".findlength()