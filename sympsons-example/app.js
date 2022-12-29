const sympsons = [
    {
        name: "Homer",
        color: "Yellow",
        hair: false,
        age: 39,
        drunk: true,
        isAlive: true,
        weight: 105,
        img: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
        isAlien: false,
        quote: "ouch"
    },
    {
        name: "Marge",
        color: "Yellow",
        hair: true,
        age: 34,
        drunk: false,
        isAlive: true,
        weight: 59,
        img: "https://sites.google.com/site/thesimpsons0241/_/rsrc/1284605380818/marge-simpson/Marge_Simpson.png",
        isAlien: false,
        quote: "Homeeeeer!!!"
    },
    {
        name: "Bart",
        color: "Yellow",
        hair: true,
        age: 10,
        drunk: false,
        isAlive: true,
        weight: 40,
        img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
        isAlien: false,
        quote: "multiplícate por cero"
    },
    {
        name: "Lisa",
        color: "Yellow",
        hair: true,
        age: 8,
        drunk: false,
        isAlive: true,
        weight: 30,
        img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
        isAlien: false,
        quote: "Usted está mal y todo este maldito sistema está mal"
    },
    {
        name: "Maggie",
        color: "Yellow",
        hair: true,
        age: 1,
        drunk: false,
        isAlive: true,
        weight: 10,
        img: "http://assets.stickpng.com/thumbs/5a0c40c15a997e1c2cea116f.png",
        isAlien: true,
        quote: "Papi"
    },
    {
        name: "Apu",
        color: "Brown",
        hair: true,
        age: 37,
        drunk: false,
        isAlive: true,
        weight: 80,
        img: "https://i.pinimg.com/originals/a7/e5/62/a7e5629581c59f01409f9d832ad45f71.png",
        isAlien: false,
        quote: "Acabo de tener un sueño maravilloso en el que yo moría"
    },
    {
        name: "SnowBall",
        color: "Black",
        hair: true,
        age: 2,
        drunk: false,
        isAlive: false,
        weight: 5,
        img: "https://static.simpsonswiki.com/images/a/a6/Snowball_II.png",
        isAlien: false,
        quote: "Miau"
    }
]

const divAlbum = document.querySelector(".album");



for (sympson of sympsons) {
const sympsonContainer = document.createElement("div")
divAlbum.appendChild(sympsonContainer)


const sympsonsName = document.createElement("h3");
const sympsonsImg = document.createElement("img");
const sympsonsAge = document.createElement("p");
const sympsonsWeight = document.createElement("p");   
    
sympsonsName.textContent = sympson.name;
sympsonsAge.textContent = sympson.age;
sympsonsWeight.textContent = sympson.weight;

sympsonsImg.setAttribute("src",sympson.img);


sympsonContainer.appendChild(sympsonsName);
sympsonContainer.appendChild(sympsonsImg);
sympsonContainer.appendChild(sympsonsAge);
sympsonContainer.appendChild(sympsonsWeight);

sympsonContainer.classList.add("sympson-box")


// sympsonContainer.addEventListener ("blur", function (event)) {

// }

}





 