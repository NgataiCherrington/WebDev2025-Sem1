const pokemonWikiLinks = [
  {
    //link for bulbasaur 
    link: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)"
  },
  {
    //link for ivysaur
    link: "https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)"
  },
  {
    //link for venusaur
    link: "https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)"
  },
  {
    link: "https://pokemondb.net/pokedex/charmander"
  },
  {
    link: "https://pokemondb.net/pokedex/charmeleon"
  },
  {
    link: "https://pokemondb.net/pokedex/charizard"
  },
  {
    link: "https://pokemondb.net/pokedex/squirtle"
  },
  {
    link: "https://pokemondb.net/pokedex/wartortle"
  },
  {
    link: "https://pokemondb.net/pokedex/blastoise"
  },
  {
    link: "https://pokemondb.net/pokedex/caterpie"
  }

]


async function fetchPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const pokemon = await response.json();

  pokemonData(pokemon.results, pokemonWikiLinks)
}



function pokemonData(data, pokemonWikiLinks) {
    const pokemonContainer = document.getElementById("section");
    for (let i = 0; i < 10; i++) {
        const myPokemon = `
        <h3>Name: ${data.results[i].name}</h3>
        <a href="${pokemonWikiLinks[i].link}" target="_blank">Click this link</a>
        `
        pokemonContainer.innerHTML += myPokemon;
    }
}

fetchPokemon();
