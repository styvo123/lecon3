let nomber = 2
console.log(typeof(Number));

// les tableaux

let array2 = ["Bafou","Batie","Bafang","Bamenda"];
console.log(array2[0][2]);

let objet = {
    firstname: "rosto",
    lastname: "dev",
    age: 29,
    technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
    admin: false
    }
    console.log(typeof(objet));
    console.log(objet.technos[3]);

    objet.adress="Bafoussam";
    console.log(objet);

    objet.adress="Bafan";
    console.log(objet);

    objet.nomber=22
    console.log(objet);
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
      age: 29,
      technos: ["Php", "NodeJs", "React", "Python", "Flutter"],
      admin: false
    },
    {
      firstname: "rosto3",
      lastname: "dev3",
      age: 32,
      technos: ["CSS", "NodeJs", "React", "Taillwindcss", "Flutter"],
      admin: true
    },
  ];
  console.log(data[2].technos);
//   
// structures de controle

if(data[0].age >data[1].age){
    console.log(data[0].firstname + " est plus age que " + data[1] . firstname);
    
}else{
    console.log(data[0].firstname + " est plus jeune que " + data[1] . firstname);
    
}
    