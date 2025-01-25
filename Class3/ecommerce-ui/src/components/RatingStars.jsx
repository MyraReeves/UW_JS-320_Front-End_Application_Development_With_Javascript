import PropTypes from "prop-types";

function RatingStars(props) {
  let {numberOfStars} = props;

  if (numberOfStars == 1) {
    return '★☆☆☆☆';
  }
  else if (numberOfStars == 2) {
    return '★★☆☆☆';
  }
  else if (numberOfStars == 3) {
    return '★★★☆☆'
  }
  else if (numberOfStars == 4) {
    return '★★★★☆'
  }
  else if (numberOfStars == 5) {
    return '★★★★★'
  }
  else {
  return null;}

}


RatingStars.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
}

export default RatingStars;
