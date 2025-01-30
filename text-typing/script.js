const target = document.getElementById('target')

let array =[
    "Développeur",
    "Graphiste",
    "Web Design"
]

let worIndex = 0;
let letterIndex = 0;


// letter.textContent = array[2][2]

const createletter = () => {
    const letter = document.createElement
    ("span");
    target.appendChild(letter);
    letter.textContent = array[worIndex][letterIndex];
    [letterIndex];
    setTimeout (() =>{
        letter.remove()
    },2000);

}

const loop = () => {
   setTimeout(() =>{
    if (worIndex >= array.length) {
        worIndex = 0;
        letterIndex = 0;
        loop();
        return
    }

    if(letterIndex < array[worIndex].length){
        createletter();
        letterIndex++;
        loop();
    }else {
        setTimeout(() =>{
            worIndex++;
            letterIndex = 0;
           loop();


        },2000)
    }

   },60)
}
loop()
