import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])

  function fetchActors() {

    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then(response => setActors(response.data))
  }

  function fetchActresses() {

    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then(response => setActresses(response.data))
  }

  useEffect(fetchActors, [])
  console.log(actors); // Stampo in console l'endpoint

  useEffect(fetchActresses, [])
  console.log(actresses);


  return (
    <>

      <header>
        <h1>Cast Fetching</h1>
      </header>

      <main>

        <div className="container">
          <div>
            <h2>ACTORS</h2>
            <ul className="list-group list-group-numbered">
              {
                actors.map(actor => (
                  <li key={actor.id} className="list-group-item">{actor.name}</li>
                ))
              }
            </ul>
          </div>

          <div>
            <h2>ACTRESSES</h2>
            <ul className="list-group list-group-numbered">
              {
                actors.map(actor => (
                  <li key={actor.id} className="list-group-item">{actor.name}</li>
                ))
              }
            </ul>
          </div>
        </div>

      </main>

    </>
  )
}

export default App
