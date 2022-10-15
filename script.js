// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var options = {
    numberOfChars: 0,
    hasLowerChars: false,
    hasUpperChars: false,
    hasSpecialChars: false,
    hasNumberChars: false,
  }
  
  // validate the length that the user has entered 
  var length = window.prompt("How long would you like your password to be?");
// if the answer is not a number the following alert will appear 
if (isNaN(length)) {
  window.alert("You must enter a valid number");
  return;
}
else if (length<8 || length>128) {
  window.alert("You must choose a password length between 8-128 characters");
  return;
}

options.numberOfChars = length;

//Ask if they would like lower case chars
options.hasLowerChars = confirm("Would you like lower case characters");

//create arrays
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
