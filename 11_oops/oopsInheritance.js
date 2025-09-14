class user{
    constructor(username){
        this.username=username
    }
    userProp(){
        console.log(`username is ${this.username}`);
        
    }
}

class child extends user{
    constructor(username,email,age){
        super(username)
        this.email=email
        this.age=age
    }
    details(){
        console.log(`details are ${this.username} ${this.email} ${this.age}`);
        
    }
}

const chai=new child("yash","saini@mail.com",22)

const tea=new user("piyush","mail.com",20)
chai.details()
chai.userProp() // error

tea.userProp()
// tea.details() // parent class can not access th  prop of its child claass