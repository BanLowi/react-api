import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [actors, setActors] = useState([])

  function fetchCharacters() {

    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then(response => setActors(response.data))

  }

  useEffect(fetchCharacters, [])

  console.log(actors);





  return (
    <>

    </>
  )
}

export default App
