import React from "react";

const PopularProductShim = () => {
  const arrayData = new Array(4).fill("");
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4  ">
            {arrayData.map((ele, i) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col  h-full border shadow-xl">
                {/* Image Section */}

                <div className="w-full h-[200px] border bg-[#ccc] rounded"></div>

                {/* Content Wrapper */}
                <div className="mt-4  flex-grow">
                  <h2 className="text-gray-900 title-font text-lg font-medium w-[150px] h-[20px] bg-[#ccc]"></h2>
                  <p className="mt-1 text-xl font-semibold w-[120px] h-[20px] bg-[#ccc] rounded"></p>
                </div>

                {/* Button at the Bottom */}
                <div className="mt-4">
                  <button className=" bg-[#ccc] h-[40px] w-[120px] text-whit border-0 py-2 md:px-6 px-6 rounded"></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularProductShim;
