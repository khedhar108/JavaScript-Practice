// switch (key) {
//     case value/lock:

//         break;

//     default:
//         break;
// }

const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}

// if we don't use break than all upcomping cases will be run except default case