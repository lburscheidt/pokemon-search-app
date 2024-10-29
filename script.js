const card = document.querySelector("#card");
const stats = document.querySelector("#stats");

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

const hpTextField = document.querySelector("#hp-text");
const attackTextField = document.querySelector("#attack-text");
const defenseTextField = document.querySelector("#defense-text");
const specialAttackTextField = document.querySelector("#special-attack-text");
const specialDefenseTextField = document.querySelector("#special-defense-text");
const speedTextField = document.querySelector("#speed-text");
const pokemonImage = document.querySelector("#pokemon-image");

function capitalizeFirstLetter(str) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

function pokeGet(pokemon) {
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
        pokemonName.innerText = nameValue.toUpperCase();
        weight.innerText = weightValue;
        height.innerText = heightValue;
        pokemonId.innerText = idValue;
        data.types.forEach((element) => {
          let typeDiv = document.createElement("div");
          typeDiv.innerText = element.type.name.toUpperCase();
          typeDiv.classList.add(`${element.type.name}`);
          typeDiv.classList.add("type");
          types.appendChild(typeDiv);
        });
        pokemonImage.src = data.sprites.front_default;

        /*stats*/
        const hpValue = data.stats[0].base_stat;
        const attackValue = data.stats[1].base_stat;
        const defenseValue = data.stats[2].base_stat;
        const specialAttackValue = data.stats[3].base_stat;
        const specialDefenseValue = data.stats[4].base_stat;
        const speedValue = data.stats[5].base_stat;
        /*text */
        const hpText = data.stats[0].stat.name.toUpperCase();
        const attackText = capitalizeFirstLetter(data.stats[1].stat.name);
        const defenseText = capitalizeFirstLetter(data.stats[2].stat.name);
        let spattack = data.stats[3].stat.name;
        const specialAttackText =
          capitalizeFirstLetter(spattack.replace("-", " ").split(" ")[0]) +
          " " +
          capitalizeFirstLetter(spattack.replace("-", " ").split(" ")[1]);
        const spdefense = data.stats[4].stat.name;
        const specialDefenseText =
          capitalizeFirstLetter(spdefense.replace("-", " ").split(" ")[0]) +
          " " +
          capitalizeFirstLetter(spdefense.replace("-", " ").split(" ")[1]);
        const speedText = capitalizeFirstLetter(data.stats[5].stat.name);
        hpTextField.innerText = `${hpText} `;
        attackTextField.innerText = `${attackText} `;
        defenseTextField.innerText = `${defenseText} `;
        specialAttackTextField.innerText = `${specialAttackText} `;
        specialDefenseTextField.innerText = `${specialDefenseText} `;
        speedTextField.innerText = `${speedText} `;

        hp.innerText = `${hpValue}`;
        attack.innerText += attackValue;
        defense.innerText += defenseValue;
        specialAttack.innerText += specialAttackValue;
        specialDefense.innerText += specialDefenseValue;
        speed.innerText += speedValue;
      })
  );
}

function empty(element) {
  while (element.firstElementChild) {
    element.firstElementChild.innerHTML = "";
  }
}

searchBtn.addEventListener("click", () => {
  pokemonName.innerText = "";
  pokemonId.innerText = "";
  weight.innerText = "";
  height.innerText = "";
  pokemonImage.src = "";
  types.innerHTML = "";

  hpTextField.innerText = "";
  attackTextField.innerText = "";
  defenseTextField.innerText = "";
  specialAttackTextField.innerText = "";
  specialDefenseTextField.innerText = "";
  speedTextField.innerText = "";

  hp.innerText = "";
  attack.innerText = "";
  defense.innerText = "";
  specialAttack.innerText = "";
  specialDefense.innerText = "";
  speed.innerText = "";

  console.log(searchInput.value);

  pokeGet(searchInput.value);
});
