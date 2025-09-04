const myArray=[1,2,3]

// const result=myArray.reduce(function(acc,currval){
//     return acc+currval;
// },0) 

//console.log(result);


//==========================reduce func with callback=============================

const total=myArray.reduce((acc ,currval)=> {return acc+currval},0 // here 0 is initial value 
)
// console.log(total);

//===================reduce with objects=====================================


const myObject=[{

    course:"javascript",
    price:2999

},
{

    course:"C++",
    price:999

},
{

    course:"Python",
    price:1999

}

]

const payPrice=myObject.reduce((acc,item)=> item.price+acc,0)

//console.log(payPrice);


