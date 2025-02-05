import PropTypes from "prop-types";

function ShoppingCart(props) {
  const {setAllRentals, allPrices, setAllPrices, arrayOfShoppingCartObjects, setArrayOfShoppingCartObjects} = props;

  const clearAll = () => {
    setAllRentals([])
    setAllPrices([])
    setArrayOfShoppingCartObjects([])
  }

  /* Copy of the previous, worse method

  const deleteIndividually = (indexOfItem) => {
    const beginningOfExistingArray = allRentals.slice(0, indexOfItem)
    const endOfExistingArray = allRentals.slice(indexOfItem + 1)
    const newShoppingCartArray = [...beginningOfExistingArray, ...endOfExistingArray]
    setAllRentals(newShoppingCartArray)

    allPrices.splice(indexOfItem, 1)
  };

  */


  //  The following (using the array of objects instead) is the better alternative to the above even though it deletes from the array all indexes associated with .propertyName because arrayOfShoppingCartObjects.index is the same for all instances in the array
  const filterOut = (indexToBeDeleted, priceToBeDeleted) => {
    const newArray = arrayOfShoppingCartObjects.filter( (rentalObject) => {return rentalObject.index !== indexToBeDeleted} );
    setArrayOfShoppingCartObjects(newArray)

    const subtractFromTotal = allPrices.filter( (rentalObject) => {return rentalObject !== priceToBeDeleted})
    setAllPrices(subtractFromTotal)
  };



  const calculateTotal = ({allPrices}) => {
    let sum = 0;
    const newSum = allPrices.reduce((total, current) => {
      return total + current;
      }, 0);
    return sum + newSum
  };


  return (
    <>
      <section className="shopping-cart">
        <h3>Shopping Cart</h3>

        <button className="clear-cart" onClick={() => clearAll()}>Clear all</button>

        <ul>
            {arrayOfShoppingCartObjects.map((rentalToBePurchased, index) => {
              return <li key={index} className="align-left">{rentalToBePurchased.propertyName} <br/><span className="costOfRental">$ {rentalToBePurchased.price}</span> <button className="delete-button" onClick={() => filterOut(rentalToBePurchased.index, rentalToBePurchased.price)}>Delete</button></li>
                 }
            )}
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
  allRentals: PropTypes.arrayOf(PropTypes.string).isRequired,
  setAllRentals: PropTypes.func.isRequired,
  eachRental: PropTypes.func.isRequired,
  allPrices: PropTypes.arrayOf(PropTypes.number).isRequired,
  setAllPrices: PropTypes.func.isRequired,
  arrayOfShoppingCartObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArrayOfShoppingCartObjects: PropTypes.func.isRequired
}

export default ShoppingCart;
