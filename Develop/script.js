// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // your code goes here
  var letters = "abcdefghijklmonpqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  var numbersConfirm = confirm("Click OK if you would like to include numbers in your password")
  var lettersConfirm = confirm("Click OK if you would like to include letters in your password")
  var specialConfirm = confirm("Click OK if you would like to include special characters in your password")

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
