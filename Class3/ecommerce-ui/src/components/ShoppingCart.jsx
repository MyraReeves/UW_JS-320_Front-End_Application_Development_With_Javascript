import PropTypes from "prop-types";

function ShoppingCart(props) {
  const {allRentals, setAllRentals, allPrices, setAllPrices} = props;

  const clearAll = () => {
    setAllRentals([])
    setAllPrices([])
  }

  const deleteIndividually = (indexOfItem) => {
    const beginningOfExistingArray = allRentals.slice(0, indexOfItem)
    const endOfExistingArray = allRentals.slice(indexOfItem + 1)
    const newShoppingCartArray = [...beginningOfExistingArray, ...endOfExistingArray]
    setAllRentals(newShoppingCartArray)

    allPrices.splice(indexOfItem, 1)
  }

  const calculateTotal = ({allPrices}) => {
    let sum = 0;
    const newSum = allPrices.reduce((total, current) => {
      return total + current;
      }, 0);
    return sum + newSum
  }


  return (
    <>
      <section className="shopping-cart">
        <h3>Shopping Cart</h3>

        <button className="clear-cart" onClick={() => clearAll()}>Clear all</button>

        <ul>
          <li>
            {allRentals.map((rentalToBePurchased, index) => {
              return <>
                <span key = {index} className="align-left">{rentalToBePurchased} <br/><button className="delete-button" onClick={() => deleteIndividually(index)}>Delete</button></span>
                <hr/>
              </> }
            )}
            {/* Re-insert the following commented-out code to confirm that prices are functioning properly during additions/deletions: */}
             {/* <span>Ongoing Tally:</span><br/>
            {allPrices.map((costOfRental, index) => {
              return <>
                <span key = {index} className="align-right">${costOfRental}, &nbsp;</span>
              </> }
          )} */}
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
  setAllRentals: PropTypes.func,
  eachRental: PropTypes.func,
  allPrices: PropTypes.arrayOf(PropTypes.number),
  setAllPrices: PropTypes.func
}

export default ShoppingCart;
