function multipleBy5(num) {
  return num * 5;
}
// function is function and also behave like object : prototypial inheritance------> .Notation
multipleBy5.power = 2;

console.log(multipleBy5(5)); //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{}

// ------------------------------------------------------------------
function createUser(username, score) {
  // this refers - current parrent context
  this.username = username;
  this.score = score;
}
// ========********=========creating custom properties amd methods======********=============
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
chai.printMe(); // work
const tea = createUser("tea", 250); // no use of new keyword
tea.printMe(); //don't work

/*

Here's what happens behind the scenes when the new keyword is used:

1. A new object is created:
   The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: 
   The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: 
   The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: 
   After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
