const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonId = document.querySelector("#pokemon-id");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const types = document.querySelector("#types");
const hp = document.querySelector("#hp");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const specialAttack = document.querySelector("#special-attack");
const specialDefense = document.querySelector("#special-defense");
const speed = document.querySelector("#speed");

function pokemonGet(pokemon) {
  let pokemonStr = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`;
  console.log(
    fetch(pokemonStr)
      .then((res) => res.json())
      .then((data) => {
        pokemonDataArray = data;
        console.log("Pokemon Data Array:", pokemonDataArr);
      }),
  );
}

searchBtn.addEventListener("click", () => {
  pokemonGet(searchInput.value);
});
