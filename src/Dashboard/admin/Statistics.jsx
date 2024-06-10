import BarChart from "./BarChart";
import CountUp from 'react-countup';
import { useContext } from "react";
import { AuthContext } from "@/Firebase/FirebaseProvider";


const Statistics = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-6 mb-14">
                <div className="h-[140px] w-[270px] bg-[#EBFBE5] flex flex-col items-center justify-center rounded-2xl">
                    <p className="text-xl"> Admin</p>
                    <p className="font-semibold text-5xl">
                        <CountUp end={1} duration={5}>
                        </CountUp>
                    </p>
                </div>
                <div className="h-[140px] w-[270px] bg-[#FAECFF] flex flex-col items-center justify-center rounded-2xl">
                    <p className="text-xl"> Delivery Man</p>
                    <p className="font-semibold text-5xl">
                        <CountUp end={100} duration={5}>
                        </CountUp>
                    </p>
                </div>
                <div className="h-[140px] w-[270px] bg-[#EBFBE5] flex flex-col items-center justify-center rounded-2xl">
                    <p className="text-xl">Regular User</p>
                    <p className="font-semibold text-5xl">
                        <CountUp end={100} duration={5}>
                        </CountUp>
                    </p>
                </div>
            </div>
            <div className="md:flex">
                <div>
                    <BarChart></BarChart>
                </div>
                <div className="flex-1">
                    <div className="border rounded-2xl px-5 py-4">
                        <p className="mb-6 font-bold text-xl text-center">Admin</p>

                        <div className="w-full flex justify-center">
                            <img className="h-[70px] w-[70px] rounded-full border-[#3EA570] border-4" src={user?.photoURL} alt="" />
                        </div>

                        
                        <p className="w-[100%] border-[#E6E6EB] mt-10 py-2 px-5 rounded-xl border-2 text-[#787878]">{user?.displayName}</p>
                        <p className="w-[100%] border-[#E6E6EB] mt-4 py-2 px-5 rounded-xl border-2 text-[#787878]">01877127477</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;