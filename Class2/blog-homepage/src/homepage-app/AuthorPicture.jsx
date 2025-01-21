import PropTypes from "prop-types";

function AuthorPicture(props) {
  const {imgSrc, imgAlt} = props;

  return (
        <img className="authorPic" src={imgSrc}  alt={imgAlt}/>
  )
}

AuthorPicture.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
}

export default AuthorPicture;
