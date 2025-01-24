import PropTypes from "prop-types";

function ProductImage(props) {
  const {imgSrc} = props;

  return (
        <img className="productImage" src={imgSrc}  alt="Photo of rental location"/>
  )
}

ProductImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default ProductImage;
