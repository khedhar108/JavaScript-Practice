
const findLetterIndex =
  "what is index of big Letter in this sentence which is n't big bbbbbbbbb?";
// const target = "%";
const target = "b";
let count = 0;
for (let i = 0; i < findLetterIndex.length; i++) {
 let result = findLetterIndex[i] === target ? (count += 1) : -1;
//  console.log(result);
}

console.log(count);




const findWordIndex =
  "what is index of big Letter in this sentence which is n't big ?";
const targetWord = "big";


console.log(findWordIndex.indexOf("big"))
function findIndexOfWord(string,position=0){
  let result =   findWordIndex.includes(string)
  result;

  let WordIndex = findWordIndex.indexOf(string,position);
  return WordIndex;
}

console.log(findIndexOfWord(findWordIndex,0))