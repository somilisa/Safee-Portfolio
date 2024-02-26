import React from "react";
import "./style.scss";

interface ButtonProps {
  link: string;
  text: string;
  icon: string;
}

function Button({ link, text, icon }: ButtonProps) {
  return (
    <button className="button">
      <span className="material-symbols-outlined">{icon}</span>
      <a href={link}>{text}</a>
    </button>
  );
}

export default Button;
