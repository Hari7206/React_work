import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async (id) => {
    const pokemonRes = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const speciesRes = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );

    const data = pokemonRes.data;
    const species = speciesRes.data;

    return {
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      types: data.types.map((t) => t.type.name),
      abilities: data.abilities.map((a) => a.ability.name),
      description: species.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      )?.flavor_text.replace(/\f/g, " ").replace(/\n/g, " "),
    };
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const promises = [];
      for (let i = 0; i < 20; i++) {
        const id = Math.floor(Math.random() * 898) + 1;
        promises.push(getPokemon(id));
      }
      const results = await Promise.all(promises);
      setPokemon(results);
    };

    fetchPokemons();
  }, []);


  const typeColors = {
    water: "bg-blue-500",
    fire: "bg-red-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    default: "bg-gray-500",
  };
  const textColor = {
    water: "text-blue-500",
    fire: "text-red-500",
    grass: "text-green-500",
    electric: "text-yellow-400",
    default: "text-gray-300",
  };

  return (
    <div className="h-screen flex flex-wrap p-10 overflow-auto gap-8 justify-center
  bg-gradient-to-b from-black via-red-900 to-orange-600">
      {pokemon.map((elem, idx) => (
        <div
          key={idx}
  className="relative h-[650px] w-[350px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 "
  style={{
    backgroundImage: `url(${elem.image})`,
    backgroundSize: "contain",   
    backgroundPosition: "top", 
    backgroundRepeat: "no-repeat" 
  }}
        >
          <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md p-6 flex flex-col gap-4 rounded-t-3xl">
            <h1 className="text-3xl font-bold text-white capitalize text-center">
              {elem.name}
            </h1>
            <div className="flex justify-center gap-3 flex-wrap">
              {elem.types.map((type) => (
                <span
                  key={type}
                  className={`px-3 py-1 rounded-full text-white font-bold text-sm ${typeColors[type] || typeColors.default
                    }`}
                >
                  {type}
                </span>
              ))}
            </div>
            <p className={`text-sm text-center line-clamp-4 font-semibold ${textColor[elem.types[0]] || textColor.default
              }`}>
              {elem.description}
            </p>
            <div className="mt-2 flex justify-around bg-black/50 rounded-2xl p-4 text-white font-semibold">
              <div className="flex flex-col items-center">
                <span>{elem.weight} kg</span>
                <span className="text-xs">Weight</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{elem.height} m</span>
                <span className="text-xs">Height</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;