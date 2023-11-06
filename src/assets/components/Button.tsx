import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
  onClick: () => number;
};

const Button = ({ style }: ButtonProps) => {
  return (
    <div>
      <button onClick={onclick}>{style.marginTop}</button>
    </div>
  );
};

export default Button;
