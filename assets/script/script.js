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



const min = 10;
const max = 64;
var pwdLength = 0;
var userChoices = {
  upperCase: '',
  lowerCase: '',
  numbers: '',
  specialChars: ''
};
var securePwd = '';
var pwdArray = '';

// Function to prompt user for password options
function getPasswordOptions() {

  do {
    securePwd = '';
    pwdArray = '';
    
    pwdLength = prompt(`Please enter your desired password length between ${min} - ${max}`)

    if (pwdLength === null) {
        return;

    } else if (pwdLength === "") {
        alert(`You haven't typed anything! You must enter a number between ${min} - ${max}`)
      
    } else if (pwdLength != parseInt(pwdLength)) {
        alert(`You've entered letters, you must enter a number between ${min} - ${max}`)

    } else if (pwdLength > max) {
        alert(`${pwdLength} is higher than ${max}. Choose a number between ${min} and ${max}`)

    } else if (pwdLength < min) {
        alert(`${pwdLength} is less than ${min}. Choose a number between ${min} and ${max}`)

    } else {
        break;

    };

  } while (true);

  // Debug: View user's chosen password length
  console.log("Password length is " + pwdLength);
  
  
  do {

    userChoices.lowerCase = confirm("Do you want your password to include lowercase letters?");
      if (userChoices.lowerCase) {
        pwdArray += lowerCasedCharacters.join("");
      };

    userChoices.numbers = confirm("Do you want your password to include numbers?");
      if (userChoices.numbers) {
        pwdArray += numericCharacters.join("");
      };

    userChoices.specialChars = confirm("Do you want your password to include special Characters?");
      if (userChoices.specialChars) {
        pwdArray += specialCharacters.join("");
      };

    userChoices.upperCase = confirm("Do you want your password to include uppercase letters?");
      if (userChoices.upperCase) {
        pwdArray += upperCasedCharacters.join("");
      };

    if (userChoices.lowerCase === false && userChoices.numbers === false && userChoices.specialChars === false && userChoices.upperCase === false) {

      if (!confirm("You must make at least one selection")) {
        return;

      };

    } else {
        break;

    };

  } while (true);

  // Debug: View user's option states
  console.log("User selected the following options: " + JSON.stringify(userChoices));
  console.log("Available characters for password are: " + pwdArray);

  getRandom(pwdArray);

  // Debug: View the password in console
  console.log("The password is: " + securePwd);

};

// Function for getting a random element from an array
function getRandom(arr) {

  for (let i = 0; i < pwdLength; i++) {
    securePwd += arr[Math.floor(Math.random() * arr.length)];

  }
}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();

};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = securePwd;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);