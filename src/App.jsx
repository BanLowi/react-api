import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])

  function fetchActors() {

    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then(response => setActors(response.data))
      .catch(err => console.error(err))
  }

  function fetchActresses() {

    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then(response => setActresses(response.data))
      .catch(err => console.error(err))
  }

  useEffect(fetchActors, [])
  useEffect(() => { console.log(actors) }, [actors])

  useEffect(fetchActresses, [])

  return (
    <>

      <header>
        <h1>Cast Fetching</h1>
      </header>

      <main>

        <div className="container">
          <h2>ACTORS</h2>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

            {
              actors.map(actor => (
                <div key={actor.id} className="col">
                  <div className="card h-100">
                    <img src={actor.image} className="card-img-top h-50 fit_cover" alt={actor.name} />

                    <div className="card-body">
                      <h4>{actor.name}</h4>
                      <p>{actor.birth_year}</p>
                      <p>{actor.nationality}</p>
                      <label>Awards:</label>
                      <ul className="list-unstyled">
                        {actor.awards.map(award => (
                          <li>{award}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>


          <div>
            <h2>ACTRESSES</h2>
            <ul className="list-group list-group-numbered">
              {
                actresses.map(actor => (
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
