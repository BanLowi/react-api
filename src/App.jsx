import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/Card"

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

                <Card actor={actor} />
              ))
            }
          </div>


          <div>
            <h2>ACTRESSES</h2>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

              {
                actresses.map(actor => (
                  <Card actor={actor} />
                ))
              }
            </div>

          </div>
        </div>

      </main>

    </>
  )
}

export default App
