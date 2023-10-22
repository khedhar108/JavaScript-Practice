let score = "166"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)   // Number -- constructor method
// console.log(typeof valueInNumber);     //score = "23dd"  ---number
// console.log(valueInNumber);           // score = "23dd"  ---NaN = Not a Number

// if score has following values
// "33" => 33
// "33abc" | undefined => NaN
//  null => NaN
//  true => 1; false => 0


/* type of NaN */
// console.log(typeof NaN)       // number
console.log(undefined)        // undefined



let isLoggedIn = "Pradeep"

let booleanIsLoggedIn = Boolean(isLoggedIn)   
//  console.log(booleanIsLoggedIn);

/* isLoggedIn has follwoing values */
// 1 => true; 0 => false
// "" => false         //empty sting 

// "pradeep" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);  //string





// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);    //remainder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);    //12
// console.log(1 + "2");    //12
// console.log("1" + 2 + 2);  /122
/// console.log(1 + 2 + "2");  //32

// console.log( (3 + 4) * 5 % 3);     


// bad pratice
// console.log(+true);  //  The + operator is used to convert the boolean value true to a number.
// console.log(+"");   /* +"",evaluates to the number 0. The + operator is used to convert an empty string "" to a number. */

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;  // prefix 
// gameCounter++;  // postfix
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion