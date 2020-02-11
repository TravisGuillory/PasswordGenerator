// Set variable to reference the Generate Password button in the DOM.
var generateBtn = document.querySelector("#generate");

// Add an event listener for the click event of the Generate Passwor button.
generateBtn.addEventListener("click", getPassword);

// declare global variable for password liength min an max
var passwordMinLen = 8;
var passwordMaxLen = 128;

/* ------------------ Password create  Section ----------------------------------------------*/

/* Code to excute when the Generate Password is pressed.
Prompt the user for password attributtes. Length, upper case, lower case, numbers, special characters  
The users response for length will need to be valdated as a whole number  from 8 - 128
The function will include each of the sected character types and generate a  password*/

function getPassword() {
 
  let selectionsArr = "";
  var passwordLength = getPasswordLength(); // Input must be valid integer between 8 and 150

  // Only allow additional selections  if user submits a valid length input
  // Push results of each prompt to the selections array
  if (passwordLength) {
    var upperType = confirm("Click Ok to include uppercase letters.");
    if (upperType) {
      selectionsArr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    var lowerType = confirm("Click Ok to include lower case letters.");
    if (lowerType) {
      selectionsArr += "abcdefghijklmnopqrstuvwxyz";
    }

    var numberType = confirm("Click Ok to include numbers.");
    if (numberType) {
      selectionsArr += "1234567890";
    }

    var specialType = confirm("Click Ok to include numbers.");
    if (specialType) {
      selectionsArr += "!@#$%^&*()";
    }

    if (selectionsArr.length > 0) {
      var password = "";
      while (password.length < passwordLength) {
        let random_index = Math.floor(Math.random() * selectionsArr.length);
        password += selectionsArr[random_index];
      }
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    } else {
      alert("No character types were selected. Please try again.");
    }
  }
}

/* ---------------------------Data Validation of user input section ----------------- */
// Function to validate the collected user input for passwod length
// This iput type will be a string regardless of input
// Will require converting to a number and validation as a integer, and between 8 and 50

function getPasswordLength() {
  var validInput = false;

  do {
    // Loop until the user inputs a whole number in the specified range
    let userLenInput = prompt("Enter a password length between 8 and 128");
    if (isValidLengthInput(userLenInput)) {
      validInput = true;
      return userLenInput;
    } else {
      alert("Please retry. Enter a password length between 8 and 128");
    }
  } while (validInput === false);
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
