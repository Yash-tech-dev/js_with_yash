// // Arrays in Javascript
// const arr=[10,20,69,54,]

// console.log(arr)
// console.log(arr[0]);

// // 2nd way to declare the array in javascript 
// // using new keyword with Array()

const arr2 = new Array(12, 89, 76, 53)
// console.log(arr2)

// // Various Array function in javascript

// arr2.push(34) // adds the element in the last index
// arr2.pop()// delete the last element
// arr2.unshift(23)// add the element at very begining
// arr2.shift() // delete the value from the begining
// console.log(arr2)

// console.log(arr2.includes(89)); // includes() checks that value exist in array or not  return boolean values 

// console.log(arr2.indexOf(76)) // finds the index of the elements

// const myarr=arr2.join() // join func changes the array value in String

// console.log(arr2) // it gives valu in form array 
// console.log(myarr) // gives the value in form of "String"
// console.log(typeof myarr) // String

// Slice & splice in array

const arr3 = [0, 1, 2, 3, 4, 5]

console.log("A ", arr3)

const myn1 = arr3.slice(1, 3) // o/p -[ 1, 2 ] Returns a shallow copy of a portion of an array without modifying the original array.

console.log(myn1)

console.log("B ", arr3) // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = arr3.splice(1, 3) //Changes the contents of an array by removing, replacing, or adding elements directly in the original array.
console.log("c ", arr3) // after removing the left element in array are :- c  [ 0, 4, 5 ]
console.log(myn2); // o/p- [ 1, 2, 3 ] extracted element from array


// slice() is non-destructive, used for copying/extracting part of an array.
// splice() is destructive, used for inserting/removing/replacing elements in the original array.
// The return values are different: slice() returns the extracted copy, while splice() returns the removed elements."
