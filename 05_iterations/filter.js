//=========for each with array====================

const fruits=["apple","banana","pear","mango"];
const myValues =fruits.forEach((values) =>  {

    //console.log(values); // here print th value of array 
   return values;
    
    
});
// console.log(myValues); // but here it  doesnot return array with using foreach


//  forEach does not return anything → it always returns undefined.
// So myValues will be undefined, not an array.
// That’s why when you console.log(myValues), you won’t see the values.

// Inside the forEach, you wrote return myValues; → but myValues is not defined yet at that point (circular reference).
//  That’s why it can throw a ReferenceError if accessed before declaration.





//---------------------this can be done bye filter function----------------------------

// it returns the values 
// filter() → used to select only the elements that meet a condition.


const myNums=[1,2,3,4,5,6,7,8,9,10];

// const store=myNums.filter((num) => {   // if you are using scope i.e. {} the  you need to use return keyword fot returning any values 
    
//    return num>3 
// })
// console.log(store);
 

// another way to use filter function

const store=myNums.filter((num) =>  num>3 )  // here we are using normal paranthesis so we dont need to use explicitly return keyword
//console.log(store);


//---------------------filter func with objects----------------------------

const students = [
  { id: 1, name: "Amit", marks: 85 },
  { id: 2, name: "Riya", marks: 42 },
  { id: 3, name: "Kabir", marks: 76 },
  { id: 4, name: "Neha", marks: 33 },
  { id: 5, name: "Sahil", marks: 91 }
];


let result=students.filter((n) => {return n.id >=3})

 result=students.filter((n) => {return n.id >=2 && n.id<=4})

  result=students.filter((n) => {return n.marks >=42 && n.marks>=76})

    result=students.filter((n) =>{return n.name==="Neha"})


console.log(result);

//=========================================================================


// 🔹 Key Points Often Asked in Interviews

// Does filter() modify the original array?

// ❌ No, it returns a new array.

// What is returned if no elements pass the test?

// ✅ An empty array (not null or undefined).

// Difference between filter() and map()

// map() → transforms elements, keeps same length.

// filter() → selects elements based on condition, may reduce length.

// Difference between filter() and forEach()

// forEach() → used for iteration, does not return anything.

// filter() → returns a new filtered array.

// Time Complexity

// O(n) → runs once for each element.

// Can you chain filter() with other methods?

// ✅ Yes! (Very common in real-world use)

//✅ Interview Trick Question:
// 👉 "If no element matches the condition in filter(), what will you get?"
// Answer: An empty array ([]).




