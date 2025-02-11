import { useNavigate } from 'react-router-dom'
import characters from './character-info.json'
import villains from './villains-info.json'

function Homepage() {
  const navigate = useNavigate()


  return (
    <>
      <div className='character-index'>
        <p className='blue'>Heroes:</p>
        {characters.map( (characters, index) => (

          <div className="linkToEachCharacter" key={index} style={{display: 'inline-block'}} onClick={() => navigate(characters.page)}>

            <img className="previewPic" src={characters.image} alt={`Small image of ${characters.name}`} />
            <h2>{characters.name}</h2>

          </div>
        ))}
      </div>

      <div className='villian-index'>
      <p className='red'>Villains:</p>
      {villains.map( (villains, index) => (

        <div className="linkToEachCharacter2" key={index} style={{display: 'inline-block'}} onClick={() => navigate(villains.page)}>

          <img className="previewPic" src={villains.image} alt={`Small image of ${villains.name}`} />
          <h2>{villains.name}</h2>

        </div>
      ))}

    </div>
    </>
  )
}

export default Homepage
