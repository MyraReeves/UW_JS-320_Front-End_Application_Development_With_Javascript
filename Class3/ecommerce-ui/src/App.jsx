import {useState} from "react"

import RentalsApp from './components/RentalsApp'
import ShoppingCart from './components/ShoppingCart'

import './App.css'

function App() {
  const [rentalToBePurchased, setRentalToBePurchased] = useState('')
  const [priceOfItem, setPriceOfItem] = useState()
  const [allRentals, setAllRentals] = useState([])
  const [allPrices, setAllPrices] = useState([])

  const eachRental = () => {
    allRentals.map((rentalToBePurchased, index) => {
      return <span key={index} className="align-left">{rentalToBePurchased}</span>
    })
  };

  return (
    <>
      <ShoppingCart
        allRentals = {allRentals}
        setAllRentals = {setAllRentals}
        eachRental = {eachRental}
        setAllPrices = {setAllPrices}
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
