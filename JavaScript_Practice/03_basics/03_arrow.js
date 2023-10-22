//=================this ---refer--> current context==============================
const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // here "this refers current context" and we can get values related to current obj
    console.log(`this inside object : ${this}`); //![object Object] 
    console.log(this); // retunr whole user object
  },

  /*---------------------How to  access properties via arrow function inside obj---------------------------------- */
  //   greetingMessage: () => ` ${this.username}`, // undefined--arrow function don't use this keyword
  //   greetingMessage: () => `Without this and object name :${username}`, //Refference Error
  greetingMessage: () => `Nice  to  meet  you ${user.username}`, //todo: Arrow function inside object
};

user.welcomeMessage();
// user.username = "sam" // updating the context
// user.welcomeMessage() // message with updated context

const greeting = user.greetingMessage();
console.log(`greeting : ${greeting}`);
// -------------------inside Node environment-- this return --> {}------------------empty object-------but in browser console-> this holds window global object-------
console.log(this); //{empty}

//***********Normal function vs Arrow fucntion****************8 */
/**====================this keyword don't directly access properties inside a fuction---------------the fucntion must be inside obj to use this ----- */
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined
//     console.log(this);// return many functions inside Node environment because here this is inside function
// }

// chai()

const chai = () => {
  let username = "hitesh";
  console.log("-----arrow function and this --keyword behavior --------");
  console.log(this.username); //undefined
  console.log(this); //{}
};

chai();


// =================curly bracket =====>return============
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/**============ implicit return: no use of -> {} , no use of -> return  and for single paramenter no use of ->()====& single line statement=========*/
// const addTwo = (num1, num2) =>  num1 + num2

/****************** //Todo => following method is very useful in React*****========Wrapping inside parenthesis--> (...... )===================*************** */
const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(3, 4));

// -------------------object destructuring----in parameter[React]
// const wrong = (num1, num2) => { username: "hitesh" };// object return --> undefined
//! find out more
const returnObj = (num1, num2) => ({ username: "hitesh" });
console.log(returnObj)//[λ: returnObj]


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>{return})
// myArray.forEach(()=>())
