import { useNavigate } from 'react-router-dom'

import './App.css'
import RoutePaths from './RoutePaths';
import Header from './Header'

function App() {

  // Move these into a different file so that you can reference it and map thru the array of address objects here
  const navigate = useNavigate();

  const navigateLuke = () => {
    useNavigate('/luke')
  };

  const navigateR2 = () => {
    navigate('/r2d2')
  };



  return (
    <>
      <RoutePaths />
      <Header />

    </>
  )
}

export default App
