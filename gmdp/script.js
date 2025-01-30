const dataLowercase = "azertyuiopqsdfghjklmwxcvbn"
// console.log(dataLowercase.length);

const dataUpercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbols =" ''{}[]()!§^@$£,;_-<>#&*µ:/\ ";

const rangeValue = document.getElementById('passwordlength');
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
    let password= "";
    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUpercase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);

    if(data.length=== 0){
        alert('veiller selectionner des critère');
        return;
    }

    for(i = 0; i < rangeValue.value; i++) {
        password = password + data[Math.floor(Math.random() * data.length)]
        passwordOutput.value = password
        // console.log(data[Math.floor(Math.random() * data.length)]);
        
    }
    
}
generateButton.addEventListener('click',generatePassword);
