
async function fetchPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const pokemon = await response.json();

  pokemonData(pokemon)
}

function pokemonData(data) {
    const pokemonContainer = document.getElementById("section");
    for (let i = 0; i < 10; i++) {
        const myPokemon = `
        <h3>Name: ${data.results[i].name}</h3>
        <a href="${data.results[i].url}" targe="_blank">Click this link</a>
        `
        pokemonContainer.innerHTML += myPokemon;
    }
}

fetchPokemon();
