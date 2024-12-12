interface PokemonType {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

export default function PokemonCard({ pokemon }: PokemonType) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
