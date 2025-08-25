// for of (array specific loop)

const arr=[2,3,4,6,1,8]

for (const numbers of arr) {
   // console.log(numbers)
    
}

const str="greetings"

for (const s of str) {
   // console.log(s);
    
    
}

// -----------------------map function--------------------

//containes the values in the form of key:pair
// contains non duplicate values 

const m=new Map()
m.set('Ib',"India")  // keys should be unique... value can be duplicate 
m.set('CN',"Canada")
m.set('IQ',"iraq")
m.set('IN',"India")   // diffrent keys with same value

//console.log(m); // o/p= { 'IN' => 'india', 'CN' => 'Canada', 'IQ' => 'iraq' }

for (const e of m) {
    //console.log(e);
    
    
} // gives outout in the form of array 
// [ 'Ib', 'India' ]
// [ 'CN', 'Canada' ]
// [ 'IQ', 'iraq' ]
// [ 'IN', 'India' ]

// if you want to access the value in key pair form

for(const [key,value] of m){  // by use of big brackets we can directly access the values in key values 
   // console.log(key,':-',value);
  
}

//Ib :- India
// CN :- Canada
// IQ :- iraq
// IN :- India

// const myObject={
//     game1:"tekken3",
//     game2:"vice city"
// }

// for (const [key,value] of myObject) {
//    // console.log(myObject);
    
    
// }  // so objects are not iterable...forof can not be used with objects


//================for in loop=========================

const obj={
    1:"books",
    2:"pens",
    3:"pencils"
}

for (const key in obj) {
    
     const element = obj[key];
     console.log(`${key} is assigned to ${element}`);
     
}

// for in loop is used with objects and can itreate the key,values of objects

//o/p= 1 is assigned to books
// 2 is assigned to pens
// 3 is assigned to pencils
//-----------------------------------------------------
// important:- for in loop values can not used with map  
//why?

// for...in is designed for enumerating properties of objects (keys of an object).

// A Map is not a plain object, it’s a special iterable collection.

// So for...in won’t give you the key–value pairs of a Map. In fact, it won’t work at all the way you expect.

// example given below

const myMap = new Map([
  ["x", 10],
  ["y", 20]
]);

for (const key in myMap) {
//  console.log(key);  // ❌ Nothing useful, no map keys
}