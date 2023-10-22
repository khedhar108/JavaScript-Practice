//? Better Comments extension
//! Is Math.PI value is mutable: NO //interview Ques
//todo : check above statement
//* Use ctrl+shift+P  and select quokka for current file
//// line thorough

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // same value : because it is hardCoded

//                 Object.getOwnPropertyDescriptor(Object, "key")   value according key
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

// -----------------------------------------------------------------------------
const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};
//Object.getOwnPropertyDescriptor(Object, "key")   value according key
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/**
{ value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true }
 * 
 */

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: false, //* stops iteration
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    //! Stopping function to iterate

    console.log(`${key} : ${value}`);
    /* ------------enumberable : false  stop interation of name property
      price : 250
      isAvailable : true
     */
  }
}
