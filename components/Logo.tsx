import React from "react";

export const Logo = React.forwardRef((props, ref: any) => {
  return (
    <div ref={ref} className="header__logo" {...props}>
      <img src="/img/logo.png" alt="Pizza logo" />
      <div>
        <h1>NEXT PIZZA</h1>
        <p>пицца со вкусом SSR</p>
      </div>
    </div>
  );
});
