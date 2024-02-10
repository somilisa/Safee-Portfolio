import React from "react";
import "./Button.scss";

function Button({ link, text }) {
  return (
    <button>
      <a href={link}>{text}</a>
    </button>
  );
}

export default Button;
