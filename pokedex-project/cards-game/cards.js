const pokeAPI_url = "https://pokeapi.co/api/v2/pokemon/"



const getPokemons = async () =>{ 
    const randomIds = []                                // array for generating random Pokemons
    for (let i = 0; i < 8; i++){
    const randomNumber = Math.ceil (Math.random()*150) // generating random intenger number between 1 and 150
    randomIds.push(randomNumber)
    }
    console.log(randomIds)
    for (let i = 0; i < randomIds.length; i++) {                //fetching eigth random Pokemons
    const response = await fetch (pokeAPI_url + randomIds[i])
    const pokemon = await response.json()
    console.log(pokemon)
    }
}

getPokemons ()