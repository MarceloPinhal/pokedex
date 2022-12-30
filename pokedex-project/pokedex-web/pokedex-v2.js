window.onload = function() { 
    getPokemons(151)
    getPokemon()
    createPokemons()     
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

// Generating Pokemons according to argument "number"
function getPokemons (number){
    for (let i = 1; i <= number; i++){
        getPokemon(i)
}
}


// Displaying Pokemons and manipulating the DOM 
function createPokemons (pokemon){
    let pokemonType = pokemon.types.map((type) => {return type.type.name})
    let pokemonAbilities = pokemon.abilities.map((ability) => {return ability.ability.name})

    const root = document.querySelector(".root");
    root.innerHTML += `
        <div class = "pokemon__container">
         <h2>${pokemon.name}</h2>
         <div class="image__container">
         <img src="${pokemon["sprites"]["front_default"]}" alt= "pokemon-image">
         </div> 
         <p>Type: ${pokemonType}</p>
         <p>Habilities:${pokemonAbilities}</p>
         </div>
         ` 

}

getPokemons(151)