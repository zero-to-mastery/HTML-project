async function load() {
  var pokemon = document.getElementById("input").value.toLowerCase();
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
  if (resp.status == 404) {
    document.querySelector("#error").style.display = "block";
    return;
  }
  document.querySelector("#error").style.display = "none";
  const json = await resp.json();

  document.querySelector("#image").src = json.sprites.front_default;
  document.querySelector("#type1").src =
    "./assets/" + json.types[0].type.name + ".png";
  document.querySelector("#type2").src =
    json.types.length > 1
      ? "./assets/" + json.types[1].type.name + ".png"
      : "./assets/default.png";
  document.querySelector("#id").innerHTML = "Nº " + json.id;

  document.querySelector("#name").innerHTML =
    json.name[0].toUpperCase() + json.name.slice(1);
  document.querySelector("#hp").innerHTML = json.stats[0].base_stat;
  document.querySelector("#at").innerHTML = json.stats[1].base_stat;
  document.querySelector("#df").innerHTML = json.stats[2].base_stat;
  document.querySelector("#spat").innerHTML = json.stats[3].base_stat;
  document.querySelector("#spdf").innerHTML = json.stats[4].base_stat;
  document.querySelector("#speed").innerHTML = json.stats[5].base_stat;

  document.querySelector("#card").style.color = "black";
  switch (json.types[0].type.name) {
    case "water":
      document.querySelector("#card").style.backgroundColor = "blue";
      break;
    case "grass":
      document.querySelector("#card").style.backgroundColor = "green";
      break;
    case "fire":
      document.querySelector("#card").style.backgroundColor = "#fe5e52";
      break;
    case "poison":
      document.querySelector("#card").style.backgroundColor = "purple";
      break;
    case "electric":
      document.querySelector("#card").style.backgroundColor = "yellow";
      break;
    case "normal":
      document.querySelector("#card").style.backgroundColor = "#e8a27f";
      break;
    case "fighting":
      document.querySelector("#card").style.backgroundColor = "orange";
      break;
    case "flying":
      document.querySelector("#card").style.backgroundColor = "#73c7ca";
      break;
    case "ground":
      document.querySelector("#card").style.backgroundColor = "#dc723f";
      break;
    case "rock":
      document.querySelector("#card").style.backgroundColor = "#90411b";
      break;
    case "bug":
      document.querySelector("#card").style.backgroundColor = "#bff01d";
      break;
    case "dragon":
      document.querySelector("#card").style.backgroundColor = "#6a21c6";
      break;
    case "dark":
      document.querySelector("#card").style.backgroundColor = "black";
      document.querySelector("#card").style.color = "white";
      break;
    case "ghost":
      document.querySelector("#card").style.backgroundColor = "#3e1170";
      document.querySelector("#card").style.color = "white";
      break;
    case "fairy":
      document.querySelector("#card").style.backgroundColor = "#e591e9";
      break;
    case "ice":
      document.querySelector("#card").style.backgroundColor = "#49c5ef";
      break;
    case "psychic":
      document.querySelector("#card").style.backgroundColor = "#e93ac7";
      break;
    case "steel":
      document.querySelector("#card").style.backgroundColor = "#979798";
      break;
  }
}
