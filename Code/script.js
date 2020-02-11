// Password Generator Java Script
var generateBtn = document.querySelector("#generate");

// Password - Query selector and get element:
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
// Password specifications:
var passLength = 0
lowerCase = false
upperCase = false
numericCharacters = false
specialCharacters = false
while(passLength > 128 || passLength < 8){
  passLength = prompt("Enter the password Length!")
  if(passLength > 128 || passLength < 8){
    alert("Please enter a value between 8 and 128!")
  }
}
// Contains all the other condition and specifications:

var bigList = []
while(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
  var lowerCase = confirm("Do you need lowercase letters in your password?")
  if(lowerCase){
    bigList.push('abcdefghijklmnopqrstuvwxyz'.split(''))
  }
  var upperCase = confirm("Do you need Uppercase letters in your password?")
  if(upperCase){
    bigList.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
  }
  var numericCharacters = confirm("Do you need numeric characters in your password?")
  if(numericCharacters){
    bigList.push('0123456789Z'.split(''))
  }
  var specialCharacters = confirm("Do you need special characters in your password?")
  if(specialCharacters){
    bigList.push('~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'.split(''))
  }
  
  if(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
    alert("Password must contain at least one lowercase, uppercase, numeric and/or special character and must not contain space.")
  }
}
var flattenedArray = bigList.flat(1)

var randompassword = []
for(var i = 0; i <bigList.length; i++){
  randompassword.push(bigList[i][Math.floor(Math.random() * bigList[i].length)])
}


var randoms = Array.from({length: passLength-bigList.length}, () => Math.floor(Math.random() * flattenedArray.length));

for(var i = 0; i<randoms.length; i++){
  randompassword.push(flattenedArray[randoms[i]])
}
 return randompassword.join('');
}


// Added  event listener to generate button - Click
generateBtn.addEventListener("click", writePassword);
