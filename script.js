//Random selector function
function randomSelector(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate password
function generatePassword(){
  
  //VARIABES

  //number of characters
  do{
    var chars = prompt("please enter the number of characters you want, between 8 and 128.");
    
    chars = Number(chars);
    
    if (chars == NaN){
      
      alert("Please enter a valid responce.");
    } else if (chars < 8 || chars > 128){
      alert("password must be between 8 and 128 characters.");
    }

  } while(chars < 8 || chars > 128 || chars == NaN);

  //boolians for each type of character
  do{
    var upper = confirm("Do you want to use Upper case?");
    var lower = confirm("Do you want to use Lower case?");
    var nums = confirm("Do you want to use numbers?");
    var spec = confirm("Do you want to use Special characters?");

    if (!upper && !lower && !nums && !spec){
      alert("please choose at least one option.");
    }

  } while(!upper && !lower && !nums && !spec)
  
  

  //Assemble the passworld
  //variable for password generation
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var specchar = "!@#$%&*?.,-_+=";
  var uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var options = "";
  var pWord = "";
  var i = 0;

  //insure that passworld has at least one of each selected value.
  if (nums){
    options = options.concat(numbers);
    pWord = pWord.concat(randomSelector(numbers));
    i++;
  }
  if (upper){
    options = options.concat(uLetters);
    pWord = pWord.concat(randomSelector(uLetters));
    i++;
  }
  if (lower){
     options = options.concat(letters);
     pWord = pWord.concat(randomSelector(letters));
    i++;
  }
  if (spec){
    options = options.concat(specchar);
    pWord = pWord.concat(randomSelector(specchar));
    i++;
  }
  console.log(options);

  //fill in the remaining password
  for (i; i < chars; i++){
    pWord = pWord.concat(randomSelector(options));
  }

  //logged information for debugging
  console.log("number of itterations: " + i);
  console.log("Password: " + pWord);
  console.log("Password length " + pWord.length);
  

  return pWord;
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
