// Both sides are numbers
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);  //true

/* Different datatypes leads unpredictable result ====> the working of <>=  is different from == , ===  */
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// null and undefined considerded number sometimes and sometimes datatypes by engine
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===   value and datatype

console.log("2" === 2);  //false