// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of letters to be included in password
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

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
    
    pwdLength = prompt(`Please enter your desired password length between ${min} - ${max} and click OK.\nClick Cancel to exit`)

    // Conditional: If user cancels

    if (pwdLength === null) {
        return;

    // Conditional: If nothing is entered

    } else if (pwdLength === "") {
        alert(`You haven't typed anything! You must enter a number between ${min} - ${max}`)

    // Conditional: If a letter or character is entered

    } else if (pwdLength != parseInt(pwdLength)) {
        alert(`'${pwdLength}' is not a number! You've entered letters; you must enter a number between ${min} - ${max}`)

    // Conditional: If the number is too high

    } else if (pwdLength > max) {
        alert(`${pwdLength} is higher than ${max}. Choose a number between ${min} and ${max}`)

    // Conditional: If the number is too low

    } else if (pwdLength < min) {
        alert(`${pwdLength} is less than ${min}. Choose a number between ${min} and ${max}`)

    } else {
        break;

    };

  } while (true);
 
  // The following do loop is for presenting user the character options.
  // After each selection, the array of available characters is built
  
  do {

    userChoices.lowerCase = confirm("Do you want your password to include lowercase letters?\nClick 'OK' for YES\nClick 'Cancel' for NO");
      if (userChoices.lowerCase) {
        pwdArray += letters.join("");
      };

    userChoices.numbers = confirm("Do you want your password to include numbers?\nClick 'OK' for YES\nClick 'Cancel' for NO");
      if (userChoices.numbers) {
        pwdArray += numericCharacters.join("");
      };

    userChoices.specialChars = confirm("Do you want your password to include special Characters?\nClick 'OK' for YES\nClick 'Cancel' for NO");
      if (userChoices.specialChars) {
        pwdArray += specialCharacters.join("");
      };

    userChoices.upperCase = confirm("Do you want your password to include uppercase letters?\nClick 'OK' for YES\nClick 'Cancel' for NO");
      if (userChoices.upperCase) {
        pwdArray += letters.join("").toUpperCase();
      };

    if (userChoices.lowerCase === false && userChoices.numbers === false && userChoices.specialChars === false && userChoices.upperCase === false) {

      // This confirm box needs to return to the top of the do loop if the user clicks OK. As this returns a 'true' value, this needs to be switched to false using the !

      if (!confirm("You must make choose at least one option. Do you want to choose again or cancel?\nClick 'OK' for YES\nClick 'Cancel' for NO")) {
        return;

      };

    } else {
        break;

    };

  } while (true);

  // The array containing all options the user selected is now fed into the getRandom function which generates a new array using random characters to the length specified by the user
  
  getRandom(pwdArray);
  
};

// Function for getting a random element from an array
function getRandom(arr) {

  for (let i = 0; i < pwdLength; i++) {
    securePwd += arr[Math.floor(Math.random() * arr.length)];

  };

}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();

};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = securePwd;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);