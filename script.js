// Set variable to reference the Generate Password button in the DOM.
var generateBtn = document.querySelector("#generate");

// Add an event listener for the click event of the Generate Passwor button. 
generateBtn.addEventListener("click", typeSelector);

/* Code to excute when the Generate Password is pressed.
Prompt the user for password attributtes. Length, upper case, lower case, numbers, special characters  
The users response for length will need to be valdated as a whole number  from 8 - 150*/

function typeSelector(){
  let typeArr = [];
  var inputLength; 
  var passwordLength = getPasswordLength(); 
  alert (passwordLength);
  // Input must be valid integer between 8 and 150
  /* var upperType = confirm("Click Ok to include uppercase letters");
  var lowerType = confirm("Click Ok to include lower case numbers.");
  var numberType = confirm("Click Ok to include numbers");
  var specialType = confirm("Select Ok to include special characters");
  
  var selectedTypes = [passwordLength, upperType, lowerType, numberType, specialType];
  alert(selectedTypes); */
}

// Function to validate the the xollect user input for passwod length
// This iput type will be a string regardless of input
// Will require converting to a number and validation as a integer, and between 8 and 50
  
function getPasswordLength(){
  
  var validInput = false;
  // Loop to allow the user 3 attempt to enter a valid 
  for(let i =0; i<3; i++){
    do {
        let userLengthInput = prompt("Enter the number of characters. Must be between 8 and 50 inclusively.")
        if(isValidLengthInput(userLengthInput)){
          validInput = true;
          return userLengthInput;
        } else{
          alert("Not a valid input. Please try again");
        }

      } while (validInput === false) 
    
    }


  }




// determine if password length input is an integer between 8 and 150 as instructed
function isValidLengthInput(inputToCheck){
  var isLength = false
  let isValidType = isInputInteger(inputToCheck);
  let isAllValid = (isLength && isValidType);
  
  if(isValidType){
    isLength = isValidType(inputToCheck);
  } 

  return isAllValid;
  
}

// This function determines if the password length input from the user is an integer
// using one method for IE and one method for other common bowsers
function isInputInteger(inputToCheck){
  var isIntAll = Number(inputToCheck).isInteger;
  var isIntIE = (typeof(inputToCheck) === "number" && isFinite(inputToCheck) && Math.floor(inputToCheck) === x)
  
} 

// This function validates the password length input is between 8 and 150 per instuctions
function isValidLength(inputToCheck){
  return (inputToCheck >=8 && inputToCheck <= 150 );
}



// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






