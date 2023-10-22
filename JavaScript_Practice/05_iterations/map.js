/*===================filter and map====> creates new array=============forEach===>show effects on original array==================================== */
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})  // explicit return keyword
// const newNums = myNumers.map( (num) => { num + 10})  // no return keyword - inside {}  ----empty--> [ ]
const newNumss = myNumers.map((num) => num + 10); // implicit return
// console.log(newNumss);

//--newconcept-------Chaining------using multiple methods -----eg: myarray.map().map().filter()------------------
//Note: 1st method result pass in second method as data to operate
const newNums = myNumers
  .map((num) => num * 10) // return : [10,20,30.....]
  .map((num) => num + 1)  //return : [11,21,31,.....]
  .filter((num) => num >= 40); // final output : [41,51,61,......]

console.log(newNums);
