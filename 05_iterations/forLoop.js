// for loop

// for (let i = 0; i <=10; i++) {
//     const element =i;
//     console.log(element);
    
 
    
// }
  

// //===============for with if statements========================
// for (let i = 0; i <=10; i++) {
//     const element =i;
//     if (i==5){
//         console.log("5 is found in iteration");
        
//     }
//     console.log(element);   
// }


//------------nested for loop------------------

for (let i = 0; i <=10; i++) {
//    console.log(`outer loop value:${i}`);
    
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop valye${j}and inner loop value${i}`);
     //    console.log(`${i} *  ${j}=${i*j}`);
        
        
        
    }
    
}

//------------------for with myarr---------------------

let myarr=['ironman','superman','hulk','thor']

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
  //  console.log(element);
    
    
}

//-----------------break and continue-------------------------


// for (let index = 0; index <=20; index++) {
// if(index==5){
//     console.log(`5 detected`);
//     break;  // break the flow of programwhen it reaches 5 no. iterartion 
    
// }    
//  console.log(`value is ${index}`);
 
// }
//---------------------continue----------------------


for (let index = 0; index <=20; index++) {
if(index==5){
    console.log(`5 detected`);
    continue;  // continue  skips the one iteration when its meets given condition then after print all the statements 
    
}    
 console.log(`value is ${index}`);
 
}

