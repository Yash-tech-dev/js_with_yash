//if statement 


// if(condition){

// }
// condition true block excute otherwise ignored 

// const temp=41;

// if(temp===41){
//     console.log("temreture low");
    
// }
// else{
//     console.log("temp high");
    
// }

// const score =200 
// if(score>100){
//     const power="fly"
//     console.log(`user power${power}`); // o/p= user power fly
    
//}
//console.log(`user power${power}`);  // gives error bcoj power variable using outside the scope 


const userloggedin=true
const userdebitcard=true
const multipleuseraccess=false 

if(userloggedin && userdebitcard  ){
    console.log("allow shop") }
    else if(multipleuseraccess==true){
        console.log("not allowed")
        
    }
    


