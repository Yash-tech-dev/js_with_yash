//Dates 

// let myDate=new Date()
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(typeof(myDate)) //returns 'object' type

// let createdDate=new Date(2023,0,1,12,42) // here 0 stands that moths start from jan with value 0
// console.log(createdDate.toLocaleString()); // you can specify by your date and time by using this new Date function

let newDate= new Date()
// console.log(newDate);

// console.log(newDate.getMonth()) // indexing start from 0
// console.log(newDate.getMonth()+1) // for getting exact date or values 
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    hourCycle:"h24"
})) // for giving customized all the details of Date and Time 