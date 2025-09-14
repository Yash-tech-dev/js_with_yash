const arr=["thor","ironman"];

const obj={
    thor:"thunder",
    ironman:"power",

      func:function(){
        console.log(`ironman uses his ${this.ironman}`);
        

    }
}

Object.prototype.yash=function(){ // userdefined function that can associate with all array,string,function 
console.log("function of yash");

}

obj.func()

// use of Object.protype
obj.yash() // accessing the value of function of yash with object 
arr.yash()// accessing the value of function of yash with array

