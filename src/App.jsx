import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [actors, setActors] = useState([])

  function fetchCharacters() {

    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then(response => setActors(response.data))
  }

  useEffect(fetchCharacters, [])
  console.log(actors); // Stampo in console l'endpoint

  return (
    <>

      <header>
        <h1>Cast Fetching</h1>
      </header>

      <main>

        <div className="container">
          <ul className="list-group list-group-numbered">
            {
              actors.map(actor => (
                <li className="list-group-item">{actor.name}</li>
              ))
            }
          </ul>
        </div>

      </main>

    </>
  )
}

export default App
