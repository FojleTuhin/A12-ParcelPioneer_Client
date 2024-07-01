
const Title = ({heading, subheading}) => {
    return (
        <div className="mt-12">
            <p className="text-[#D99904] text-4xl text-center mb-4">---{heading}---</p>
            <hr className="w-[40%] mx-auto border-2"/>
            <p className="mt-5 text-[#151515] text-xl text-center">{subheading}</p>
            <hr className="w-[40%] mx-auto border-2 mt-6"/>
        </div>
    );
};

export default Title;