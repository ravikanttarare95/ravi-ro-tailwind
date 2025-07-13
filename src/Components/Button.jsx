import React from "react";

function Button({ btnTitle }) {
  return (
    <>
      <button className="border-2 py-1 px-4 border-gray-300 text-gray-400">
        {btnTitle}
      </button>
    </>
  );
}

export default Button;
