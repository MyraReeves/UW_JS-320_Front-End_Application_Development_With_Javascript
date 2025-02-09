import { useNavigate } from 'react-router-dom'
import characters from './character-info.json'

function Homepage() {
  const navigate = useNavigate()


  return (
    <div className='character-index'>
      {characters.map( (characters, index) => (

        <div className="linkToEachCharacter" key={index} style={{display: 'inline-block'}} onClick={() => navigate(characters.page)}>

          <img className="previewPic" src={characters.image} alt={`Small photo of ${characters.name}`} />
          <h2>{characters.name}</h2>

        </div>
      ))}

    </div>
  )
}

export default Homepage
