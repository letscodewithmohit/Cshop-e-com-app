import React from "react";
import {Link} from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div className="w-full h-[80vh] mt-[80px] bg-[#f7f6f6] container mx-auto my-4 px-4 py-4 shadow-lg rounded-md flex justify-center items-center ">
        <div className="flex flex-col items-center">
          <img src="emptycart.webp" alt="EmptyCartImg" className="w-[300px] " />
          <h3 className="text-center text-2xl font-semibold mt-3">
            Your Cart is Currenty Empty
          </h3>
          <Link to="/">
            {" "}
            <button className="bg-green-500 text-white px-2 py-1 border-2  hover:bg-green-700  ml-2 w-full sm:w-auto mt-4 ">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
