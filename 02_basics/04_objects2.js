// objects singleton or objects using literals
// another way to initilize the objects
// using constructor(new keyword)

// const user1=new user1();

// 2nd way (direct method)

const user1={}


user1.id="1234"
user1.name="samay"

//console.log(user1);

//-----------------Nested objects------------

const regular_user={
    email:"sam@1234mail.com" ,
        fullname: { 
            username:{         // here we are defining object inside the object 

                firstname:"yash",
                lastname:"saini",

            
        age:"43" ,
        dept:"cs"
    }
}
}

//console.log(regular_user.fullname.username.age) //(if we want to access the value of object so wee need to specifically write it with dot operator by all parent objects)


//---------------object combining-----------------------------

const obj1={1:"a", 2:"b"}
const obj2={3:"c",d:"4"}

//const obj3=Object.assign({},obj1,obj2) // this method is used for combining the values in single array 
//console.log(obj3);

// another way ( spread operator -: {...variableName,...varible2})

const obj3={...obj1,...obj2}

console.log(obj3);


// ------------some other object functions-------------------
// these functions returns basically result in array fromat which can be iterate 

console.log(user1);

console.log(Object.keys(user1)); // [ 'id', 'name' ]
console.log(Object.values(user1)); // [ '1234', 'samay' ] // all the results in array form which can be access by using loops
console.log(Object.entries(user1)); // [ [ 'id', '1234' ], [ 'name', 'samay' ] ]

console.log(user1.hasOwnProperty('name'));


const person = { name: "Yash", age: 22 };

// Seal the object
Object.seal(person);

person.name = "Saini";  // ✅ Allowed (value can change)
delete person.age;      // ❌ Not allowed
person.city = "Delhi";  // ❌ Not allowed

console.log(person); // { name: "Saini", age: 22 }