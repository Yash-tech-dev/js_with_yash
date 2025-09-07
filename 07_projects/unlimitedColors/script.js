//Here we are generating random color at every second

const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color="#";
    for(let i=0;i<6;i++){
    color +=hex[Math.floor(Math.random()*16)];

}


return color

}
console.log(randomColor());

const startchangingColor=function(){
    intervalId= setInterval(changeBgcolor,1000)
function changeBgcolor(){
    document.body.style.backgroundColor=randomColor();
}
}

const stopchangingColor=function(){
    clearInterval(intervalId)
}


document.getElementById('start').addEventListener('click',startchangingColor);
document.getElementById('stop').addEventListener('click',stopchangingColor);

