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
delete person.age;      // ❌ Not allowed (value cant delete)
person.city = "Delhi";  // ❌ Not allowed (value can't add)

console.log(person); // { name: "Saini", age: 22 }


// --------------all function of objects-----------------

// Here’s a complete, interview-friendly guide to the most important and commonly used Object functions (with examples, notes, and comparisons):

// 🔹 1. Object.keys(obj)

// Returns an array of enumerable property names (keys) of the object.

// const user = { name: "Yash", age: 22 };
// console.log(Object.keys(user)); // ["name", "age"]


// ✅ Useful for iterating over object keys.

// 🔹 2. Object.values(obj)

// Returns an array of enumerable property values.

// console.log(Object.values(user)); // ["Yash", 22]


// ✅ Handy when you only care about values.

// 🔹 3. Object.entries(obj)

// Returns an array of [key, value] pairs.

// console.log(Object.entries(user)); 
// // [["name", "Yash"], ["age", 22]]


// ✅ Commonly used with Object.fromEntries() (reverse conversion).

// 🔹 4. Object.fromEntries(iterable)

// Converts an array of key-value pairs back into an object.

// const arr = [["name", "Yash"], ["age", 22]];
// console.log(Object.fromEntries(arr)); // { name: "Yash", age: 22 }


// ✅ Very useful with Object.entries() for transformations.

// 🔹 5. Object.assign(target, ...sources)

// Copies enumerable properties from one or more source objects into the target.

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const result = Object.assign({}, obj1, obj2);
// console.log(result); // { a: 1, b: 2 }


// ✅ Common for shallow cloning or merging objects.

// 🔹 6. Spread operator {...obj} (alternative to Object.assign)
// const clone = { ...user }; 
// console.log(clone); // { name: "Yash", age: 22 }


// ✅ Preferred in modern code for cleaner syntax.

// 🔹 7. Object.freeze(obj)

// Makes an object immutable:

// ❌ Cannot add new properties

// ❌ Cannot remove properties

// ❌ Cannot modify existing values

// const car = { brand: "Tesla" };
// Object.freeze(car);

// car.brand = "BMW"; // ❌ ignored in strict mode
// car.model = "X";   // ❌ not added

// console.log(car); // { brand: "Tesla" }


// ✅ Used when you want constants / config objects not to be modified.

// 🔹 8. Object.seal(obj)

// Like freeze, but values can still change.

// Shape is fixed (no add/remove).

// const sealed = { x: 10 };
// Object.seal(sealed);

// sealed.x = 20;   // ✅ allowed
// delete sealed.x; // ❌ not allowed

