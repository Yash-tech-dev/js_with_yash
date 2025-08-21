
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "yash"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // destructuring of object (It’s a shorthand way to extract values from objects into variables)

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "yash",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},  // ARRAY  format
    {},
    {}
]


// Destructuring with Arrays of Objects
const users = [
  { id: 1, name: "Yash" },
  { id: 2, name: "Saini" }
];

const [ { name: firstName }, { name: secondName } ] = users;
console.log(firstName);  // "Yash"
console.log(secondName); // "Saini"