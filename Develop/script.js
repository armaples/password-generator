// Variables
var generateBtn = document.querySelector("#generate");
var inputPrompt = "Please input a length for your password (8-128 characters): ";
// Arrays

function generatePassword() {
    // Calling functions 
    characterNum();
    characterType();
    // call function to generate password

    function characterNum() {
    // Prompt for PW length
    var passwordLength = window.prompt(inputPrompt);
    // Loop if not between 8-128
    while (passwordLength < 8 || passwordLength > 128) {
      alert("ERROR: Password must be between 8 and 128 characters. Press OK to try again.");
      var passwordLength = window.prompt("Please input a length for your password (8-128 characters): ");
    } 
    // Confirm length of password
    var confirmLength = confirm("You have chosen " + passwordLength + " characters for your password. Press OK to continue.");
  }

  function characterType() {
    // Prompt for Uppercase Characters
    var upperCase = confirm("Press OK to include uppercase characters in the password.");
  
    //Confirmation Alert for Uppercase Characters
    if (upperCase) {
      alert("Password will include uppercase characters. Press OK to continue.")
    } else {
      alert("Password will not include uppercase characters. Press OK to continue.")
    }

    // Prompt for Lowercase Characters
    var lowerCase = confirm("Press OK to include lowercase characters in the password.");

    // Confirmination Alert for Lowercase Characters
    if (lowerCase) {
      alert("Password will include lowercase characters. Press OK to continue.");
    } else {
      alert("Password will not include lowercase characters. Press OK to continue.")
    }

    // Prompt for Numeric Characters
    var numericChar = confirm("Press OK to include numeric characters.");

    // Confirmation Alert for Numeric Characters
    if (numericChar) {
      alert("Password will include numeric characters. Press OK to continue.");
    } else {
      alert("Password will not include numeric characters. Press OK to continue.");
    }

    // If statement for when no characters are selected
    if (!upperCase && !lowerCase && !numericChar) {
      alert("ERROR: Please choose at least one type of character.");
      characterType();
    } 

    // Generate Password based on user input
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event Listener(s)
generateBtn.addEventListener("click", writePassword);
