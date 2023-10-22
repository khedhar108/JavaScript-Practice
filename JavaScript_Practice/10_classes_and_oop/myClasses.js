// ES6
// syntatic sugar
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    // methods : no use of function keyword
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//----------------------------- behind the scene : Constructor function + Prototype(every function hidden property to share properties and methods in objects)---------------------------------------------

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());



/**
 * provate class : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
 * mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
 */