import PropTypes from "prop-types";

function ShoppingCart(props) {
  const {allRentals, allPrices} = props;

  const eachRental = () => {
    allRentals.map((rentalToBePurchased, index) => {
      return <span key={index} className="align-left">{rentalToBePurchased}</span>
    })
  };

  const priceOfEach = () => {
    allPrices.map( (costOfRental, index) => {
      return <span key={index} className="align-right">{costOfRental}</span>
    })
  }

  return (
    <>
      <section className="shopping-cart">
        <h3>Shopping Cart</h3>
        <ul>
          <li>
            {eachRental()} {priceOfEach()}
            <hr/>
          </li>
          {/* {allRentals.map((rentalToBePurchased, index) => {
            return <li key={index}>
                      <span className="align-left">{rentalToBePurchased}</span>
                    </li>
          })} */}
          {/* {allPrices.map((costOfRental, index) => {
            return <li key={index}>
                      <span className="align-right">{costOfRental}</span>
                      <hr/>
                    </li>
          })} */}
        </ul>
        <div className ="total-due">Total Payment Due:
          <h2>$</h2>
          <button>Proceed to Checkout</button>
        </div>
      </section>

    </>
  )
}

ShoppingCart.propTypes = {
  allRentals: PropTypes.arrayOf(PropTypes.string),
  allPrices: PropTypes.arrayOf(PropTypes.number)
}

export default ShoppingCart;
