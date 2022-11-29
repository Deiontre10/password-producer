// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Declare password length with a value of 0
  var passwordLength = 0;
  // Prompt to choose how many characters in their password
  var passwordLength = prompt("Your password must be between 8 and 256 characters how many would you like?")

  while(passwordLength <= 7 || passwordLength >= 257) {
    alert("Your password must be between 8 and 256 characters please try again");
    passwordLength();
  }

  // if(passwordLength ) {
  //   alert("You must enter a numeric value!");
  // } else {
  //   alert("Your password will be ${passwordLength} characters");
  // }
  var passphrase = "";
  var letters = "abcdefghijklmonpqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var capitalLetters = letters.toUpperCase();
  var userOption = false;
  var randomOption = "";
  var passwordCharacters = "";


  var numbersConfirm = confirm("Click OK if you would like to include numbers in your password");
  if(numbersConfirm == true) {
    passwordCharacters += numbers;
  }

  var lettersConfirm = confirm("Click OK if you would like to include lowercase letters in your password");
  if(lettersConfirm == true) {
    passwordCharacters += letters;
  }

  var lettersUpperConfirm = confirm("Click OK if you would like to include uppercase letters in your password");
  if(lettersUpperConfirm == true) {
    passwordCharacters += capitalLetters;
  }

  var specialConfirm = confirm("Click OK if you would like to include special characters in your password");
  if(specialConfirm == true) {
    passwordCharacters += special;
  }


  for (var p = 0; p < passwordLength; p++) {
    randomOption = Math.floor(Math.random() * passwordCharacters.length);
    passphrase += passwordCharacters.substring(randomOption, randomOption +1);
  }

  return passphrase;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
