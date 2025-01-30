const dataLowercase = "azertyuiopqsdfghjklmwxcvbn"
// console.log(dataLowercase.length);

const dataUpercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbols =" ''{}[]()!§^@$£,;_-<>#&*µ:/\ ";

const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');
// const generateButton = document.getElementById('generate-button');
// const lowercaseElement = document.getElementById('lowercase');
// const upercaseElement = document.getElementById('upercase');
// const numbersElement = document.getElementById('numbers');
// const symbolsElement = document.getElementById('symbols');

// document.addEventListener ('click',(e)=>{
//     console.log(e.target.id);
    
// })

function generatePassword(){
    let data = [];
    if(lowercase.checked) data.push(dataLowercase);
    console.log(data);
    
}
generateButton.addEventListener('click',generatePassword);
