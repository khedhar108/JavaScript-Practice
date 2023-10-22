// for of ---direct acess values form string and array ////object

// ["", "", ""] // array of strings
// [{}, {}, {}]  //array of objects

const arr = [1, 2, 3, 4, 5];

/*****************-----for-of----****************************** */
// for (const iterator of object/array /string) {

// }
for (const num of arr) {
  //console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`)
  //   if (greet == " ") break;
}

//=========================== Maps====unique & same order====>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); //duplicate not allowed

//console.log(map);
/**
Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
 */
// separation of key/value pairs-----------------
for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

/******************Object not iteratable*******************8 */
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
  // 'game3':"Ludo"
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }

//----TypeError----myObject is not iterable
// for (const key of myObject) {
//   console.log(key);
// }

const arrayOfObjects = [
  {
    game1: "NFS",
    game2: "Spiderman",
  },
  {
    game3: "NFS33",
    game4: "Spiderman44",
  },
  {
    game5: "NFS55",
    game6: "Spiderman66",
  },
];

for (const item of arrayOfObjects) {
  // console.log(item);
  console.log(item[0]);
}
/**
 { game1: 'NFS', game2: 'Spiderman' }
{ game3: 'NFS33', game4: 'Spiderman44' }
{ game5: 'NFS55', game6: 'Spiderman66' }
 */
