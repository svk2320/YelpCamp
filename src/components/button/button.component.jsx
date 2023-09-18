import React from "react";
import { Link } from "react-router-dom";

const Button = ({pageLink, text}) => {
  return (
    <Link to={pageLink}>
      <button
        class="bg-black text-white font-bold py-2 px-4 rounded p-10"
        type="button"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
