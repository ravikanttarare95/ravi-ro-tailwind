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

function ButtonPrimary({ btnTitle }) {
  return (
    <>
      <button className="bg-purple-700 text-white py-3 px-5 rounded-4xl text-xl cursor-pointer hover:-translate-y-1 hover:bg-purple-800 active:translate-y-1 duration-300">
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
      <button className=" py-2 bg-blue-800 hover:bg-blue-900  rounded-sm text-white text-md hover:shadow-md cursor-pointer duration-300">
        {btnTitle}
      </button>
    </>
  );
}

export default Button;
export { ButtonPrimary, ButtonSecondary, ButtonTertiary };
