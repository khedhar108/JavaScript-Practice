// mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
// Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}
// User.logMe()//User.logMe is not a function
const hitesh = new User("hitesh");
// console.log(hitesh.createId())// not accessible by instance
hitesh.logMe(); // Username: hitesh  -- methods are accessible through instance

/**========= inherited class====== */
class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId());//iphone.createId is not a function ---Not accessible in inherited class


/*=====****=== Accessing Static properties and methods=> only by class - inhertied or origianl============****====== */
console.log(User.createId()); //123
console.log(Teacher.createId()); //123
