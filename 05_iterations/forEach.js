const coding=["js","ruby","java","python","cpp"]
// coding.forEach(
// function (val){
//     //console.log(val);
    
// }
// )

// for each loop with arrow function

coding.forEach( (val)=>{
    //console.log(val);
    
})

// we can give refrence of predefined function for each loop

function printvalue(item){
    console.log(item);

    
}

//coding.forEach(printvalue) // we have to give only name of the function

coding.forEach((val,index,arr)=> {
  //  console.log(val,index,arr);

    
}
)



//-------------------foreach loop with array of objects---------------------
// used in databases for accesssing the value in the form of array

//[{},{},{}]

const mycoding=[{
    lang:"javascript",
    extension:"js"
},

{
    lang:"c++",
    extension:"c++"
},
    {
lang:"python",
extension:".py"
    }
]

mycoding.forEach((val)=>{
    console.log(`${val.lang} have extension ${val.extension} `);
    
    
    
})