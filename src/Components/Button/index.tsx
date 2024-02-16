import React from "react";
import "./style.scss";

interface ButtonProps {
  link: string;
  text: string;
}

function Button({ link, text }: ButtonProps) {
  return (
    <button>
      <a href={link}>{text}</a>
    </button>
  );
}

export default Button;
