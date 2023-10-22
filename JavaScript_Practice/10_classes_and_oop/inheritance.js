class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Inherits : extends inheritClassName
class Teacher extends User{
    constructor(username, email, password){
        super(username)

        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const InheritedObj = new Teacher("chai", "chai@teacher.com", "123")

InheritedObj.logMe()
const OriginalObj = new User("masalaChai")

OriginalObj.logMe()

console.log(InheritedObj instanceof User);//true
console.log(OriginalObj instanceof User);//true

// instance are created from different classes
console.log(InheritedObj === OriginalObj)//false
console.log(InheritedObj == OriginalObj)//false

