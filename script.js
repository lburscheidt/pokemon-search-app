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
pokemonGet(25);

function pokemonGet(pokemon) {
  let pokemonStr = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`;
  console.log(
    fetch(pokemonStr)
      .then((res) => res.json())
      .then((data) => {
        pokemonDataArray = data;
        console.log("Pokemon Data Array:", pokemonDataArray);
        /*card*/
        const nameValue = data.name;
        const idValue = data.id;
        const weightValue = data.weight;
        const heightValue = data.height;

        /*set values */
        pokemonName.innerText = nameValue;
        weight.innerText = weightValue;
        height.innerText = heightValue;
        pokemonId.innerText = idValue;

        //types still missing
        const img = data.sprites.front_default;
        /*stats*/
        const hpValue = data.stats[0].base_stat;
        const attackValue = data.stats[1].base_stat;
        const defenseValue = data.stats[2].base_stat;
        const specialAttackValue = data.stats[3].base_stat;
        const specialDefenseValue = data.stats[4].base_stat;
        const speedValue = data.stats[5].base_stat;

        hp.innerText += hpValue;
        attack.innerText += attackValue;
        defense.innerText += defenseValue;
        specialAttack.innerText += specialAttackValue;
        specialDefense.innerText += specialDefenseValue;
        speed.innerText += speedValue;
      }),
  );
}

searchBtn.addEventListener("click", () => {
  pokemonGet(searchInput.value);
});
