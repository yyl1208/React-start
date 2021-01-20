import React from "react";
import PropTypes from "prop-types";
import "./svg-icon.css";

const importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("@/assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

const SvgIcon = ({ iconClass, className }) => {
  //   const styleExternalIcon = {
  //     mask: `url(${iconClass}) no-repeat 50% 50%`,
  //     WebkitMask: `url(${iconClass}) no-repeat 50% 50%`,
  //   };
  //   const isExternal = (path) => /^(https?:|mailto:|tel:)/.test(path);
  const svgClass = className ? "svg-icon " + className : "svg-icon";
  const iconName = `#${iconClass}`;
  return (
    <svg className={svgClass} aria-hidden="true">
      <use xlinkHref={iconName} />
    </svg>
  );
};

SvgIcon.propTypes = {
  iconClass: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SvgIcon;
