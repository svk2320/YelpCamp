import React from "react";
import { Link } from "react-router-dom";

const Button = ({pageLink, text, wFull}) => {
  return (
    <Link to={pageLink}>
      <button
        className={`bg-black text-white font-bold py-2 px-4 rounded ${wFull ? "w-full" : ''}`}
        type="button"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
