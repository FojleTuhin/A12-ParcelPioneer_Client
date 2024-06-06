import CountUp from 'react-countup';
const Statistics = () => {
    return (
        <div className="px-4 md:px-16 lg:px-[100px] flex flex-wrap justify-center gap-6  mt-12 mb-10">
            <div className="h-[150px] w-[300px] bg-[#EBFBE5] flex flex-col items-center justify-center rounded-2xl">
                <p className="text-xl"> Parcel Booked</p>
                <p className="font-semibold text-5xl">
                    <CountUp end={100} duration={5}>
                    </CountUp>
                </p>
            </div>
            <div className="h-[150px] w-[300px] bg-[#FAECFF] flex flex-col items-center justify-center rounded-2xl">
                <p className="text-xl"> Parcel Delivered</p>
                <p className="font-semibold text-5xl">
                    <CountUp end={100} duration={5}>
                    </CountUp>
                </p>
            </div>
            <div className="h-[150px] w-[300px] bg-[#EBFBE5] flex flex-col items-center justify-center rounded-2xl">
                <p className="text-xl"> User</p>
                <p className="font-semibold text-5xl">
                    <CountUp end={100} duration={5}>
                    </CountUp>
                </p>
            </div>
        </div>
    );
};

export default Statistics;