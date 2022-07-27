import "./style.css";

function CharCard({ character }) {
  let name;
  if (character && character.name.length > 10) {
    name = character.name.substr(0, 10) + "...";
  } else {
    name = character.name;
  }

  return (
    <article className={`card ${character.status !== "Alive" && "rosa"}`}>
      <h2 className="card--titulo">{name}</h2>
      <img className="card--img" src={character.image} alt="img" />
      <p className="card--especie">{character.species}</p>
    </article>
  );
}

export default CharCard;
