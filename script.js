// Assignment code here

alert("Please click on 'Generate Password' to get started.");

// Create and define arrays for each of the character types

const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const specials = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","]","{","}",";",":","'","<",".",">","/","?","`","~"];

// Generate Password

function generatePassword() {
  var useUpper = confirm("Would you like to include uppercase letters in your password?");
  var useLower = confirm("Would you like to include lowercase letters in your password?");
  var useNumbers = confirm("Would you like to include numbers in your password?");
  var useSpecial = confirm("Would you like to include special characters in your password?");

  while (useUpper == false && useLower == false && useNumbers == false && useSpecial == false) {
    alert("Please select at least one of the four character types to be included in your password.")
    var useUpper = confirm("Would you like to include uppercase letters in your password?");
    var useLower = confirm("Would you like to include lowercase letters in your password?");
    var useNumbers = confirm("Would you like to include numbers in your password?");
    var useSpecial = confirm("Would you like to include special characters in your password?");
  }  
  var charLength = prompt("How long would you like your password to be? Please select a number between 8 and 128.");
  
  while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert("Please select a number between 8 and 128.");
    var charLength = prompt("How long would you like your password to be? Please select a number between 8 and 128.");
  }

  caseArray = [];
  // Single Confirms
  if (useUpper && useLower == false && useNumbers == false && useSpecial == false) {
    caseArray = upperCase;
    console.log(caseArray);
  }

  if (useUpper == false && useLower && useNumbers == false && useSpecial == false) {
    caseArray = lowerCase;
    console.log(caseArray);
  }

  if (useUpper == false && useLower == false && useNumbers && useSpecial == false) {
    caseArray = numbers;
    console.log(caseArray);
  }

  if (useUpper == false && useLower == false && useNumbers == false && useSpecial) {
    caseArray = specials;
    console.log(caseArray);
  }

  // Two Confirms
  if (useUpper && useLower && useNumbers == false && useSpecial == false) {
    caseArray = upperCase.concat(lowerCase);
    console.log(caseArray);
  }

  if (useUpper && useLower == false && useNumbers && useSpecial == false) {
    caseArray = upperCase.concat(numbers);
    console.log(caseArray);
  }

  if (useUpper && useLower == false && useNumbers == false && useSpecial) {
    caseArray = upperCase.concat(specials);
    console.log(caseArray);
  }

  if (useUpper == false && useLower && useNumbers && useSpecial == false) {
    caseArray = lowerCase.concat(numbers);
    console.log(caseArray);
  }

  if (useUpper == false && useLower && useNumbers == false && useSpecial) {
    caseArray = lowerCase.concat(specials);
    console.log(caseArray);
  }

  if (useUpper == false && useLower == false && useNumbers && useSpecial) {
    caseArray = numbers.concat(specials);
    console.log(caseArray);
  }

  // Three Confirms
  if (useUpper && useLower && useNumbers && useSpecial == false) {
    caseArray = upperCase.concat(lowerCase,numbers);
    console.log(caseArray);
  }

  if (useUpper && useLower && useNumbers == false && useSpecial) {
    caseArray = upperCase.concat(lowerCase,specials);
    console.log(caseArray);
  }

  if (useUpper && useLower == false && useNumbers && useSpecial) {
    caseArray = upperCase.concat(numbers,specials);
    console.log(caseArray);
  }

  if (useUpper == false && useLower && useNumbers && useSpecial) {
    caseArray = lowerCase.concat(numbers,specials);
    console.log(caseArray);
  }

  // Four Confirms
  if (useUpper && useLower && useNumbers && useSpecial) {
    caseArray = upperCase.concat(lowerCase, numbers, specials);
    console.log(caseArray);
  }
}

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
