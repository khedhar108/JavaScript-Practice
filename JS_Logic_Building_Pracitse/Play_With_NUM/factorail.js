function calfactorial(val) {
  let factorial = 1;
  for (let i = val; i > 0; i--) {
    console.log(i);
    factorial *= i;
  }
  return factorial;
}
const result1 = calfactorial(5);
console.log(result1);



//* =====================Recursion===========================
function facto(val) {
  if (val < 0 || val === undefined) {
   return "Error : Value is negative Or undefined";
  } else {
    let result = val === 0 ? (1) : (val * facto(val - 1));
    return result;
  }
}

const result2 = facto(5);
const result3 = facto(0);
const result4 = facto(); // undefined  : callstack overflow
console.log(result3);
