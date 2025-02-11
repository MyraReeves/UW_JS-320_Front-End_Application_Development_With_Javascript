import { Routes, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'
import StarWarsApi from './StarWarsApi'
// import heroes from './character-info.json'

import c3po from './images/c3po.png'
import chewbacca from './images/chewbacca.png'
import han from './images/han.png'
import leia from './images/leia.png'
import luke from './images/luke.png'
import mace from './images/mace.png'
import obiwan from './images/obi-wan.png'
import r2d2 from './images/r2d2.png'
import rey from './images/rey.png'
import yoda from './images/yoda.png'

import boba from './images/BobaFett.png'
import kylo from './images/KyloRen.png'
import maul from './images/maul.png'
import palpatine from './images/palpatine.png'
import vader from './images/vader.png'


function RoutePaths() {

  const Home = () => {
    return <Homepage/>
  }

  // Attempt at refactoring code into a loop instead:
  /*
  const CreatePages = () => {
    return (
    heroes.map( (heroes, index) => (
      let {`${heroes.element}`} = () => {
      <div className='character-info' key={index} >
        <img src={`{ ${heroes.imgInput} }`} alt={`Image of ${heroes.name} `}/>
        <StarWarsApi characterNumber = {heroes.number} /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
      </div>
      }
    ))
  )
  }
  */


  const C3PO = () => {
    return <div className='character-info'>
    <img src={c3po} alt='Image of C-3PO' />
    <StarWarsApi characterNumber = '2' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Chewbacca = () => {
    return <div className='character-info'>
    <img src={chewbacca} alt='Image of Chewbacca' />
    <StarWarsApi characterNumber = '13' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Han = () => {
    return <div className='character-info'>
      <img src={han} alt='Image of Han Solo' />
      <StarWarsApi characterNumber = '14' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Leia = () => {
    return <div className='character-info'>
      <img src={leia} alt='Image of Leia Organa' />
      <StarWarsApi characterNumber = '5' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Luke = () => {
    return <div className='character-info'>
      <img src={luke} alt='Image of Luke Skywalker' />
      <StarWarsApi characterNumber = '1' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Mace = () => {
    return <div className='character-info'>
      <img src={mace} alt='Image of Mace Windu' />
      <StarWarsApi characterNumber = '51' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Obiwan = () => {
    return <div className='character-info'>
      <img src={obiwan} alt='Image of Obi-Wan Kenobi' />
      <StarWarsApi characterNumber = '10' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const R2D2 = () => {
    return <div className='character-info'>
      <img src={r2d2} alt='Image of R2-D2' />
      <StarWarsApi characterNumber = '3' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Rey = () => {
    return <div className='character-info'>
    <img src={rey} alt='Image of Rey' />
    <StarWarsApi characterNumber = '85' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }

  const Yoda = () => {
    return <div className='character-info'>
    <img src={yoda} alt='Image of Yoda' />
    <StarWarsApi characterNumber = '20' /><br/>
      <Link to='/'>🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }


  ///////////////
 // Villains  //
///////////////

const Boba = () => {
  return <div className='character-info'>
  <img src={boba} alt='Image of Boba Fett' />
  <StarWarsApi characterNumber = '22' /><br/>
    <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
  </div>
}

const Kylo = () => {
  return <div className='character-info'>
  <img src={kylo} alt='Image of Kylo Ren' />
  <StarWarsApi characterNumber = '89' /><br/>
    <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
  </div>
}

const Maul = () => {
  return <div className='character-info'>
  <img src={maul} alt='Image of Darth Maul' />
  <StarWarsApi characterNumber = '44' /><br/>
    <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
  </div>
}

const Palpatine = () => {
  return <div className='character-info'>
  <img src={palpatine} alt='Image of Senator Sheev Palpatine, aka Darth Sidious' />
  <StarWarsApi characterNumber = '21' /><br/>
    <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
  </div>
}

const Vader = () => {
  return <div className='character-info'>
  <img src={vader} alt='Image of Darth Vader' />
  <StarWarsApi characterNumber = '4' /><br/>
    <Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
  </div>
}

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/c-3po' element={<C3PO />}/>
      <Route path='/chewbacca' element={<Chewbacca />}/>
      <Route path='/han-solo' element={<Han />}/>
      <Route path='/leia-organa' element={<Leia />}/>
      <Route path='/luke-skywalker' element={<Luke />}/>
      <Route path='/mace' element={<Mace />}/>
      <Route path='/obiwan-kenobi' element={<Obiwan />}/>
      <Route path='/r2-d2' element={<R2D2 />}/>
      <Route path='/rey' element={<Rey />}/>
      <Route path='/yoda' element={<Yoda />}/>

      <Route path='/boba-fett' element={<Boba />}/>
      <Route path='/kylo-ren' element={<Kylo />}/>
      <Route path='/maul' element={<Maul />}/>
      <Route path='/palpatine' element={<Palpatine />}/>
      <Route path='/vader' element={<Vader />}/>
    </Routes>
  )
}

export default RoutePaths
