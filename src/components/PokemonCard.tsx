interface PokemonType {
  pokemon: {
    firstname: string;
    imgSrc?: string;
  };
}

export default function PokemonCard({ pokemon }: PokemonType) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.firstnamename} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.firstname}</figcaption>
    </figure>
  );
}
