// Variables
var generateBtn = document.querySelector("#generate");
var inputPrompt = "Input a length for your password (8-128 characters): ";
var upperPrompt = "Press OK to include uppercase characters in the password.";
var lowerPrompt = "Press OK to include lowercase characters in the password.";
var numericPrompt = "Press OK to include numeric characters.";
var specialPrompt = "Press OK to include special characters.";
var pressOK = "Press OK to continue.";
var tryAgain = "Press OK to try again."

// Arrays

// Function for collecting user input to generate password
function generatePassword() {
    // Calling functions 
    characterNum();
    characterType();
    // call function to generate password

  // Function for user input on password length
  function characterNum() {
    // Prompt for PW length
    var passwordLength = window.prompt(inputPrompt);
    
    // Loop if not between 8-128
    while (passwordLength < 8 || passwordLength > 128) {
      alert("ERROR: Password must be between 8 and 128 characters. " + tryAgain);
      var passwordLength = window.prompt(inputPrompt);
    } 
    
    // Confirmation for Password Length
    var confirmLength = confirm("You have chosen " + passwordLength + " characters for your password. " + pressOK);
  }

  // Function for user input on character types included in password
  function characterType() {
    // Prompt for Uppercase Characters
    var upperCase = confirm(upperPrompt);
    
    // Confirmation Alert for Uppercase Characters
    if (upperCase) {
      alert("Password will include uppercase characters. " + pressOK);
    } else {
      alert("Password will not include uppercase characters. " + pressOK);
    } 
    
    // Prompt for Lowercase Characters
    var lowerCase = confirm(lowerPrompt);

    // Confirmation Alert for Lowercase Characters
    if (lowerCase) {
      alert("Password will include lowercase characters. " + pressOK);
    } else {
      alert("Password will not include lowercase characters. " + pressOK);

    }

    // Prompt for Numeric Characters
    var numericChar = confirm(numericPrompt);
    
    // Confirmation Alert for Numeric Characters
    if (numericChar) {
      alert("Password will include numeric characters. " + pressOK);
    } else {
      alert("Password will not include numeric characters. " + pressOK);
    }

    // Prompt for Special Characters
    var specialChar = confirm(specialPrompt);

    // Confirmation Alert for Special Characters
    if (specialChar) {
      alert("Password will include special characters. " + pressOK);
    } else {
      alert("Password will not include special characters.");
    }

    // If statement for when no characters are selected
    if (!upperCase && !lowerCase && !numericChar && !specialChar) {
      alert("ERROR: You must choose at least one type of character. " + tryAgain);
      characterType();
    } 
  }

    // Generate Password based on user input 
}

// Function for writing password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event Listener(s)
generateBtn.addEventListener("click", writePassword);
