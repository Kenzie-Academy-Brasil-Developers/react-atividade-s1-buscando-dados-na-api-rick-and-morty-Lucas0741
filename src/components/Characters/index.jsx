import CharCard from "../CharCard";
import "./style.css";

function Characters({ characterList }) {
  return (
    <>
      <h1 className="titulo">Personagens Rick e Morty</h1>
      <section className="container--card">
        {characterList.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </section>
    </>
  );
}

export default Characters;
