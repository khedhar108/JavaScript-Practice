// Dates

let myDate = new Date();
// console.log(myDate); //2023-08-30T06:25:59.483Z  ----unreadable ----
// console.log(myDate.toString()); // Wed Aug 30 2023 11:57:36 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Wed Aug 30 2023
// console.log(myDate.toLocaleString()); // 30/8/2023, 11:57:36 am
// console.log(typeof myDate);// object

console.log("-----------Delcaring specific Date -----------------");
/* ------------Delcaring specific Date -----------------*/
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // year, month[0-11], day, hour, minute, second
// let myCreatedDate = new Date("2023-01-14") // yy-mm-dd  -- not in india
let myCreatedDate = new Date("01-14-2023"); //mm-dd-yy  ---> India
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

// ================================================================================================
console.log("******TimeStamp form 1 jan 1970 *********");
/** TimpStamp -- Quizes and poles room booking */
let myTimeStamp = Date.now();

console.log(myTimeStamp); // 1693377725033 --milliseconds from 1 jan 1970
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // converting milliseconds to seconds and getting floor value

// =============================================================================================

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // current month & add 1 because jan is 0 in array index
console.log(newDate.getDay());// current day

// `${newDate.getDay()} and the time `// used with interpolation

// this way is advanced learn more about it
newDate.toLocaleString("default", {
  weekday: "long",
});
// ===================================================================================================

/**   -----------------------new Date() vs Date.now() -------------------- 
 new Date() : used to create a new instance of the Date object with the current date and time, 
Date.now() :  used to get the current date and time as a number of milliseconds since the Unix epoch
 */
