import PropTypes from "prop-types";

import bnbProperties from "./bnbs.json";

import ProductImage from "./ProductImage";
import RentalLocation from "./RentalLocation";
import IfSuperhost from "./IfSuperhost";

function RentalsApp() {

  return (
    <section className="available-rentals">
      {bnbProperties.map( (bnbProperties, index) => (
        <div className="each-rental-property" key={index} style={{display: 'inline-block'}}>

          <h2>{bnbProperties.title}</h2>

          <ProductImage imgSrc={bnbProperties.image} />

          <RentalLocation city={bnbProperties.location.city} state={bnbProperties.location.state} country={bnbProperties.location.country} />

          <p className="rental-type">{bnbProperties.houseType}</p>

          <p><span>Host:</span> {bnbProperties.host.name}</p>
          <IfSuperhost booleanValue={bnbProperties.host.isSuperhost}/>
        </div>
      ))}

    </section>
  )
}

ProductImage.propTypes = {
  imgSrc: PropTypes.string.isRequired
}

RentalLocation.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

IfSuperhost.propTypes = {
  booleanValue: PropTypes.bool.isRequired
}

export default RentalsApp;
