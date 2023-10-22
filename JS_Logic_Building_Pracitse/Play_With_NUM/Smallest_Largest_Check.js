
/*============start==================Smallest in 3 numbers======================================================== */
function smallestInThree(a, b, c) {
  // --------------Approach 1 ------Math.min()-------------
  // //  let small = Math.min(a, b, c);
  // //  return small;

  //   ---------------Approach 2-----------switch case--------
  // let small;
  // // switch ((a, b, c)) { // only pass single expression to run switch case
  // switch (true) {
  //   case a < b && a < c:
  //     small = a;
  //     //// return small = a;  //return-> stop break to execute
  //     break;
  //   case b < a && b < c:
  //      small =  b;
  //     break;
  //   case c < a && c < b:
  //      small =  c;
  //     break;
  //   default:
  //     break;
  // }
  // return small;

  // ----------------Approach 3------------------ternary operator? :--------
  let small;
  small = (a < b && a < c) ? a : (b < c && b < a )? b : c;
  return small;

  // ------ Approach 4-------------if-elseif else----------------------

}
const ans1 = smallestInThree(9, 9, 9);
const ans2 = smallestInThree(13, 9, 9);
console.log(ans1);


/*=============End=================Smallest in 3 numbers======================================================== */

//!================================Smallest In Array============================================
function findSmallestInArray(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let smallest = arr[0]; // Assume the first element is the smallest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]; // Update the smallest value if a smaller one is found
    }
  }

  return smallest;
}

const numbers = [13, 5, 0, 8, 2];
const ans = findSmallestInArray(numbers);
console.log(ans); 

