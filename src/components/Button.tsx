import React from "react";

interface ButtonInput {
    text: string;
}

const Button = ({text}: ButtonInput) => {
  return (
    <button
      type="button"
      className="text-white bg-black hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-lg px-7 py-3 me-2 mb-2"
    >
      {text}
    </button>
  );
};

export default Button;
