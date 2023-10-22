/*
const varName = new Promise(callback);
const varName = new Promise((resolve, reject) =>{callback , resolve(), reject()})

varName.then(()=>{}).catch(()=>{}).finally(()=>{});
*/

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); // no value is returned by resolve
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// --------------without storing in variable-----------------------
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// ------------passing data in object form throught resolve()--------------------
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" }); // data pass in object form
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // user catch the data
});

// ---------------------getting object values--------Note:1--=>we can use then and catch as many time as we want to avoid call back hell-------------------Note:2=>------
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
/* //-------storing in variale not works--------------------------------
// const username = promiseFour
// .then((user) => {
//   console.log(user);
//   return user.username;
// })
// console.log(username)//???????error
*/

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  //   finally runs in both conditons
  .finally(() => console.log("The promise is either resolved or rejected"));


//   -----------start---------------promise with async-await ------------------------
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    // const response = await promiseFive(); //promiseFive is an object--so wrong behavior
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
//   -----------end---------------promise with async-await ---------------------



/*---------2-methods-------fetch Data---------------------------- */
// ------------------------async_function------------------------------------
// =============================syntax=========================================
/*
async function  funName(){
    try{
     const res  =  await fetch('url')
     const data = await res.json();
    }
    catch(error){

    }
}
*/

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //         console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()




// ----------------fetch Api------------    https://developer.mozilla.org/en-US/docs/Web/API/fetch   
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#body 
//  fetch  -  https://www.youtube.com/watch?v=Rive84an6Lc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=42 ⏲️ time:14:14
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();// response return in string convert it into json object
  })  // we can use as much then as we want keep in mind that every then triger when pervious then done its job
  .then((data) => { // showing the converted data
    console.log(data);
    // your code here
  })
  .catch((error) => console.log(error));

// promise.all
