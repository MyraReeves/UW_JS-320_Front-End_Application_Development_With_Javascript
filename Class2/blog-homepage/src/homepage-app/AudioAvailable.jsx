import PropTypes from "prop-types";

function AudioAvailable(props) {
  const {booleanValue} = props;

  if (booleanValue) {
    return <p id="audioPlaceholder">🔊 Audio available</p>;
  }
  return null;

}


AudioAvailable.propTypes = {
  booleanValue: PropTypes.bool.isRequired,
}

export default AudioAvailable;
