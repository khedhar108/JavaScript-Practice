// NOTE: "get" and "set" - always comes in pair , never each one written alone
//* Private Property 🆕 "_" underscore  used to define private properties
class User {
  constructor(email, password, role) {
    this.email = email; // overriding set feature with get method
    this.password = password; // overriding set feature with get method
    this.role = role; // it will set automatically
  }

  //   get and set both has underscore otherwise :same attributes & constructor and set method try to set the property ----leads to--->CallStack Overflow Error
  get email() {
    return this._email.toUpperCase(); // viewer get email in uppercase   format
  }
  //   set method take value as parameter
  set email(value) {
    this._email = value; // set never return & attribute has "_email"--"underscoreProperty"
  }

  get password() {
    return `${this._password}Pradeep`; // password is modified and different form oringinal one - hard to hack
  }

  set password(value) {
    this._password = value;
  }
}

const Pradeep = new User("h@Pradeep.ai", "abc", "doctor");
console.log(Pradeep.email);
console.log(Pradeep.password); //abcPradeep
console.log(Pradeep.role);

// ==================================Private Properties================================================
/**
 * ----------------------------------underscore --------------------------------
  The underscore _ and hash # symbols in front of property names in JavaScript are conventions used to indicate that those properties are intended to be private or protected members of a class or object. Here is a more detailed explanation:

_ (underscore): This is a widely used convention to indicate a property should be treated as private. It doesn't actually make the property private from a technical standpoint, but serves as a visual indicator that it should not be accessed directly outside of the class/object.

class MyClass {
  constructor() {
    this._privateProp = 'private'; 
  }
}

const obj = new MyClass();
obj._privateProp; // can still access it even though "_" suggests it's private



// --------------------------------------------#   hash--------------------------------------------------
(hash): This is a convention introduced more recently with the class fields proposal for JavaScript classes. It indicates a private field that cannot be accessed outside of the class declaration itself.


class MyClass {
  #reallyPrivate = 'can only be used in this class';
} 

const obj = new MyClass();
obj.#reallyPrivate; // SyntaxError: Private field '#reallyPrivate' must be declared in an enclosing class
So in summary:

_ is a convention to signal intent for private properties, but doesn't actually make them private
defines true private class fields that cannot be accessed from outside the class
The goal of both is to indicate which properties are part of the class's internal implementation details vs the public API. But # provides actual encapsulation while _ does not.
 */
