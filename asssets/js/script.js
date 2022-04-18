// Keep it simple, no need for too many letters and numbers if they're going to mix anyways // 
var number = "0123456789"
var upperL = "ZXCVBNÑM"
var lowerL = "asdfghjklñ"
var char = "!@#$"

// Rough draft to signify process while Final draft is finished product // essay references since they make sense to me //
var draft = ""
var final = "" 





var generateBtn = document.querySelector("#generate");
console.log(draft)
var generatePassword = function () {
  var passLength = prompt("Please enter a number between 7 and 18.");
// 7 because its my birthday and 18 is my lucky number //



  if (passLength > 6 && passLength < 19) {
    var conNumber = confirm("Would you like to use numbers?");


    if (conNumber) {
      draft += number;
    }   



    var conUpper = confirm("Would you like to use uppercase letters?");

    if (conUpper) {
      draft += upperL;
    }



    var conLower = confirm("Would you like to use lowercase letters?");

    if (conLower) {
      draft += lowerL;
    }
  


    var conChar = confirm("Would you like to use characters?");

    if (conChar) {
      draft += char;
    }



    for (let i = 0; i < passLength; i++) {
      final += draft.charAt(Math.floor(Math.random()*draft.length));
      }


    return final;
  } else {
    alert("Pasword length is not between 7 and 18. Please try again.") 
  }
 
}



// added the ñ and Ñ since they're not common in english but very common is spanish, specifically to my mother's maiden name //







//--------------------DONT TOUCH!!----------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);