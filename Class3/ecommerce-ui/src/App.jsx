import {useState} from "react"

import RentalsApp from './components/RentalsApp'
import ShoppingCart from './components/ShoppingCart'

import './App.css'

function App() {
  const [allRentals, setAllRentals] = useState([]);
  const [allPrices, setAllPrices] = useState([]);

  const [arrayOfShoppingCartObjects, setArrayOfShoppingCartObjects] = useState([]);

  const eachRental = () => {
    allRentals.map((rentalToBePurchased, index) => {
      return <span key={index} className="align-left">{rentalToBePurchased}</span>
    })
  };

  return (
    <>
      <ShoppingCart
        setAllRentals = {setAllRentals}
        eachRental = {eachRental}
        setAllPrices = {setAllPrices}
        allPrices = {allPrices}
        arrayOfShoppingCartObjects = {arrayOfShoppingCartObjects}
        setArrayOfShoppingCartObjects = {setArrayOfShoppingCartObjects}
      />
      <RentalsApp
        allPrices = {allPrices}
        setAllPrices = {setAllPrices}
        arrayOfShoppingCartObjects = {arrayOfShoppingCartObjects}
        setArrayOfShoppingCartObjects = {setArrayOfShoppingCartObjects}
      />
    </>
  )
}

export default App
