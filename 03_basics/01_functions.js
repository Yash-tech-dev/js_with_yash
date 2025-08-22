// function add(num1,num2){
//     console.log(num1 + num2 );
// }
// add(3,6);// 9  addition
// add(3,"6"); // 36 concatination ( if either of one will string then it will concatinate it )

// add(3,null); // 3

//-------------------Return statement in function----------------------

function sub(num1,num2){
    let result=num1 - num2
    //console.log("hello") // valid bcoj written above return statement 
    return result
    console.log("hello") // not valid // this will not valid bcoj if return statement is using after return then it will not execute
}

const result1=(sub(8,2))
//console.log("result is",result1); // o/p- Result is 6

//----------------another way to return values ----------------


function loggedIn(username="Yash"){
    if(!username){
        console.log("please enter username");
            return
    }
        return `${username} just logged in`

} 
    
    // console.log(loggedIn()); // o/p- Yash just logged in

    // console.log(loggedIn("Saini")); // Saini just logged in 


    //----------------function with n arguments-----------------

    function CalculateCartPrice(...num1){ //... is rest  operator (returns values in array)
        return num1
    }
   // console.log(CalculateCartPrice(200,100,80));

   //------------------Function with objects & array--------------------
  const user={
   user1:"yash",
   price:500
   }

   function object(anyobject){
    console.log(`username is ${anyobject.user1} and price is ${anyobject.price}`);
    
   }
object({
    user1:"saini",  // we can directly pass the object values in function call
    price:900
});


//--------------arrays in function-----------------------------

const arr=[100,200,400,800]

function arrfunc (num1){
    return num1[1]
}

console.log(arrfunc(arr));
console.log(arrfunc([500,800,320,900])); // directly pass the array 


    
