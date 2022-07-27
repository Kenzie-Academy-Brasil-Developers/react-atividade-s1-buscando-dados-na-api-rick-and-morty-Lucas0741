import "./App.css";
import Characters from "./components/Characters";
import { useEffect, useState } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">S2-04: API Rick and Morty</header>
      <main className="main">
        <Characters characterList={characterList} />
      </main>
    </div>
  );
}

export default App;
