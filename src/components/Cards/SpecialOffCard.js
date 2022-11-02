import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
const SpecialOffCard = () => {
  return (
    <Link
      to="/"
      className="w-[16rem] flex flex-col items-center justify-center h-[18rem]  relative rounded-xl mx-4"
    >
      <div className="w-full h-full">
        <img
          src={require("../../Images/Banner.jpg")}
          alt="image"
          className="object-cover w-full h-full rounded-[1.5rem]"
        />
      </div>
      <div className="absolute flex flex-col px-3 py-4 gap-2 top-[70%] left-[50%] translate-x-[-50%] translate-y-[0%] w-[13rem] h-36 rounded-[1.3rem] shadow-xl bg-white">
        <span className="text-sm text-gray-700 flex items-center gap-1 justify-start font-bold">
          4 <StarIcon className="text-[#dcd027]" sx={{ fontSize: "16px" }} />
        </span>
        <p className="text-md text-gray-700 flex items-center justify-start font-bold">
          خانه جنگلی زیبا با مسافت 200 متری در محمود آباد
        </p>
        <span className="text-xs text-gray-400 mt-2 flex items-center justify-start font-semibold">
          4 اتاق خواب ,200 متر , تا 8 مهمان
        </span>
      </div>
    </Link>
  );
};

export default SpecialOffCard;
