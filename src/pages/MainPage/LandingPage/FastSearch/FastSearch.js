import React from "react";
import { FastSearchData } from "../../../../constants/UI";

const FastSearch = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex w-full items-center justify-between mb-10">
        <div className="flex flex-col justify-center gap-6 ">
          <h2 className="text-4xl text-gray-900 font-bold ">جستجو سریع</h2>
          <span className="text-sm text-gray-400 font-semibold ">
            {" "}
            بهترین اقامتگاها را با مناسب ترین قیمت رزرو کنید
          </span>
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center gap-8">
        {FastSearchData.map((item) => (
          <div className="flex cursor-pointer text-md font-semibold text-[#05a5a8] px-8 py-2 items-center justify-center rounded-2xl bg-[#edfefe] w-fit h-16">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastSearch;
