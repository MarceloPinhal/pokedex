const pokemonCount = 151
let pokedex = {} 


window.onload = async function() {
    for (let i = 1; i <= pokemonCount; i++){
        await getPokemon(i)
        const root = document.querySelector(".root");
        root.innerHTML += `
        <div class = "pokemon__container">
         <h2>${pokedex[i].name}</h2>
         <div class="image__container">
         <img src="${pokedex[i].img}" alt= "pokemon-image">
         </div> 
         <p>Type: ${pokedex[i].types}</p>
         <p>Habilities:${pokedex[i].abilities}</p>
         </div> 
         `
}
}

async function getPokemon (numb){
    let url = `https://pokeapi.co/api/v2/pokemon/${numb}`

    let response = await fetch(url);
    let pokemon = await response.json();
    // console.log(pokemon)

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon.types.map((type) => {return type.type.name})
    let pokemonImg = pokemon["sprites"]["front_default"]
    let pokemonAbilities = pokemon.abilities.map((ability) => {return ability.ability.name})
    

    pokedex[numb] = {"name" : pokemonName, "img" : pokemonImg, "types":pokemonType, "abilities":pokemonAbilities}
}