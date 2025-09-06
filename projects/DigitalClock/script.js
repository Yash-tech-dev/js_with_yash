const clock=document.querySelector('#clock')

// you can use it by getElementById
// const clock=document.getElementById('clock')

//setInterval(function (){},1000) // use to give time interval in each second (time frame you can change by ypu requiremnet)

setInterval(function (){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);

// here 1000 miliseconds which stands for 1 seconds