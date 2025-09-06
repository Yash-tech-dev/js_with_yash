const form=document.querySelector('form')
// this usecase will give you empty value
// const height=parseINT(documnet.querySelector(#'height).value)


form.addEventListener('submit',function(e){
e.preventDefault();

const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');

if(height===''||height<0||isNaN(height)){
    results.innerHTML=`Please give valid height ${height}`;
}else if(weight===''||weight<0||isNaN(weight)){
results.innerHTML=`please give valid weight ${weight}`;}
else {
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`


if(bmi>=24.9){
    message.innerHTML=`Person is over Weight`
}else if(bmi>=16.9&&bmi<=24.9){
    message.innerHTML=`Person is in normal range`;
}
else{
    message.innerHTML=`Person is under weight`

}
}

})
