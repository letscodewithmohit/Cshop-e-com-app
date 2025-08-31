import React from "react";
import {FaShippingFast} from "react-icons/fa";
import {MdOutlinePayment} from "react-icons/md";
import {TbTruckReturn} from "react-icons/tb";
import {MdOutlineProductionQuantityLimits} from "react-icons/md";

const Service = () => {
  return (
    <>
      <div
        id="services"
        className="container  mx-auto px-5 pt-20 flex py-11 gap-10 items-center justify-center flex-wrap"
      >
        <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500 ease-in-out">
          <FaShippingFast size={30} />
          <p>FREE SHIPPING</p>
        </div>

        <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500 ease-in-out">
          <MdOutlineProductionQuantityLimits size={30} />
          <p>AUTHENTIC PRODUCTS</p>
        </div>

        <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500 ease-in-out">
          <TbTruckReturn size={30} />
          <p>EASY RETURN</p>
        </div>

        <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500 ease-in-out">
          <MdOutlinePayment size={30} />
          <p>SECURE PAYMENT</p>
        </div>
      </div>
    </>
  );
};

export default Service;
