import PropTypes from "prop-types"
import { useEffect, useState } from "react"

function StarWarsApi({characterNumber}){
  const [character, setCharacter] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)


  useEffect( () => {
    fetch(`https://swapi.dev/api/people/${characterNumber}/`)
      .then( response => response.json() )
      .then( data => {
        setCharacter(data);
        setLoading(false);
      }, error => {console.log(error)} )
      .catch( () => {
        setLoading(false);
        setHasError(true);
      } )
      // .finally( () => {
      //   setLoading(false)
      // } )

  }, [characterNumber] )

  if (loading) {
    return <h3>Loading information...</h3>
  }

  if (hasError) {
    return <h3>An error occurred.  Sorry!  Please check the console for further details.</h3>
  }


  if (character.gender == "n/a"){
    character.gender = ""
  }

  if (character.species == "https://swapi.py4e.com/api/species/1/" || character.species == ''){
    character.species = "human"
  }

  if (character.species == "https://swapi.dev/api/species/3/"){
    character.species = "wookie"
  }

  if (character.species == "https://swapi.dev/api/species/2/"){
    character.species = "droid"
  }

  if (character.species == "https://swapi.dev/api/species/6/"){
    character.species = "of unknown species"
  }

  if (character.hair_color == "n/a" || character.hair_color == "none"){
    character.hair_color = "no"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/14/"){
    character.homeworld = "Kashyyyk"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/22/"){
    character.homeworld = "Corellia"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/2/"){
    character.homeworld = "Alderaan"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/1/"){
    character.homeworld = "Tatooine"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/42/"){
    character.homeworld = "Haruun Kal"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/20/"){
    character.homeworld = "Stewjon"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/8/"){
    character.homeworld = "Naboo"
  }

  if (character.homeworld == "https://swapi.dev/api/planets/28/"){
    character.homeworld = "Dagobah later in his life (when in exile), but his original home planet remains unknown"
  }

  if (character.height == null){
    return (<p>Information about this character has not yet been added to the original SWAPI.dev website. ☹️ Sorry!</p>)
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
