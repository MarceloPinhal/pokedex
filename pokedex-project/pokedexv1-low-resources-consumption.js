const pokemons_url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

window.onload = async function (){
    getAllPokemons()
}

async function getAllPokemons() {
  //    getting all Pokemons from API

  let response = await fetch(pokemons_url);
  let pokemonsData = await response.json();
  let arrayAllPokemons = pokemonsData.results;
  console.log(arrayAllPokemons[0]);

  // getting pokemons details and attributes from 2nd URL and create an array. Pass that array to the function renderAllPokemons

  let pokemonDetails = [];

  for (pokemon of arrayAllPokemons) {
    response = await fetch(pokemon.url);
    let pokemonData = await response.json();
    pokemonDetails.push(pokemonData);
  }

  console.log(pokemonDetails[0]);
  renderAllPokemons(pokemonDetails);
}


// rendering all the pokemons and DOM manipulation

function renderAllPokemons(pokemonDetails) {
    const root = document.querySelector(".root");
    
    
// Looping through pokemons array and acessing types and habilities attributes

    pokemonDetails.forEach(function (pokemon) {

    const types = pokemon.types.map((type) => {return type.type.name})
    const abilities = pokemon.abilities.map((ability) => {return ability.ability.name})
   
    root.innerHTML += `
    <div class = "pokemon__container">
     <h2>${pokemon.name}</h2>
     <div class="image__container">
     <img src="${pokemon.sprites['front_default']}" alt= "pokemon-image">
     </div> 
     <p>Type: ${types}</p>
     <p>Habilities:${abilities}</p>
     </div> 
     `
    });
}
