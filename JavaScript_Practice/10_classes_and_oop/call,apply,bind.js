const obj1 = {
  firstName: "John",
  lastName: "Smith",
  //! inside arrow function this refers to globalObject
  //* never use this inside arrow function in object
  //// PrintFullName123 :()=> console.log(`Obj1: ${firstName} ${lastName}`),
  // PrintFullName123 :function () {return console.log(`Obj1: ${this.firstName} ${this.lastName}`)},
};
// obj1.PrintFullName123()

const obj2 = {
  firstName: "Pradeep",
  lastName: "Khedhar",
};
const obj3 = {
    firstName: "Raghuveer",
    lastName: "Khedhar",
  };

//// const fullName=(firstName,lastName)=> console.log(`${firstName} ${lastName}`)
//// fullName("reena", "kumari");
//Todo: when function is not specific to an object put it outside and use
function fullName() {
  return console.log(`this: ${this.firstName} ${this.lastName}`);
}
// call method
fullName.call(obj1);
fullName.call(obj2);
function fullNameArgs(State,Dist) {
    return console.log(`this: ${this.firstName} ${this.lastName} lives:${State} Dist:${Dist}`);
  }

  /**---------------call and apply execute function directly------------------------------------------- */
//* ---------callwith args method---------------
fullNameArgs.call(obj1,"delhi","jamnagar");
//*-------------apply with args in brackets-----------
fullNameArgs.apply(obj2,["Jamu","gangotri"]);


//=====================bind===========================================

const bindMethod = fullNameArgs.bind(obj3,"Raj","jhu");
console.log(bindMethod)// only bind don't execute function  [λ: bound fullNameArgs]
bindMethod()