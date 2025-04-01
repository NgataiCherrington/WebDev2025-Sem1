
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
        <a href="${data.results.url}" targe="_blank">${data.results[i].url}</a>
        `
        pokemonContainer.innerHTML += myPokemon;
        // for (pokemon of data.results) {
        // }
    }
}

fetchPokemon();
