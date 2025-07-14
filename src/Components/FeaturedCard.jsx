import React from "react";
import Button from "./Button.jsx";

function FeaturedCard({
  FeaturedCardIcon,
  featuredCardHeading,
  featuredCardDesc,
  btnTitle,
}) {
  return (
    <div className="bg-white p-5 w-70 flex flex-col items-center justify-between gap-10 text-center shadow-xl rounded-lg">
      <div className="flex flex-col items-center gap-10">
        <img
          src={FeaturedCardIcon}
          alt="Icon"
          className="w-20 h-20 border-2 border-blue-900 rounded-full p-2"
        />
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold">{featuredCardHeading}</h4>
          <p className="">{featuredCardDesc}</p>
        </div>
      </div>
      <Button btnTitle={btnTitle} className=" " />
    </div>
  );
}

export default FeaturedCard;
