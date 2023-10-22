const accountId = 144553    // cann't be changed
// accountId = 2       ---not allowed to update
/* value must be assinged during declaration  */
// const accountId2;
// accountId2 = 33343;


let accountEmail = "Pradeep@google.com"  // declared with value
accountEmail = "gm@hc.com"           //updated or reassigned

let secondEmail;         // storing undefined automatically
secondEmail = "mynewemail@gmail.com" // updating undefined to mynewemail@gmail.com

let accountState; //define but value is not initialized/assigned        --undefined


/* Prefer not to use var because of issue in block scope and functional scope */
var accountPassword = "12345"
accountPassword = "21212121"        //updated
var accountPassword = "123453456" // re-declare possible

// without keyword : simailar to var : bad practice-getWarning
// accountCity;  //Reference Error
accountCity = "Jaipur"  
accountCity = "Bengaluru"

console.log(accountCity)









console.log(accountId);



console.log(accountId, accountEmail, accountPassword, accountCity, accountState)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])








// terminal: 01_basics> node .\01_variables.js