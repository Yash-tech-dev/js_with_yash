const arr=["apple", "banana","mango","pear"];

//const result=arr.forEach((val)=>{return val }) // in for each it doesnot return anything it gives undefined as a output
//console.log(result);

//arr.forEach((val)=> {console.log(val);}) // here we got the output values bcoj we directly printing the value in console 


// 2nd no solution 

// const sum=0;
// const nums = [10, 20, 30, 40];
// nums.forEach((nums)=>{ 
    
//     sum=sum+nums;
 
    

// })
//   // console.log(sum);


// for of practice

const user = { name: "Yash", age: 22, city: "Delhi" };

for (let x in user) {
    console.log(`key: ${x} ,value:${user[x]}`);
    
   
}