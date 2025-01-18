import { useState } from 'react'

import ForYouApp from './homepage-app/ForYouApp'
import MissedItApp from './homepage-app/MissedItApp'

import './App.css'

function App() {

  return (
    <>
      <div>
        <ForYouApp />
      </div>
      <div>
        <MissedItApp/>
      </div>
    </>
  )
}

export default App
