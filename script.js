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
  var length = window.prompt("How long would you like your password to be?");
// validate the length that the user has entered 
if (isNaN(length)) {
  window.alert("you must enter a valid number")
}

options.numberOfChars = length;

//Ask if they would like lower case chars
options.hasLowerChars = confirm("Would you like lower case characters");

//create arrays
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
