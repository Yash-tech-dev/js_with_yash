// const arr11 = [12, 45, 21, 56]
// const arr12 = [98, 54, 36, 27]
// // arr11.push(arr12) // here it treats arr12 as a single array element
// // console.log(arr11) // [ 12, 45, 21, 56, [ 98, 54, 36, 27 ] ]
// // console.log(arr11[4][2]) // 36

// const newarr = arr11.concat(arr12)
// console.log(newarr) // [12, 45, 21, 56, 98, 54, 36, 27]
 

// const another_array=[1,2,3,[4,5,6],[7,8,9,[10,11]]];
// const real_arr=another_array.flat(3)  // gives a single normal array with all elements 
// console.log(real_arr) //[1, 2, 3, 4,  5,6, 7, 8, 9, 10,11]

console.log(Array.from("yash")); // [ 'y', 'a', 's', 'h' ] converts string or object into arrays
console.log(Array.from({name:"yash"})); // intresting  means you have to specify thta key or value otherwise it gives blank array


let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3)) // coverts all values in single array