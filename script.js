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
  };

  // validate the length that the user has entered
  var length = window.prompt("How long would you like your password to be?");
  // if the answer is not a number the following alert will appear
  if (isNaN(length)) {
    window.alert("You must enter a valid number");
    return;
  } else if (length < 8 || length > 128) {
    window.alert("You must choose a password length between 8-128 characters");
    return;
  }
  options.numberOfChars = length;
  // set questions for the user to specify there password choice
  options.hasLowerChars = window.confirm(
    "Would you like to include lower case characters?"
  );
  options.hasUpperChars = window.confirm(
    "Would you like to include UPPER case characters?"
  );
  options.hasSpecialChars = window.confirm(
    "Would you like to include special characters?"
  );
  options.hasNumberChars = window.confirm("Would you like to include numbers?");

  const charLower = [
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

  const charUpper = [
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
  const charSpec = [
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
  const charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var charList = [];

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

  var passwordMake = [];
  for (var i = 0; i < options.numberOfChars; i++) {
    var randomIndex = Math.floor(Math.random() + charList.length);

    passwordMake.push(charList[randomIndex]);
  }

  return passwordMake.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
