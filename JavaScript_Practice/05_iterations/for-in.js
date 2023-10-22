// for-of --> direct take values from string and array  ////object iteration
// for-in --> iterates over index[01234....]  objects/array

//============================for-in --> Object iteration =================
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(`key: ${key}`);
  //   console.log(`value: ${myObject[key]}`);
  console.log(`${key} ➡️ ${myObject[key]}`);
}
/**
 js ➡️ javascript
 cpp ➡️ C++
 rb ➡️ ruby
 swift ➡️ swift by apple
 */

//============================for-in --> array iteration =================
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(`key : ${key} ➡️ value: ${programming[key]}`);
  //console.log(programming[key]);
}
/**
key : 0 ➡️ value: js
key : 1 ➡️ value: rb
key : 2 ➡️ value: py
key : 3 ➡️ value: java
key : 4 ➡️ value: cpp
 */


//===========================map is not iterable===============> return nothing
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
