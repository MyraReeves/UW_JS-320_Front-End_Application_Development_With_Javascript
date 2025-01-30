import {useState} from "react"

import RentalsApp from './components/RentalsApp'
import ShoppingCart from './components/ShoppingCart'

import './App.css'

function App() {
  const [rentalToBePurchased, setRentalToBePurchased] = useState('')
  const [priceOfItem, setPriceOfItem] = useState()
  const [allRentals, setAllRentals] = useState([])
  const [allPrices, setAllPrices] = useState([])

  return (
    <>
      <ShoppingCart
        allRentals = {allRentals}
        allPrices = {allPrices}
      />
      <RentalsApp
        rentalToBePurchased = {rentalToBePurchased}
        allRentals = {allRentals}
        priceOfItem = {priceOfItem}
        allPrices = {allPrices}
        setRentalToBePurchased = {setRentalToBePurchased}
        setAllRentals = {setAllRentals}
        setPriceOfItem = {setPriceOfItem}
        setAllPrices = {setAllPrices}
      />
    </>
  )
}

export default App
