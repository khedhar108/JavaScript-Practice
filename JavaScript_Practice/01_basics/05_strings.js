const myname = "Pradeep"; // Basic way for declaring string
const repoCount = 50;

// console.log(name + repoCount + " Value");  // old way
//   myname.sting_methods                  .number_methods
console.log(`Hello my name is ${myname} and my repo count is ${repoCount}`); // modern way- sting interpolation

const gameName = new String("Pradeep-hc-com"); // create a object for each letter of string {key: value=> 0:P, 1:r, ...}
console.log(gameName); //[String: 'Pradeep-hc-com']  // check in browser console
console.log(typeof gameName); // object
console.log(gameName[0]); // P
console.log(gameName.__proto__); //{}
/** string method apply on copy rather than original value */
console.log(gameName.length); // length is property so no use of parenthesis with it : hover and get idea
console.log(gameName.toUpperCase()); // methods comes with parenthesis :hover and check
console.log("------------------------------------------");
console.log(gameName.charAt(2)); //target only  secondindexed element  the string--->a
console.log(gameName.charAt(0)); //P
console.log(gameName.indexOf("t"));

console.log("------------------------------------------");
const newString = gameName.substring(0, 4); //(include, exclude)-- Logic not rather than generate a new string from existing string
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   pradeep    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove starting and ending spaces

const url = "https://Pradeep.com/hitesPradeep%20choudhary";

console.log(url.replace("%20", "-")); // value, updatedValue

console.log(url.includes("sundar")); //false

console.log(gameName.split("-")); //[ 'Pradeep', 'hc', 'com' ]
