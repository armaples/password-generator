// Variables
var generateBtn = document.querySelector("#generate");
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numericChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@^_`~";
var inputPrompt = "Input a length for your password (8-128 characters): ";
var upperPrompt = "Press OK to include uppercase characters in the password.";
var lowerPrompt = "Press OK to include lowercase characters in the password.";
var numericPrompt = "Press OK to include numeric characters.";
var specialPrompt = "Press OK to include special characters.";
var pressOK = "Press OK to continue.";
var tryAgain = "Press OK to start over."

// Function for collecting user input to generate password
function generatePassword() {
  // Prompt for PW length
  var passwordLength = window.prompt(inputPrompt);
  console.log(passwordLength);
    
  // Loop if not between 8-128
  while (passwordLength < 8 || passwordLength > 128) {
    alert("ERROR: Password must be between 8 and 128 characters. " + tryAgain);
    var passwordLength = window.prompt(inputPrompt);
    console.log(passwordLength);
  } 
    
  // Confirmation for Password Length
  var confirmLength = alert("You have chosen " + passwordLength + " characters for your password. " + pressOK);
  
  // Prompt for Uppercase Characters
  var upperCase = confirm(upperPrompt);
  console.log(upperCase);
      
  // Confirmation Alert for Uppercase Characters
  if (upperCase) {
    alert("Password will include uppercase characters. " + pressOK);
  } else {
    alert("Password will not include uppercase characters. " + pressOK);
  } 
      
  // Prompt for Lowercase Characters
  var lowerCase = confirm(lowerPrompt);
  console.log(lowerCase);

  // Confirmation Alert for Lowercase Characters
  if (lowerCase) {
    alert("Password will include lowercase characters. " + pressOK);
  } else {
    alert("Password will not include lowercase characters. " + pressOK);
  }

  // Prompt for Numeric Characters
  var numericVal = confirm(numericPrompt);
  console.log(numericVal);
      
  // Confirmation Alert for Numeric Characters
  if (numericVal) {
    alert("Password will include numeric characters. " + pressOK);
  } else {
    alert("Password will not include numeric characters. " + pressOK);
  }

  // Prompt for Special Characters
  var specialVal = confirm(specialPrompt);
  console.log(specialVal);

  // Confirmation Alert for Special Characters
  if (specialVal) {
    alert("Password will include special characters. " + pressOK);
  } else {
    alert("Password will not include special characters.");
  } 

  console.log(upperCase, lowerCase, numericVal, specialVal);
  
  // Checks to make sure at least one character type is selected and provides error if no characters are selected
  if (!upperCase && !lowerCase && !numericVal && !specialVal) {
    alert("ERROR: You must choose at least one type of character. " + tryAgain);
  } else {
    // Start collecting characters for main array
    alert("Generating Password...");
    console.log(upperCase, lowerCase, numericVal, specialVal);
    
    var passwordCriteria = [];
    
    // Combining Arrays
    if (upperCase) {
      var passwordCriteria = passwordCriteria.concat(Array.from(upperChar));
      console.log(passwordCriteria);
    } 
        
    if (lowerCase) {
      var passwordCriteria = passwordCriteria.concat(Array.from(lowerChar));
      console.log(passwordCriteria);
    } 
        
    if (numericVal) {
      var passwordCriteria = passwordCriteria.concat(Array.from(numericChar));
      console.log(passwordCriteria);
    } 
        
    if (specialVal) {
      var passwordCriteria = passwordCriteria.concat(Array.from(specialChar));
      console.log(passwordCriteria);
    } 
  }

  // Generates Password based on user input 
  const userPassword = [];

  for (let i = 0; i < passwordLength; i++) {
    const passwordGen = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
    userPassword.push(passwordGen);
    console.log(userPassword);
  } 

  return userPassword.join("");
}

// Function for writing password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event Listener(s)
generateBtn.addEventListener("click", writePassword);