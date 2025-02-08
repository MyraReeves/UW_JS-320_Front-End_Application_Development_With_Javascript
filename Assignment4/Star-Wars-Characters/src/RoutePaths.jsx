import { Routes, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'


function RoutePaths() {

  const Home = () => {
    return <Homepage/>
  }

  const Chewbacca = () => {
    return <>
      <h1>Chewbacca</h1>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </>
  }

  const Luke = () => {
    return <>
      <h1>Luke</h1>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </>
  }

  const R2D2 = () => {
    return <>
      <h1>R2-D2</h1>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </>
  }

  const Rey = () => {
    return <>
      <h1>Rey</h1>
      <Link to='/'>	🏠︎ Return to Character Index</Link>
    </>
  }

  const Yoda = () => {
    return <>
      <h1>Yoda</h1>
      <Link to='/'>🏠︎ Return to Character Index 🏠︎</Link>
    </>
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
