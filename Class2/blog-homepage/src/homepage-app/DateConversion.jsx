import PropTypes from "prop-types";

function DateConversion(props) {
  const {date} = props;
  const options = {
    month: "short",
    day: "numeric",
  };

  return (
    new Date(date).toLocaleDateString('en-us', options)
  )
}

DateConversion.propTypes = {
  date: PropTypes.string.isRequired,
}

export default DateConversion;
