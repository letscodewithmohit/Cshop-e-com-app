import React from "react";

const AllProductsShim = () => {
  const arrayData = new Array(9).fill("");

  console.log(arrayData);

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center py-3 mt-4 container mx-auto bg-slate-100 ">
        {arrayData.map((ele, i) => (
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full  shadow-md bg-white">
            <div className="w-full border h-[200px] bg-[#ccc] rounded"></div>
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-gray-500 bg-[#ccc] h-[20px] w-[200px] text-xs tracking-widest title-font mb-1"></h3>
              <h2 className="text-gray-900  bg-[#ccc] h-[20px] w-[100px] title-font text-l font-medium "></h2>
              <p className="mt-1 bg-[#ccc] h-[20px] w-[130px] rounded"></p>

              <div className="m-2">
                <button className="flex ml-auto bg-[#ccc] h-[40px] w-[120px] text-whit border-0 py-2 md:px-6 px-6 rounded"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsShim;
