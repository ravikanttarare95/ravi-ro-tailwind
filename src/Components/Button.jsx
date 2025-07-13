import React from "react";

function Button({ btnTitle }) {
  return (
    <>
      <button className="border-2 py-1 px-4 border-gray-300 text-gray-400 hover:bg-blue-900 cursor-pointer hover:text-white duration-300">
        {btnTitle}
      </button>
    </>
  );
}

function ButtonSecondary({ btnTitle }) {
  return (
    <>
      <button className="border-2 py-1 px-4 border-blue-900 text-blue-900 cursor-pointer hover:bg-blue-100 duration-300">
        {btnTitle}
      </button>
    </>
  );
}

function ButtonTertiary({ btnTitle }) {
  return (
    <>
      <button className="border-2 py-1 max-w-110 w-[100%] border-gray-300 text-gray-400 hover:shadow-xl cursor-pointer hover:text-white duration-300">
        {btnTitle}
      </button>
    </>
  );
}

export default Button;
export { ButtonSecondary, ButtonTertiary };
