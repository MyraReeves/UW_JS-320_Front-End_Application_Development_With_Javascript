import PropTypes from "prop-types"
import { useEffect, useState } from "react"

function StarWarsApi({characterNumber}){
  const [character, setCharacter] = useState(undefined)
  const [loading, setLoading] = useState(true)


  useEffect( () => {
    fetch(`https://swapi.dev/api/people/${characterNumber}/`)
      .then( response => response.json() )
      .then( data => {
        setCharacter(data)
        setLoading(false)
      })
  }, [characterNumber] )

  if (loading) {
    return <h3>Loading information...</h3>
  }

  if (character.gender == "n/a"){
    character.gender = ""
  }

  if (character.species == "https://swapi.dev/api/species/3/"){
    character.species = "Wookie"
  }

  if (character.species == "https://swapi.dev/api/species/2/"){
    character.species = "droid"
  }

  if (character.species == "https://swapi.dev/api/species/6/"){
    character.species = "of unknown species"
  }

  if (character.hair_color == "n/a"){
    character.hair_color = "no"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/14/"){
    character.homeworld = "Kashyyyk"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/1/"){
    character.homeworld = "Tatooine"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/8/"){
    character.homeworld = "Naboo"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/28/"){
    character.homeworld = "Dagobah later in his life (when in exile), but his original home planet remains unknown"
  }

  return (
  <>
    <p><span className="character-name">{character.name}</span> is a {character.height} centimeters tall {character.gender} {character.species} with {character.hair_color} hair and {character.eye_color} eyes from the planet {character.homeworld}.
    </p>
  </>)
}

StarWarsApi.propTypes = {
  characterNumber: PropTypes.number.isRequired
}

export default StarWarsApi
