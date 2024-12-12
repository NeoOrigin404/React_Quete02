/* Components */
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

/* CSS */
import "./styles/app.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickPlus = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <>
      <div>
        <PokemonCard key={pokemonIndex} pokemon={pokemonList[pokemonIndex]} />
      </div>
      <div>
        {pokemonIndex > 0 ? (
          <button type="button" onClick={handleClick}>
            Précédent
          </button>
        ) : null}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button type="button" onClick={handleClickPlus}>
            Suivant
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
