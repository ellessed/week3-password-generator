// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// set to basic
function generatePassword() {
  var options = {
    numberOfChars: 0,
    hasLowerChars: false,
    hasUpperChars: false,
    hasSpecialChars: false,
    hasNumberChars: false,
  };

  // Validate the length that the user has entered
  var length = window.prompt(
    "How many characters would you like your password to contain?"
  );
  // If the answer is not a number the following alert will appear
  if (isNaN(length)) {
    window.alert("You must enter a valid number");
    return;
  } else if (length < 8 || length > 128) {
    window.alert(
      "You must choose a password length between 8 and 128 characters"
    );
    return;
  }
  options.numberOfChars = length;

  // Sets a confirmation for the user to specify there password choice
  options.hasLowerChars = window.confirm(
    "Click OK to confirm including lowercase characters"
  );
  options.hasUpperChars = window.confirm(
    "Click OK to confirm including uppercase characters"
  );
  options.hasSpecialChars = window.confirm(
    "Click OK to confirm including special characters"
  );
  options.hasNumberChars = window.confirm(
    "Click OK to confirm including numeric characters"
  );

  // The password choices the user can include are lowercase,upercase,special and numeric characters
  var charLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var charUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var charSpec = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "+",
    "-",
    ".",
    "~",
    "|",
    "<",
    ">",
    "=",
    "_",
  ];
  var charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var charList = [];

  // The user will specifiy what they would like to include in there password from clicking 'OK' i.e assuming it is true the if statements will push the users choices into the charlist to generate the password.
  if (options.hasLowerChars) {
    charLower.forEach((element) => charList.push(element));
    console.log(charList);
  }

  if (options.hasUpperChars) {
    charUpper.forEach((element) => charList.push(element));
    console.log(charList);
  }

  if (options.hasSpecialChars) {
    charSpec.forEach((element) => charList.push(element));
    console.log(charList);
  }

  if (options.hasNumberChars) {
    charNumber.forEach((element) => charList.push(element));
    console.log(charList);
  }

  // The for loop will start from 0 until it reaches the number of characters the user has entered. The loop will stop when it returns false.
  // The Math.random will return the number that's greater than or equal to 0 and less than 1.
  // The Math.floor function always rounds down and returns the largest integer less than or equal to a given number.
  var FinalPassword = [];
  for (var i = 0; i < options.numberOfChars; i++) {
    var randomIndex = Math.floor(Math.random() * charList.length);

    FinalPassword.push(charList[randomIndex]);
  }

  return FinalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
