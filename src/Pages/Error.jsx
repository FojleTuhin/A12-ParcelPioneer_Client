import Lottie from "lottie-react";
import ErrorImg from "../assets/ErrorImg.json";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <Lottie animationData={ErrorImg} className="h-[500px]"/>
            </div>
            <div className="w-1/2 m-auto  mt-10">
                <Link to='/'><button className=" bg-[#87909A] flex mt-[-60px] m-auto font-bold text-white text-2xl px-4 py-2 rounded-full">Back to home</button></Link>
            </div>
        </div>
    );
};

export default Error;