// const tinderUser = new Object() // singleton object
const tinderUser = {}; // non-singleton object
//-------------------Adding properties in object--------------------------
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// --------------object inside object------------------------
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "pradeep",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname?.firstname);  // deply nested object -->  ?.

/**===============merging multiple objects ========================== */
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }  // obj2 inside obj1 in obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4) //assign(target,source)==> all objects goes in empty object

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Array of objects-->>>> 0thindexed id:1, 1st index id:2, 2nd index id:3
const users = [
  {
    id: 1,
    email: "One@gmail.com",
  },
  {
    id: 2,
    email: "two@gmail.com",
  },
  {
    id: 3,
    email: "three@gmail.com",
  },
];

users[1].email;
console.log("accessing array of objects", users[1]);

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//*******************Object Destructuring*****************************88 */
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// console.log(course.courseInstructor)     //js in hindi

/** ==================Object destructing with alias name============================ */
// const { courseInstructor} = course;
// console.log(courseInstructor);
const { courseInstructor: instructor, price, coursename } = course;
// console.log(instructor);// accesing single
console.log(price, coursename, instructor);
//*********JSON-keys in string*******similar to obj syntax but it is standard way to write json*** */
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];
