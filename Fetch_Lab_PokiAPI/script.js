const container = document.querySelector("section");


async function displayPokemonInfo(url) {
  const response = await fetch(url);
  const pokeInfo = await response.json();
  
  console.log(pokeInfo);
}

async function fetchPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=600";
  const response = await fetch(url);
  const pokemon = await response.json();
  
  for (let poke of pokemon.results) {
    fetchPokemonDetails(poke);
  };
}

async function fetchPokemonDetails(pokemon) {
  const response = await fetch(pokemon.url);
  const details = await response.json();
  
  displayPokemon (
    {
      name: details.name,
      image: details.sprites.front_default,
      abilities: details.abilities.map(a => a.ability.name).join(", "),
      types: details.types.map(t => t.type.name).join(", "),
      stats: details.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(", ")
    }
  );
}

function displayPokemon(pokemon) {
  const myPokemon = document.createElement("div");
  myPokemon.classList.add("pokemon-card");

  myPokemon.innerHTML = `
  <h2>${pokemon.name}</h2>
  <img src="${pokemon.image}" alt="${pokemon.name}">
  <p><strong>Type:</strong> ${pokemon.types}</p>
  <p><strong>Ability:</strong> ${pokemon.abilities}</p>
  <p><strong>Stats:</strong> ${pokemon.stats}</p>
  `;

  myPokemon.addEventListener("click", () => console.log("Detailed Pokemon Info:", pokemon));
  
  container.appendChild(myPokemon);
}
fetchPokemon();
