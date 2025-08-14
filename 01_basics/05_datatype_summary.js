// classification of datatypes 
// 2 types :- Primitive datatype (call by value)
//            non primitive datatype or reference datatype 

// primitive dt :- 7 types (String,Number,Boolean,null(empty but not 0),undefined(value not decieded yet),Symbol(to define the value unique),BigInt)

//refernce or non primitve:-  allocates the reference in the memory
// Array,Objects,Functions


// javascript is dynamically typed language 
// no type declaration required
//type can change at runtime
// type checking happens at runtime 

// const score=123; //number
// const scoreValue=100.3; //Number
// const isloggedin=true //boolean dataype
// const outsidetemp=null //null datatype
// let useremail; //undefined datatype

let username=undefined // undefined datatype 

const id=Symbol('123')
const anotherid=Symbol('123')


    console.log(id===anotherid); // false  bcoj each call of symbol () create an new symbol id

const bigNumber=345628836542189644465n

// non primitive  datatype 

const heros=["ironman","hulk","spiderman"];

const myobj={
    name:"yash",
    age:22

}

const myfunc1=function (){
    console.log("hello world");
}


//---------------------------------------------------

// Stack(primitive) ,Heap(Non-Primitive)
//  stack me value ki copy milegi  ||  heap me value ka reference milega 

let myname="yash"

let myothername=myname;
myothername="prince"
console.log(myothername)  // stores in stack(primitive datatype)
console.log(myname)

let userone={
    name:"yash", //using non primitive datatype 
    id:"123"
}; 

let usertwo=userone; //stores the reference in heap

 usertwo.id=121;
console.log(usertwo)
console.log(userone);