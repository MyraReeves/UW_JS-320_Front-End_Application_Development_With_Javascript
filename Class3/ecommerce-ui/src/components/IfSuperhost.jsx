import PropTypes from "prop-types";

function IfSuperhost(props) {
  const {booleanValue} = props;

  if (booleanValue) {
    return <p className="superhost">✶ Superhost ✶</p>;
  }
  return null;
}


IfSuperhost.propTypes = {
  booleanValue: PropTypes.bool.isRequired,
}

export default IfSuperhost;
