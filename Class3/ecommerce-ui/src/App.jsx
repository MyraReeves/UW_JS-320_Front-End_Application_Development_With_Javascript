import {useState} from "react"

import RentalsApp from './components/RentalsApp'
import ShoppingCart from './components/ShoppingCart'

import './App.css'

function App() {
  const [rentalToBePurchased, setRentalToBePurchased] = useState('')
  const [allRentals, setAllRentals] = useState([])

  return (
    <>
      <ShoppingCart
        allRentals = {allRentals}
        // rentalToBePurchased = {rentalToBePurchased}
        setAllRentals = {setAllRentals}
      />
      <RentalsApp
        rentalToBePurchased = {rentalToBePurchased}
        setRentalToBePurchased = {setRentalToBePurchased}
        allRentals = {allRentals}
        setAllRentals = {setAllRentals}
      />
    </>
  )
}

export default App
