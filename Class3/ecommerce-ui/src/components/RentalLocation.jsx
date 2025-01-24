import PropTypes from "prop-types";

function RentalLocation(props) {
  const {city, state, country} = props;

  return (
        <p className="rental-location">{city}, {state} • {country}</p>
  )
}

RentalLocation.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default RentalLocation;
