import PropTypes from "prop-types";

function Picture(props) {
  const {imgSrc, imgAlt} = props;

  return (
        <img className="previewPic" src={imgSrc}  alt={imgAlt}/>
  )
}

Picture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
}

export default Picture;
