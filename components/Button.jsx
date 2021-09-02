import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

const Button = React.forwardRef(
  ({ children, className, href, onClick }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={classNames("button", className)}
      >
        {children}
      </a>
    );
  }
);

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
