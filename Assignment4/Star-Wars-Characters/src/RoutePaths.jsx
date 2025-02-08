import { Routes, Route } from 'react-router-dom'


function RoutePaths() {

  const Home = () => {
    return <h1>Home Page!!</h1>
  }

  const Chewbacca = () => {
    return <h1>Chewbacca</h1>
  }

  const Luke = () => {
    return <h1>Luke</h1>
  }

  const R2D2 = () => {
    return <h1>R2-D2</h1>
  }

  const Rey = () => {
    return <h1>Rey</h1>
  }

  const Yoda = () => {
    return <h1>Yoda</h1>
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
