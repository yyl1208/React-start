import PropTypes from "prop-types";

function Alert(props) {
  return <div>{this.props.info}</div>;
}

Alert.propTypes = {
  title: PropTypes.string.isRequired, // react  15.X前 React.PropTypes
};
Alert.defaultProps = {
  info: "报警",
};
