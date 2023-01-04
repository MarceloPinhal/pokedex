window.onload = function() { 
    getPokemons(151)    
}

// Getting pokemon by ID



// Generating Pokemons according to argument "number"
function getPokemons (number){
    for (let i = 1; i <= number; i++){
        getPokemon(i)
}
}

// Getting pokemon by ID
function getPokemon (id){
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`

    fetch(url)
    .then((response) =>{
        return response.json()
    })
    .then ((pokemonJson) =>{
        createPokemons(pokemonJson)
    })
}

// Displaying Pokemons and manipulating the DOM 
function createPokemons (pokemon){
    console.log(pokemon)
    let pokemonType = pokemon.types.map((type) => {return type.type.name})
    let pokemonAbilities = pokemon.abilities.map((ability) => {return ability.ability.name})

    const root = document.querySelector(".root");
    root.innerHTML += `
        <div class = "pokemon__container">
         <h2>${pokemon.name}</h2>
         <span>Nº ${pokemon.id}</span>
         <div class="image__container">
         <img src="${pokemon["sprites"]["front_default"]}" alt= "pokemon-image">
         </div> 
         <p>Type: ${pokemonType}</p>
         </div>
         ` 
}


// Problema:why is "getPokemon" function generating pokemons in an random order
