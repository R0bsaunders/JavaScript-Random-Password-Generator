# JavaScript-Random-Password-Generator

## Description

This is a demonstration of my newly learn JavaScript functions and objects to create a tool that can generate a random password between 10-64 characters long with multiple character options. The criteria is as follows:

* Generate a password when the button is clicked.
* Present a series of prompts for password criteria:
    * Length of password:
    * At least 10 characters but no more than 64.
    * Character types:
    * Lowercase
    * Uppercase
    * Numeric
    * Special characters ($@%&*, etc.)
    * Code should validate for each input and at least one character type should be selected.
    * Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.

The finished application should like the below:

![javascript-challenge-demo](/assets/images/05-javascript-challenge-demo.png)


## Usage

The gitHub Repository is here: https://github.com/R0bsaunders/JavaScript-Random-Password-Generator
The live working version is here: https://r0bsaunders.github.io/JavaScript-Random-Password-Generator/

All JavaScript can be found here: ![JavaScript](/assets/script/script.js)
It will look like this: ![password-generator-screenshot](/assets/images/password-generator-screenshot.jpg)

Note: There was an array of letters in both uppercase and lowercase provided in the starter code. However, we have learnt about some methods, and I have used .toUpperCase() so that only an array of lowercase letters need to be declared. I have removed the array of uppercase characters as they are not necessary now. If the user chooses to include uppercase letters then the toUpperCase() function store the letters in the available characters array as uppercase.

Please note the following conditionals:

* On choosing the length of the password, the code validates the user's input and prompts a message (relevant to their input) in the following senarious:
    * If the input is not numeric i.e. letters & special characters
    * The number is less than 'min' (stored as a variable incase it ever needs to change). Currently set to 10 for this exercise
    * The number is more than 'max' (stored as a variable incase it ever needs to change). Currently set to 64 for this exercise
    * If the user does not enter anything but clicks OK.

* If the user does not select any options, then they are alerted and told to select at least one option or cancel

* If the user wants to cancel, they are taken out of the loop.

It was really important to me that the messaging was intuitive as well. Guiding the user along the way. I also included any erroneous values the user entered, and explained why there is an error and remedial action. 