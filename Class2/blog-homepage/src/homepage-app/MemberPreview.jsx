import PropTypes from "prop-types";

function MemberPreview(props) {
  const {boolean} = props;

  if (boolean) {
    return <p id="MemPreview">★ Member preview</p>;
  }
  return null;

}


MemberPreview.propTypes = {
  boolean: PropTypes.bool.isRequired,
}

export default MemberPreview;
