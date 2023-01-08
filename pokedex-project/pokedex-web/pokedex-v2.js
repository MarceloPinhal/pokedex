window.onload = function () {
  getPokemons(5);
};

const root = document.querySelector(".root");
const allBtn = document.getElementById("see-all");





// Generating Pokemons according to argument "number"
function getPokemons(number) {
  for (let i = 1; i <= number; i++) {
    getPokemon(i);
  }
}

// Getting pokemon by ID
function getPokemon(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((pokemonJson) => {
      createPokemons(pokemonJson);
    });
}

// Displaying Pokemons and manipulating the DOM
function createPokemons(pokemon) {

  let pokemonType = pokemon.types.map((type) => {
    return `<span class=${type.type.name}>${type.type.name}</span>`}).join("")
 
console.log(pokemonType)

  root.innerHTML += `
        <div class = "pokemon__container">
         <h2>${pokemon.name}</h2>
         <span>Nº ${pokemon.id}</span>
         <div class="image__container">
         <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" alt= "pokemon-image">
         </div> 
         <div class="pokemon-types">
         ${pokemonType}
         </div>
         </div>
         `;      
}
// Problema:why is "getPokemon" function generating pokemons in an random order
// function seeAllPokemon(){
//    getPokemons(5)
//    root.innerHTML="";
// }

// function clearAllPokemon () {
//     root.innerHTML=""
// }