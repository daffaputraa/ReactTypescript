import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
  onClick: () => number | string;
};

type ArrowProps = {
  style: string;
  top: number;
};

const Arrow = (props: ArrowProps) => (
  <>
    <h1>{props.style}</h1>
  </>
);

const Button = ({ onClick, style }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{style.margin}</button>
      <Arrow style={"Halo"} top={2} />
    </div>
  );
};

export default Button;
