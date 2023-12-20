const accountId = 123456
let accountEmail = "jdk@gamil.com"
var accountPassword = "789555"
accountCity = "kanpur"
let accountState;
// accountId = 2 // not allowed

console.log (accountId);


accountEmail = "aniW@gmail.com"
accountPassword = "5648765465"
accountCity = "orai"

/* prefer not to use var
because of issue in block functionalscope
*/

console.log (accountId);

console.table ([accountId, accountEmail, accountPassword,accountCity, accountState]);