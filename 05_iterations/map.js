// ----------------Map function in js------------------------

// 🔹 map() in JavaScript
// Definition

// map() is an array method in JavaScript.

// It creates a new array by applying a function (callback) to each element of the original array.

// Does not modify the original array (non-mutating).


// 🔹 Key Points (Interview-Important)

// Does map() modify the original array?
// ❌ No, it returns a new array.

// Return value of map()?
// ✅ A new array with the same length as the original.

// Difference from forEach()?

// forEach() → just loops, doesn’t return anything.

// map() → returns a new array.

// Time Complexity

// O(n) → runs once for each element.

// Chaining with other methods

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(n => n * 2).filter(n => n > 5);
// console.log(result); // [6, 8, 10]


//========================================================================


const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const nums=myNumbers.map((num)=> num+10) // no scope is used so no need to use return statement but we can use scope with return keyword also 
// console.log(nums);


// it can also done by for each
const arr=[]  // empty array
myNumbers.forEach((num)=>{
    num=num+20;
    arr.push(num);  //pushing the updated num vaues in empty array
})
//console.log(arr);

//------------------chaining --------------------------

// you can use multiple methods for single array or ovjects values 

const newNums=myNumbers.map((num)=>num*10)
.map((num)=>num+1)  // transforming the array
.filter((num)=>num>=40)  // filter specifying condition
console.log(newNums);

//o/p= [41, 51,  61, 71, 81, 91, 101]
