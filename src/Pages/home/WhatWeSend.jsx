import { GrGift } from "react-icons/gr";
import { IoDocumentsOutline } from "react-icons/io5";
import { PiPackageDuotone } from "react-icons/pi";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineElectricalServices } from "react-icons/md";
import { Link } from "react-router-dom";

const WhatWeSend = () => {
  return (
    <div className="px-4 md:px-16 lg:px-[100px] mb-20">
      <h2 className="font-bold text-2xl md:text-4xl mt-24 text-center mb-16">
        What Can You Send?
      </h2>
      <div className="flex justify-evenly flex-wrap">
        <Link to="/dashboard/bookAParcel">
          <div className="flex flex-col w-[180px] h-[200px] py-[40px] items-center rounded-xl shadow-lg">
            <GrGift className="text-red-500 text-[64px] mb-10" />
            <p className="font-semibold text-xl">Gift</p>
          </div>
        </Link>
        <Link to={"/dashboard/bookAParcel"}>
          <div className="flex flex-col w-[180px] h-[200px] py-[40px] items-center rounded-xl shadow-lg">
            <IoDocumentsOutline className="text-red-500 text-[64px] mb-10" />
            <p className="font-semibold text-xl">Document</p>
          </div>
        </Link>
        <Link to={"/dashboard/bookAParcel"}>
          <div className="flex flex-col w-[180px] h-[200px] py-[40px] items-center rounded-xl shadow-lg">
            <PiPackageDuotone className="text-red-500 text-[64px] mb-10" />
            <p className="font-semibold text-xl">Package</p>
          </div>
        </Link>
        <Link to={"/dashboard/bookAParcel"}>
          <div className="flex flex-col w-[180px] h-[200px] py-[40px] items-center rounded-xl shadow-lg">
            <FaListCheck className="text-red-500 text-[64px] mb-10" />
            <p className="font-semibold text-xl">Accessories</p>
          </div>
        </Link>
        <Link to={"/dashboard/bookAParcel"}>
          <div className="flex flex-col w-[180px] h-[200px] py-[40px] items-center rounded-xl shadow-lg">
            <MdOutlineElectricalServices className="text-red-500 text-[64px] mb-10" />
            <p className="font-semibold text-xl">Electronics</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhatWeSend;
