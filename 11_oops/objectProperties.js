

// 1️⃣ What it is

// Object.getOwnPropertyDescriptor(obj, prop) is a built-in method in JavaScript that returns an object describing the attributes of a property on another object.

// It tells you things like:

// the property’s value

// whether it’s writable

// whether it’s enumerable

// whether it’s configurable

// (and if it’s an accessor property: get and set functions)

// This is part of the Property Descriptor concept — the hidden “metadata” JavaScript keeps for each property.

// 2️⃣ Syntax
// const descriptor = Object.getOwnPropertyDescriptor(object, propertyName);


// object: The object whose property you’re inspecting.

// propertyName: The name (string or symbol) of the property.

// If the property exists, you get back a descriptor object.
// If not, you get undefined.

// 3️⃣ Example: Data Property
const person = {
    name: "Yash"
};

const desc = Object.getOwnPropertyDescriptor(person, "name");
console.log(desc);


// Output:

// {
//     value: "Yash",
//         writable: true,
//             enumerable: true,
//                 configurable: true
// }


// This tells you:

// value is "Yash"

// You can write to it(change it)

// It will show up in for...in loops(enumerable)

// You can delete or reconfigure it(configurable)



// 1️⃣ Example: Changing writable
const person1 = { name: "Yash" };

// Make 'name' NOT writable
Object.defineProperty(person1, "name", {
  writable: false
});

console.log(person1.name); // "Yash"

// Try changing the value
person1.name = "Piyush"; // ❌ does nothing in non-strict mode
console.log(person1.name); // still "Yash"

// Check descriptor
console.log(Object.getOwnPropertyDescriptor(person1, "name"));
/*
{
  value: 'Yash',
  writable: false,   // 👈 now false
  enumerable: true,
  configurable: true
}
*/


// Because writable is false, assignments to person.name don’t change the value.



//-----------------------------------------------------------------------------------------

// 2️⃣ Example: Changing enumerable
const person2 = { name: "Yash", age: 25 };

// Make 'age' NOT enumerable
Object.defineProperty(person2, "age", {
  enumerable: false
});

// Loop through properties
for (let key in person2) {
  console.log(key); 
}
// Output: only "name" (age is hidden)

// Or use Object.keys()
console.log(Object.keys(person2)); // [ 'name' ]

// But you can still access age directly
console.log(person2.age); // 25

// Check descriptor
console.log(Object.getOwnPropertyDescriptor(person2, "age"));
/*
{
  value: 25,
  writable: true,
  enumerable: false,  // 👈 now false
  configurable: true
}
*/


//Because enumerable is false, the property doesn’t show up in loops or Object.keys(), but you can still read and write it directly.


const userDetails={
    id:101,
    name:"yash",
    age:22
}
const value=Object.getOwnPropertyDescriptor(userDetails,"id");
console.log(value);

Object.defineProperty(userDetails,'id',{
    writable:false
});
userDetails.id=102;  // here value will not be changed bcoj the wriatable property is set as false 
console.log(userDetails.id);

console.log(Object.getOwnPropertyDescriptor(userDetails,'id')); //o/p=>{ value: 101, writable: false, enumerable: true, configurable: true }