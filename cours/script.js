let nomber = 2
// console.log(typeof(Number));

// les tableaux

let array2 = ["Bafou","Batie","Bafang","Bamenda"];
// console.log(array2[0][2]);

let objet = {
    firstname: "rosto",
    lastname: "dev",
    age: 29,
    technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
    admin: false
    }
    // console.log(typeof(objet));
    // console.log(objet.technos[3]);

    objet.adress="Bafoussam";
    // console.log(objet);

    objet.adress="Bafan";
    // console.log(objet);

    objet.nomber=22
    // console.log(objet);
    // Stocké les données
let data = [
    {
      firstname: "rosto1",
      lastname: "dev1",
      age: 30,
      technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
      adress: "MarchéB",
      admin: false
    },
    {
      firstname: "rosto2",
      lastname: "dev2",
      age:39,
      technos: ["Php", "NodeJs", "React", "Python", "Flutter"],
      admin: false
    },
    {
      firstname: "rosto3",
      lastname: "dev3",
      age: 50,
      technos: ["CSS", "NodeJs", "React", "Taillwindcss", "Flutter"],
      admin: true
    },
  ];
//   console.log(data[2].technos);
//   
// structures de controle

if(data[0].age >data[1].age){
    // console.log(data[0].firstname + " est plus age que " + data[1] . firstname);
    
}else{
    // console.log(data[0].firstname + " est plus jeune que " + data[1] . firstname);
    
}

// la boucle while
// let w=0
// while(w<10){
//     w++;
//     console.log("la valeur de w est de " + w) ;
    
// }
    
document.body.addEventListener("click",(e) => {
    console.log(e.target);
    if(e.target.id === "javascript"){
        document.body.style.backgroundColor = "yellow";
    }else if(e.target.id === "php"){
        document.body.style.backgroundColor = "purple";
    }else if(e.target.id === "python"){
        document.body.style.backgroundColor = "blue";
    }else if(e.target.id === "laravel"){
        document.body.style.backgroundColor = "red";
    }
});

// switch
// text-typing

// methode sur les tableaux en javascript
let fruits1 = ["banane", "pomme"];
fruits1.push("orange");
// console.log(fruits1);

// .pop
let fruits2 = ["Banane","Pomme","Orange"];
fruits2.pop();
// console.log(fruits2);

// .shift

// console.log(fruits3);
 

// LES DATES

const date1 = new Date();
 console.log(date1);

const date2 = new Date("2025-01-31");
 console.log(date2);

 const date3= new Date();
 const year= date3.getMinutes()
 console.log(year);
 
// format ISO en date

// YYY-MM-DDTHH:MM:SSZ

let date4 = new Date();
let date5 = new Date();

const isoDate4 = date4.toISOString();
const isoDate5 = date5.toLocaleDateString();
console.log(isoDate4);
console.log(isoDate5);

// timestamp

const date6 = new Date();
const timestamp = Date.parse(date6);

console.log(timestamp);


function dateParser(chaine){
    const date = new Date(chaine);
    const datefr=date.toLocaleDateString('fr-FR',{
        year: "numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric",
        weekday:"long"
        
    });
    return datefr
}
let daate=1738230071000
console.log(dateParser(timestamp));
console.log(dateParser(daate));
console.log(dateParser(date6));


