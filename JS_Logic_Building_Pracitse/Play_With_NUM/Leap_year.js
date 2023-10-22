//* ------------logic + testing + improving code -------------------
function calLeapYr(year) {
    if (year < 0 || year === undefined || typeof year !== "number") {
        return "invalid input";
    }
    
    // -------------------------inbuilt true and false---------------------------------------
  let validation = year % 4 === 0 ? (`${year}: Leap Year`) : (`${year}: Full Year`);
  return validation;
  // -----------------Verify true and false boolean value -------------------------------------
  //   let validation2 = year % 4 === 0;
 //// validation2 === "true"  ----here true is not boolean value its is string
  //   return validation2 === true ? `${year}: Leap Year` : `${year}: Full Year`;
  //! return validation2;// ture or false
}

const result1 = calLeapYr(1200);
const result2 = calLeapYr(3300);
const result3 = calLeapYr(1200);
console.log(result2);
