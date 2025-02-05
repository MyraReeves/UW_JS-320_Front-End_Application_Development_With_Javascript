import PropTypes from "prop-types";

import bnbProperties from "./bnbs.json";

import ProductImage from "./ProductImage";
import RentalLocation from "./RentalLocation";
import RatingStars from "./RatingStars";
import IfSuperhost from "./IfSuperhost";


function RentalsApp(props) {

  const {allPrices, arrayOfShoppingCartObjects, setAllPrices, setArrayOfShoppingCartObjects} = props

  /* This is my previous solution. Code kept for reference. To use this, the relevant props (which have now been deleted) would need to be re-added above as well as re-added to the list being passed down inside of App.jsx:

    const addToCart = (nameOfProperty, price) => {
      setAllRentals([...allRentals, nameOfProperty])
      setAllPrices([...allPrices, price])
    }

  */


  //  Replacing the above solution with an array of objects instead:
   const addToArrayOfShoppingCartObjects = (index, nameOfProperty, price) => {

    const checkFor = {
      propertyName: nameOfProperty,
    };

    const alreadyInCart = ( (rental) => rental.propertyName === checkFor.propertyName )

    if (
      arrayOfShoppingCartObjects.some(alreadyInCart)
    ){
      window.alert('⛔ ERROR: Duplicate request ⛔ \nThat rental property is already in your cart!');
    }

    else {
      const newShoppingCartObject = [...arrayOfShoppingCartObjects, {
        index: index,
        propertyName: nameOfProperty,
        price: price,
      }]

      setArrayOfShoppingCartObjects(newShoppingCartObject)
      setAllPrices([...allPrices, price])
    }
  }


  return (
    <section className="available-rentals">
      <h1>Top recommendations:</h1>
      <h5>Click on a property to learn more about it <span style={{color: "lightgray"}}> &nbsp; ✱Currently disabled✱</span></h5>

      {bnbProperties.map( (bnbProperties, index) => (
        <div className="each-rental-property" key={index} style={{display: 'inline-block'}}>

          <h2><span className="italics">&#34; {bnbProperties.title} &#34;</span></h2>

          <ProductImage imgSrc={bnbProperties.image}/>

          <RentalLocation city={bnbProperties.location.city} state={bnbProperties.location.state} country={bnbProperties.location.country} />

          <p className="rental-type">{bnbProperties.houseType}</p>

          <p className="guest-rating">
            <RatingStars numberOfStars = {bnbProperties.rating.stars}/> based on <span className="reviews">{bnbProperties.rating.reviews}</span> reviews
          </p>

          <p className="host-info">
            <span className="bold">Host:</span> &nbsp; {bnbProperties.host.name}
            <IfSuperhost booleanValue={bnbProperties.host.isSuperhost}/>
          </p>

          <span>
            <strong>${bnbProperties.payment.cost}</strong> per night
            <button type="submit" className="button-addToCart" onClick={() => addToArrayOfShoppingCartObjects(index, bnbProperties.title, bnbProperties.payment.cost)} >Add to Cart</button>
          </span>
        </div>
      ))}

    </section>
  )
}

RentalsApp.propTypes = {
  allPrices: PropTypes.arrayOf(PropTypes.number).isRequired,
  setAllPrices: PropTypes.func.isRequired,
  arrayOfShoppingCartObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArrayOfShoppingCartObjects: PropTypes.func.isRequired
}

ProductImage.propTypes = {
  imgSrc: PropTypes.string.isRequired
}

RentalLocation.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

RatingStars.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
}

IfSuperhost.propTypes = {
  booleanValue: PropTypes.bool.isRequired
}

export default RentalsApp;
