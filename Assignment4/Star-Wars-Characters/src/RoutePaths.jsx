import { Routes, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'
import StarWarsApi from './StarWarsApi'


function RoutePaths() {

  const Home = () => {
    return <Homepage/>
  }

  const Chewbacca = () => {
    return <div className='character-info'>
    <img src='https://github.com/MyraReeves/UW_JS-320_Front-End_Application_Development_With_Javascript/blob/main/Assignment4/Star-Wars-Characters/src/images/chewbacca.png?raw=true' alt='Image of Yoda' />
    <StarWarsApi characterNumber = '13' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </div>
  }

  const Luke = () => {
    return <div className='character-info'>
      <img src='https://github.com/MyraReeves/UW_JS-320_Front-End_Application_Development_With_Javascript/blob/main/Assignment4/Star-Wars-Characters/src/images/luke.png?raw=true' alt='Image of Luke Skywalker' />
      <StarWarsApi characterNumber = '1' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </div>
  }

  const R2D2 = () => {
    return <div className='character-info'>
      <img src='https://github.com/MyraReeves/UW_JS-320_Front-End_Application_Development_With_Javascript/blob/main/Assignment4/Star-Wars-Characters/src/images/r2d2.png?raw=true' alt='Image of R2-D2' />
      <StarWarsApi characterNumber = '3' /><br/>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </div>
  }

  const Rey = () => {
    return <>
      <h1>Rey</h1>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </>
  }

  const Yoda = () => {
    return <div className='character-info'>
    <img src='https://github.com/MyraReeves/UW_JS-320_Front-End_Application_Development_With_Javascript/blob/main/Assignment4/Star-Wars-Characters/src/images/yoda.png?raw=true' alt='Image of Yoda' />
    <StarWarsApi characterNumber = '20' /><br/>
      <Link to='/'>🏠︎ Return to Character Index 🏠︎</Link>
    </div>
  }



  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/chewbacca' element={<Chewbacca />}/>
      <Route path='/luke-skywalker' element={<Luke />}/>
      <Route path='/r2-d2' element={<R2D2 />}/>
      <Route path='/rey' element={<Rey />}/>
      <Route path='/yoda' element={<Yoda />}/>
    </Routes>
  )
}

export default RoutePaths
