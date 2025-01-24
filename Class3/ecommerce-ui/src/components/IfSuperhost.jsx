import PropTypes from "prop-types";

function IfSuperhost(props) {
  const {booleanValue} = props;

  if (booleanValue) {
    return <span className="superhost">✶ Superhost ✶</span>;
  }
  return null;
}


IfSuperhost.propTypes = {
  booleanValue: PropTypes.bool.isRequired,
}

export default IfSuperhost;
