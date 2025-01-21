import PropTypes from "prop-types";

function BookmarkIcon(props) {
  const {imgSrc, imgAlt} = props;

  return (
        <img className="bookmarkIcon" src={imgSrc}  alt={imgAlt} style={{float: 'right'}}/>
  )
}

BookmarkIcon.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
}

export default BookmarkIcon;
