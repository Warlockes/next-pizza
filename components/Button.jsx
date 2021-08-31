import React from "react";

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

export default Button;
