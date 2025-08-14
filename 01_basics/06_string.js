// const name="yash" // String primitive (type-string)
// const repo=6
// console.log(`hello my name is ${name} and my repo count is${repo}`);

const gameName=new String('yashsaini') //String object has return type(object)
// console.log(gameName)
// console.log(typeof(gameName))
// console.log(typeof(name))

// console.log(gameName[1]) //to find index
// console.log(gameName.length) // to find length 
// console.log(gameName.toUpperCase()) //in uppercase
// console.log(gameName.charAt(3)) // find char at index
// console.log(gameName.indexOf("t")) //tells index at given character...if not found the char then returns -1


// const newString=gameName.substring(0,6) // it left the last index value number thet you given like here 6th index value not print
// console.log(newString)

// const anotherString=gameName.slice(-8,6) //similarly it will print value upto 4th index only
// console.log(anotherString)

// const newStringone="  yash  "
// console.log(newStringone);

// console.log(newStringone.trim()); //remove the left and right whitespacing

const url="http//www.yash%20saini"
// console.log(url.replace("%20"," ")); // will replace  the 20 with spaces

console.log(url.includes("yash")) //checks that value exist or not

const name2="yash- saini-07"
console.log(name2.split("-"))