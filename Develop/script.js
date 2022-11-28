// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt to choose how many characters in their password
  var passwordLength = prompt("Your password must be between 8 and 256 characters how many would you like?")

  while(passwordLength <= 7 || passwordLength >= 257) {
    alert("Your password must be between 8 and 256 characters please try again");
    var passwordLength = prompt("Your password must be between 8 and 256 characters how many would you like?")
  }

  var letters = "abcdefghijklmonpqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  var numbersConfirm = confirm("Click OK if you would like to include numbers in your password");
  var lettersConfirm = confirm("Click OK if you would like to include lowercase letters in your password");
  var lettersUpperConfirm = confirm("Click OK if you would like to include uppercase letters in your password");
  var specialConfirm = confirm("Click OK if you would like to include special characters in your password");

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
