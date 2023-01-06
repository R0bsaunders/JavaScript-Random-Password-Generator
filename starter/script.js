// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var pwdLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {

  do {

    pwdLength = prompt("Please enter your desired password length between 10 - 64")

    if (pwdLength === null) {
        return;

    } else if (pwdLength != parseInt(pwdLength)) {
      alert("You've entered letters, you must enter a number between 10 - 64")

    } else if (pwdLength > 64) {
        alert(`${pwdLength} is less higher than 64. Choose a number between 10 and 64`)

    } else if (pwdLength < 10) {
      alert(`${pwdLength} is less than 10. Choose a number between 10 and 64`)

    } else {
      break;

    }

  } while (true);

  // Debug: View user's chosen password length
  console.log("Password length is " + pwdLength);
  
  do {
    


  } while (true);



}





// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);