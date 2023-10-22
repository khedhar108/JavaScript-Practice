function reverseString(str) {
  // ------------------------------simple approach ------------------------------
  //   let revString;
  //   revString = str.split("").reverse().join("");
  //   return revString;
  // ---------------Approach 2----------------
  //// let reverseStr;//undefinedDCBA
  let reverseStr = ""; //* initialize with empty string --DCBA
  for (let i = str.length - 1; i >= 0; i--) {
    // ! return  reverseStr += str[i]   // return cause trouble and for loop runs once only
      reverseStr += str[i]
  }
  return reverseStr;
}

const myString = "ABCD";

const result = reverseString(myString);
console.log(typeof result, result);
