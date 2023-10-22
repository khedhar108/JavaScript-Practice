//Using call for holding reference in another function
// Constructor function

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)// does not hold reference of this context after executing function 
    /* .call(this,args) */
    SetUsername.call(this, username) // reference of this context event after function is removed form execution context
   
    this.email = email
    this.password = password
}
// const varName = new Constructor(args1, args2, args3) 
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); //createUser { username: 'chai', email: 'chai@fb.com', password: '123' }


// mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call


