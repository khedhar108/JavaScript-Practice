function checkOddEven(num) {
  /*-----------method : 1 ---------------- */
  //   if (num % 2 === 0) {
  //     return "even";
  //   } else {
  //     return "odd";
  //   }
  /* ------------method : 2------------------- */
//   let ans1 = num % 2 === 0 ? "even" : "odd";
  let ans2 = num % 2 === 0 ? `even : ${num}` : `odd : ${num}`; // template literal
  return ans2;
}

const result = checkOddEven(5);
console.log(result);
