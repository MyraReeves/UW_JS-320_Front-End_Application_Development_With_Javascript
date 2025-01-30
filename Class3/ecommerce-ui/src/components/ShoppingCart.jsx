import PropTypes from "prop-types";

function ShoppingCart(props) {
  const {allRentals, allPrices} = props;

  // const priceOfEach = () => {
  //   allPrices.map( (costOfRental, index) => {
  //     return <>
  //     <span key={index} className="align-right">{costOfRental}</span>
  //     <hr/>
  //     </>
  //   })
  // }

  const calculateTotal = ({allPrices}) => {
    let sum = 0;
    const newSum = allPrices.reduce((total, current) => {
      return total + current;
      }, 0);
    return sum + newSum
  }
  //   let sum = 0;
  //   for (let i = 0; i < allPrices.length; i++) {
  //       sum += allPrices[i];
  //   }
  //   return sum
  // }

  return (
    <>
      <section className="shopping-cart">
        <h3>Shopping Cart</h3>
        <ul>
          <li>
            {allRentals.map((rentalToBePurchased, index) => {
              return <>
                <span key = {index} className="align-left">{rentalToBePurchased}</span>
                <hr/>
              </> }
            )}
            <span>Ongoing Tally:</span>
            {allPrices.map((costOfRental, index) => {
              return <>
                <span key = {index} className="align-right">${costOfRental}, &nbsp;</span>
              </> }
          )}
          </li>
        </ul>
        <div className ="total-due">Total Payment Due:
          <h2>$ {calculateTotal({allPrices})}</h2>
          <button>Proceed to Checkout</button>
        </div>
      </section>

    </>
  )
}

ShoppingCart.propTypes = {
  allRentals: PropTypes.arrayOf(PropTypes.string),
  eachRental: PropTypes.func,
  allPrices: PropTypes.arrayOf(PropTypes.number)
}

export default ShoppingCart;
