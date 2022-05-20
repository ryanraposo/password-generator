const passwordTextArea = document.getElementById('password')
const generateButton = document.getElementById('generate')

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMERIC = "0123456789";
const SPECIAL = "~`! @#$%^&*()_-+={[}]|\\\:\";'<,>.?/"


function generatePassword(passwordLength, lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters) {

    var characterSet = "";
    var result = "";

    if(!lowercaseCharacters && !uppercaseCharacters && !specialCharacters && !numericCharacters && !specialCharacters) {
        alert("Must include at least one character set!")
        return "";
    }

    if(lowercaseCharacters) {
        characterSet = characterSet.concat(LOWERCASE);
    }

    if(uppercaseCharacters){
        characterSet = characterSet.concat(UPPERCASE);
    }

    if(numericCharacters){
        characterSet = characterSet.concat(NUMERIC);
    }

    if(specialCharacters){
        characterSet = characterSet.concat(SPECIAL);
    }

    const characterSetArray = characterSet.split("")

    for ( var i = 0; i < passwordLength; i++ ) {
        result += characterSetArray[Math.floor(Math.random() * characterSetArray.length)];
     }

    return result;

}

function onClickGenerateButton() {

    passwordTextArea.value = "";
    
    const passwordLength = window.prompt("How many characters? Note: Password must be between 8 and 128 characters.")
    
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters.")
        return
    }

    const lowercaseCharacters = window.confirm("Include lowercase characters?")
    const uppercaseCharacters = window.confirm("Include uppercase characters?")
    const numericCharacters = window.confirm("Include numeric characters?")
    const specialCharacters = window.confirm("Include special characters?")

    const password = generatePassword(passwordLength, lowercaseCharacters, uppercaseCharacters, numericCharacters, specialCharacters) 

    passwordTextArea.value = password;
    
}