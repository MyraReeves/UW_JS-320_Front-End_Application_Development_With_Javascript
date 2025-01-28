import PropTypes from "prop-types";

import bnbProperties from "./bnbs.json";

import ProductImage from "./ProductImage";
import RentalLocation from "./RentalLocation";
import RatingStars from "./RatingStars";
import IfSuperhost from "./IfSuperhost";

// function myFunction() {
//   console.log('Clicked!');
// }


function RentalsApp(props) {

  const {rentalToBePurchased, setRentalToBePurchased, allRentals, setAllRentals} = props

  const addToCart = (event) => {
    setAllRentals([...allRentals, rentalToBePurchased])
  }

  return (
    <section className="available-rentals">
      <h1>Top recommendations:</h1>
      <h5>Click on a property to learn more about it <span style={{color: "lightgray"}}> &nbsp; *Currently disabled*</span></h5>

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

          <span><strong>${bnbProperties.payment.cost}</strong> per night <button type="submit" className="button-addToCart" onClick={addToCart}>Add to Cart</button></span>
        </div>
      ))}

    </section>
  )
}

RentalsApp.propTypes = {
  rentalToBePurchased: PropTypes.string,
  setRentalToBePurchased: PropTypes.func,
  allRentals: PropTypes.arrayOf(PropTypes.string),
  setAllRentals: PropTypes.func,
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
