let index = 0; // initialize
// while (index <= 10) { // Condition ------>loop will stop when condition = false
//     console.log(`Value of index is ${index}`);
//     index = index + 2  // Increment
// }

/********Iteration over array********* */
let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  //console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

/***********do-while loop - fisttime code run than condition check********************** */
let score = 11;

do {
  // console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

//=========================while with break=======================================

// let newscore = 0;
// console.log("-----------------------------------");
// while (newscore <= 4) {
//   console.log(` score is ${newscore}`);
//   if (newscore == 3) {
//     console.log(`score is ${newscore}: -----break`);
//     break;
//   }
//   console.log(` loop running ${newscore}`);
//   newscore++;
// }

//--------------- Nested while loop --not work --because inner condition is true even outer is false
// let newscore = 0;
// console.log("-----------------------------------");
// while (newscore <= 4) {
//   console.log(` Outer score : ${newscore}`);
//   while (true) {
//     if (newscore == 3) {
//       console.log(`Inner score: ${newscore}: -----break`);
//       break;
//     }
//   }
//   console.log(` loop running ${newscore}`);
//   newscore++;
// }

// ----------newscore --not accesible in nested while ----------

let newscore = 0;
console.log("-----------------------------------");
while (true) {
  console.log(` Outer score : ${newscore}`);
  while (newscore <= 4) {
    if (newscore == 3) {
      console.log(`Inner score: ${newscore}: -----break`);
      break;
    }
  }
  console.log(` loop running ${newscore}`);
}
