// Set variable to reference the Generate Password button in the DOM.
var generateBtn = document.querySelector("#generate");

// Add an event listener for the click event of the Generate Passwor button.
generateBtn.addEventListener("click", typeSelector);

// declare global variable for password liength min an max
var passwordMinLen = 8;
var passwordMaxLen = 128;

/* ------------------ User Input Section ----------------------------------------------*/

/* Code to excute when the Generate Password is pressed.
Prompt the user for password attributtes. Length, upper case, lower case, numbers, special characters  
The users response for length will need to be valdated as a whole number  from 8 - 128*/

function typeSelector() {
  let selectionsArr = "";
  var passwordLength = getPasswordLength(); // Input must be valid integer between 8 and 150

  // Only allow additional selections  if user submits a valid length input
  // Push results of each prompt to the selections array
  if (passwordLength) {
    var upperType = confirm("Click Ok to include uppercase letters.");
    if (upperType) {
      selectionsArr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    var lowerType = confirm("Click Ok to include lower case letters.");
    if (lowerType) {
      selectionsArr += "abcdefghijklmnopqrstuvwxyz"
    }

    var numberType = confirm("Click Ok to include numbers.");
    if(numberType){
      selectionsArr+= "1234567890";
    }

    var specialType = confirm("Click Ok to include numbers.");
    if(specialType){
      selectionsArr += "!@#$%^&*()";
    }


    

    if (selectionsArr.length > 0) {
      var password = ""
      while(password.length < passwordLength){
        let random_index = Math.floor(Math.random() * selectionsArr.length)
        password += selectionsArr[random_index]
      }
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    } else {
      alert("No character types were selected. Please try again.");
    }
  }
}

/* --------------------------End of user input section-------------------------------- */

/* ---------------------------Data Validation of user input section ----------------- */
// Function to validate the collected user input for passwod length
// This iput type will be a string regardless of input
// Will require converting to a number and validation as a integer, and between 8 and 50

function getPasswordLength() {
  var validInput = false;
  // Loop to allow the user 3 attempt to enter a valid

  for (let i = 0; i < 3; i++) {
    let userLengthInput = prompt(
      "Enter the number of characters. Must be between 8 and 128 inclusively."
    );
    if (isValidLengthInput(userLengthInput)) {
      validInput = true;
      return userLengthInput;
    } else {
      if (i < 2) {
        alert("Not a valid input. Please try again");
      }
    }
  }
  alert("Maximum number of attempts has been reached. ");
}

// determine if password length input is an integer between 8 and 150 as instructed
function isValidLengthInput(inputToCheck) {
  var isLength = isValidLength(inputToCheck);
  let isValidType = isInputInteger(inputToCheck);
  let isAllValid = isLength && isValidType;
  return isAllValid;
}

// This function determines if the password length input from the user is an integer
// using one method for IE and one method for other common bowsers
function isInputInteger(inputToCheck) {
  var numberToCheck = Number(inputToCheck);
  return (
    typeof numberToCheck === "number" &&
    isFinite(numberToCheck) &&
    Math.floor(numberToCheck) === numberToCheck
  );
}

// This function validates the password length input is between 8 and 150 per instuctions
function isValidLength(inputToCheck) {
  return inputToCheck >= passwordMinLen && inputToCheck <= passwordMaxLen;
}

/* ---------------------End of Data Validation of user input section ----------------- */

/* ---------------------------Generate Password Section ---------- ----------------- */

// Write password to the #password input
// Functin takes an array as an argument that contains the
// selection results of the prompts for length an each
// character type to inlclude

function writePassword(passwordLength, selectionsArr) {
  // declare array variables for each character type.
  // using the min and max ascii  code for eac type
  let uppers = [65, 90];
  let lowers = [97, 122];
  let numbers = [48, 57];
  let specials = [35, 47];
  var totalCharArr = [];
  var totalCharsRandom = "";

  // Determine which character sets to use
  selectionsArr.forEach(element => {
    switch (element) {
      case "number":
        totalCharArr.push(randomizeArr(numbers));
        break;
      case "upper":
        totalCharArr.push(randomizeArr(uppers));
        break;
      case "lower":
        totalCharArr.push(randomizeArr(lowers));
        break;
      case "special":
        totalCharArr.push(randomizeArr(specials));
        break;
    }
    
  });
  
  // randomize the combinded total char  string
  var totalCharsRandomArr = randomizeArr(totalCharArr);
  
  
  var password = generatePassword(passwordLength, totalCharsRandomArr);
  
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
}

//function to randomize the values in an array
// source https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
// Nitan Patel How To Correctly Shuffle An Array in JavaScript Apr 29, 2019
// Fisher-Yates Algorithm
// Shuffles the array randomly using each value only once

function randomizeArr(checkArr) {
  var chars = "";
  var randomChars = [];
  var randomCharsString = "";

  for (let i = Math.min(...checkArr); i < Math.max(...checkArr); i++) {
    chars+=(String.fromCharCode(i));
    randomChars = chars.split("");
  }
  
  for (let j = randomChars.length - 1; j > 0; j--) {
    const r = Math.floor(Math.random() * j);
    const tempChar = randomChars[j];
    randomChars[j] = randomChars[r];
    randomChars[r] = tempChar;
  }

  randomCharsString = randomChars.join("");
  
  return randomChars;
}

// function to select characters to be added to the password

function generatePassword(passwordLength, randomCharsArr) {
  var passwordArr = [];
  var arrLen = randomCharsArr.length;
  var password = ""
  
  
  console.log (arrLen);
  for (let i = 0; i < passwordLength; i++) {
    var randNum = Math.floor(Math.random() * arrLen)
    
    passwordArr.push(randomCharsArr[randNum]);
    console.log(randNum);
  }
  

  console.log(passwordArr);
  //return password;
}

/* ---------------------------End of Password Generation Section  ----------------- */
