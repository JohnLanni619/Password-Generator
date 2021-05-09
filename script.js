// Assignment code here
alert("Please click on 'Generate Password' to begin to generate your password.");

// Create and define arrays for each of the character types
const passwordString = "";
const caseArray = [];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const specials = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","]","{","}",";",":","'","<",".",">","/","?","`","~"];

console.log(upperCase[12]);
console.log(lowerCase[12]);
console.log(numbers[5]);
console.log(specials[14]);

// Generate Password

function generatePassword() {
  const useUpper = confirm("Would you like to include uppercase letters in your password?");
  const useLower = confirm("Would you like to include lowercase letters in your password?");
  const useNumbers = confirm("Would you like to include numbers in your password?");
  const useSpecial = confirm("Would you like to include special characters in your password?");
  const useCharacters = prompt("How long would you like your password to be? Please select a number between 8 and 128.");
  
  

// What do I need to create to get the code to function?
  // Create prompts for...
        // How many characters? Please choose a number between 8 and 128 characters
        // if between 8 and 128, then execute code, if outside of those values, hit them with another prompt and ask them to try again.

        // Create prompts for each of the different classes

        // Would you like your password to include: lowercase, uppercase, numeric, special characters??
        // If yes... window.alert: You've chosen to include "X" in your password.
        // If No... You've elected to not include "x" in your password.



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
