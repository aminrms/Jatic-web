import React from "react";
import SpecialsOffSlider from "../../../../components/Sliders/SpecialsOffSlider";

const SpecialsOff = () => {
  return (
    <div className="w-full h-fit mx-auto px-5 mt-[7.5rem]">
      <div className="flex justify-start flex-col bg-white relative">
        <svg className="relative w-24 h-20 flex items-center justify-center   rotate-[-90deg] ">
          <circle
            className="w-full h-full fill-none stroke-[#fff] stroke-[15] "
            style={{ strokeLinecap: "round" }}
            cx="30"
            cy="45"
            r="20"
          ></circle>
          <circle
            className="w-full h-full stroke-[#00a3a6] fill-none stroke-[15] "
            style={{
              strokeLinecap: "round",
              strokeDasharray: "70",
              strokeDashoffset: "42",
            }}
            cx="30"
            cy="45"
            r="20"
          ></circle>
        </svg>
      </div>
      {/* <div className="flex justify-start flex-col bg-white w-12 h-12 border-4  rounded-full"></div> */}
      <div className="flex w-full h-fit items-center justify-between">
        <div className="">
          <h3 className="text-4xl font-bold mb-3 text-gray-900">
            تخفیف های ویژه
          </h3>
          <p className="text-md font-semibold text-gray-400">
            {" "}
            بهترین اقامتگاه ها را با مناسب ترین قیمت رزرو کنید
          </p>
        </div>
        <div className="flex items-center justify-between gap-2 w-[18.5rem] bg-gray-50 rounded-2xl h-16 py-2 px-4 ">
          
          <div className="flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 500 500"
              viewBox="0 0 500 500"
              className="w-6 h-6"
            >
              <circle
                cx="249.584"
                cy="249.524"
                r="178.709"
                fill="none"
                stroke="#474747"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="20"
              />
              <polyline
                fill="none"
                stroke="#474747"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="20"
                points="249.25 123.737 249.25 249.737 163.25 249.737"
              />
            </svg>
          </div>
          <div
            className="flex bg-white shadow-xl w-32 rounded-xl h-12 px-3 py-1 items-center justify-center gap-1"
            style={{ direction: "ltr" }}
          >
            <span className="text-md text-[#00a3a6] font-semibold">08 : </span>
            <span className="text-md text-[#00a3a6] font-semibold">54 : </span>
            <span className="text-md text-[#00a3a6] font-semibold">02</span>
          </div>
          <span className="flex items-center justify-center text-sm text-gray-500 font-semibold">
            زمان باقی مانده
          </span>
        </div>
      </div>
      <div className="w-full h-fit">
        <SpecialsOffSlider />
      </div>
    </div>
  );
};

export default SpecialsOff;
