// import {useState} from "react"
import PropTypes from "prop-types";

function ShoppingCart(props) {
  const {allRentals, costOfRental} = props
  // const [allRentals, setAllRentals] = useState([])

  return (
    <>
      <section className="shopping-cart">
        <h3>Shopping Cart</h3>
        <ul>
          {allRentals.map((rentalToBePurchased, index) => {
            return <li key={index}>
                      <span className="align-left">{rentalToBePurchased}</span>
                      <span className="align-right">{costOfRental}</span>
                      <hr/>
                    </li>
          })}
        </ul>
        <span className ="total-due">Total Payment Due:</span>
      </section>

    </>
  )
}

ShoppingCart.propTypes = {
  allRentals: PropTypes.arrayOf(PropTypes.string),
  costOfRental: PropTypes.arrayOf(PropTypes.number)
}

export default ShoppingCart;
