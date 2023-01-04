window.onload = () => {
getRandomPokemons();
}




const board = document.querySelector(".board");
const btnRestart = document.querySelector(".restart")



// generating and fetching 8 random Pokemons from the 151 originals

const getRandomPokemons = async () => {
  let randomIdsArray = [];

  for (let i = 1; i <= 8; i++) {
    const randomNumber = Math.ceil(Math.random() * 151);
    randomIdsArray.push(randomNumber);
  }

  const pokePromises = randomIdsArray.map((id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  });

  const responses = await Promise.all(pokePromises);
  const pokemon = await Promise.all(
    responses.map((res) => {
      return res.json();
    })
  );
  printPokemons(pokemon)
};

 
const printPokemons = (pokemon) => {
  
  // duplicating the 8 random pokemons

  pokemonCardsArray = [...pokemon, ...pokemon];
  
  // randomize "pokemonCardsArray". Generate random order for the pokemon cards

  pokemonCardsArray.sort(() => {
    return Math.random() - 0.5;
  });

  // printing cards to the web

  pokemonCardsArray.forEach((pokemon) => {
    const cardContainer = document.createElement("div");
    const faceContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const pokemonImg = document.createElement("img");
    const backContainer = document.createElement("div");
   

    cardContainer.classList.add("card");
    faceContainer.classList.add("face");
    imgContainer.classList.add("img__container");
    backContainer.classList.add("back");

    pokemonImg.src = pokemon["sprites"]["front_default"];
    cardContainer.setAttribute("name", pokemon.name);
    

    board.appendChild(cardContainer);
    cardContainer.appendChild(faceContainer);
    cardContainer.appendChild(backContainer);
    faceContainer.appendChild(imgContainer);
    imgContainer.appendChild(pokemonImg);

    cardContainer.addEventListener("click", (event) => {
    cardContainer.classList.add("toggleCard");
      checkCards(event);
    });
  });
};


// get control of  clicked cards

const checkCards = (event) => {
  const clickedCard = event.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  

  //   Logic for flipping cards

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
        flippedCards.forEach( card =>{
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
        })

    } else {
        flippedCards.forEach( card =>{
        card.classList.remove("flipped")
        setTimeout(() => {return card.classList.remove("toggleCard")},1000)
    })
    }
  }
  restartGame()

};


// function to restart the game 

const restartGame = () => {

const toggledCards = document.querySelectorAll(".toggleCard")
const cardContainer = document.querySelector(".card");

btnRestart.addEventListener("click", () =>{
  toggledCards.forEach (element =>{
  element.classList.remove("toggleCard")
  })
})
}

// problem: in order to remove all the cards and generate new ones when clicking on
// restart button i need to generate the array of cards outside the 
// asyn function "getRandomPokemons"