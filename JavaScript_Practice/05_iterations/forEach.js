const coding = ["js", "ruby", "java", "python", "cpp"];

/******************forEach----syntax****************** */
// arrayVariable.forEach(callback)
// arrayVariable.forEach((element)=>{}) //annonymous function=====> method 1
// arrayVariable.forEach(function(element)=>{}) //annonymous function---no name of function ===> mehthod 2

// -----------------Method 1  ----------------
coding.forEach(function (eachval) {
  // console.log(eachval);
});
// -----------------Method 2 ----------------
coding.forEach((item) => {
  // console.log(item);
});

//--------------------passing function reference------
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//function reference ---don't extecute ////printMe()

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});
/**
js 0   [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
 */

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
