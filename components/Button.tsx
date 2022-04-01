import React from "react";
import classNames from "classnames";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const { className, children, ...rest } = props;

  return (
    <a ref={ref} className={classNames("button", className)} {...rest}>
      {children}
    </a>
  );
});
