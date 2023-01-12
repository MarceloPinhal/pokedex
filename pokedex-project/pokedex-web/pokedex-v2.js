const root = document.querySelector(".root");
const buttonsDiv = document.querySelector(".buttons");
const searchBar = document.querySelector(".search-bar")



let pokemonArray = [];
let pokemonDescriptions = [];


// Getting pokemon by ID

const fetchPokemon = async () => {
  for (let i = 1; i <= 151; i++) {

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonData = await resp.json();
    pokemonArray.push(pokemonData);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    const descriptionsData = await response.json();
    pokemonDescriptions.push(descriptionsData);
  }

  filteredPokemon();
  printButtons();
};



// Displaying Pokemons and manipulating the DOM
const printPokemon = (pokemonArray) => {
 
  root.innerHTML = "";
  

  for (const pokemon of pokemonArray) {
    let pokemonType = pokemon.types
      .map((type) => {
        return type.type.name;
      })

      
    root.innerHTML += `
        <div class = "pokemon-container ${pokemonType[0]}">
        <div class="card-header">
        <span class="pokemon-name">
        ${pokemon.name}
        </span>
        <span class="pokemon-hp">
        HP ${pokemon.stats[0]["base_stat"]}
        </span>
        </div>
        <div class="image__container">
        <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" alt= "pokemon-image">
        </div>
        <div class="card-content">
        <div class="pokemon-skills">
        <div class="pokemon-attack">
        <span>Attack:</span>
        <span> ${pokemon.stats[1]["base_stat"]}</span>
        </div>
        <div class="pokemon-defense">
        <span>Defense:</span>
        <span>${pokemon.stats[2]["base_stat"]}</span>
        </div>
        <div class="card-bottom">
        <p class="pokemon-description">
        </p>
        <p class="id">#${pokemon.id}</p>
        </div>
        </div>
         `;

    }
  
  printDescriptions(pokemonDescriptions)

}

const printDescriptions = (pokemonDescriptions) => {

let pokemonDescriptionsHTML = document.querySelectorAll(".pokemon-description")

for (let i = 0; i < pokemonDescriptions.length; i++){
  
 let description = pokemonDescriptions[i]["flavor_text_entries"][9]["flavor_text"]

if (pokemonDescriptionsHTML[i]){

pokemonDescriptionsHTML[i].textContent = description
}
}
}




const printButtons = () => {
  let pokemonTypesArray = [];
  let noDuplicates = [];

  // pushing all the pokemon types into an array
  pokemonArray.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      pokemonTypesArray.push(type.type.name);
    });
  });

  // removing duplicate values from the initial types array

  pokemonTypesArray.map((type) =>
    !noDuplicates.includes(type) ? noDuplicates.push(type) : false
  );

  // creating button to see all Pokemon
  const button = document.createElement("button");
  buttonsDiv.appendChild(button);
  button.classList.add("see-all");
  button.innerText = "see-all";
  buttonsDiv.appendChild(button);
  button.addEventListener("click", () => printPokemon(pokemonArray));

  // creating buttons according to type

  noDuplicates.forEach((type) => {
    const button = document.createElement("button");
    buttonsDiv.appendChild(button);
    button.classList.add(`button-${type}`);
    button.innerText = type;
    buttonsDiv.appendChild(button);
    button.addEventListener("click", () => filteredPokemon(type));
  });
};

// creeating filters

const filteredPokemon = (type) => {
  const filteredPokemon = pokemonArray.filter((pokemon) => {
    for (const typePokemon of pokemon.types) {
      if (typePokemon.type.name === type) 
      return pokemon;
    }
  });

  printPokemon(filteredPokemon);
};

// searchPokemon -> fix it. The function is printing all the pokemonArray


const searchPokemon = () => {
  console.log(searchBar.value)
  const filteredPokemon = pokemonArray.filter((pokemon) => {
    if (pokemon.name === searchBar.value.toLowerCase()){
    return pokemon
  }
    })      
printPokemon(filteredPokemon)
}

searchBar.addEventListener("input", searchPokemon)
fetchPokemon();

