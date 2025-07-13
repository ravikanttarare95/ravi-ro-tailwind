import React from "react";
import Button from "./Button.jsx";
import { ButtonSecondary } from "./Button.jsx";
import SummaryCardIcon from "./../../public/summary-card-icon.png";
function SummaryCard({ SummaryCardHeading, SummaryCardPhoto }) {
  return (
    <>
      <div className="w-70 flex flex-col gap-6 pb-3 bg-white">
        <div className="overflow-hidden">
          <img
            src={SummaryCardPhoto}
            alt="Image"
            className="hover:scale-110 duration-300"
          />
        </div>
        <h4 className="text-lg font-semibold mx-7 pb-4">
          {SummaryCardHeading}
        </h4>
        <div className="w-[100%] flex justify-between px-3">
          <ButtonSecondary btnTitle={"Project Details"} />
          <div className="bg-blue-900 w-9 p-1 rounded-full">
            <img src={SummaryCardIcon} alt="Icon" className="w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryCard;
