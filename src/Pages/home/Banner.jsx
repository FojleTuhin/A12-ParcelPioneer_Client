import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <div className="md:h-[400px] h-[250px] lg:h-[600px] bg-contain">
            <div className="bg-[url('https://i.ibb.co/Bz3WhSp/parcelbanner.jpg')]  h-full w-full bg-cover bg-no-repeat  lg:px-[100px] md:px-16 px-4 ">
                <div className="">
                    <div className="md:w-[55%] w-full">

                        <p className="lg:text-6xl md:text-4xl text-2xl font-bold text-[#153448] pt-8">On Demand Delivery at Your Doorstep</p>


                        <div className="flex items-center">
                            <input placeholder="Search here" type="text" className="border-2 rounded-xl border-black w-[80%] mt-20 h-14 px-5" />
                            <Button className='-ml-20 mt-20'>Search</Button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;