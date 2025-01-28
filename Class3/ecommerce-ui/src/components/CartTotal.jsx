import PropTypes from "prop-types";

function CartTotal(props) {
  const {allRentalsArray} = props;

  return (
    allRentalsArray.reduce((total, current) => {
      return total + current;
    }, 0)
  )
}


CartTotal.propTypes = {
  imgSrc: PropTypes.arrayOf(PropTypes.number).isRequired,
}


export default CartTotal;
