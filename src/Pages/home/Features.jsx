
const Features = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 px-4 md:px-16 mt-32 mb-10">
            <div className="w-[300px] text-center p-2">
                <img className="" src="https://i.ibb.co/7bst0N2/ic-Parcel-Feature-1.png" alt="" />
                <p className="text-3xl font-bold">On Demand Delivery</p>
                <p>Left your charger or keys at home? Have it delivered to you on Pathao Parcel, without any hassle! </p>
            </div>
            <div className="w-[300px] text-center p-2">
                <img className="" src="https://i.ibb.co/JjVxXvJ/ic-Car-Feature-3.png" alt="" />
                <p className="text-3xl font-bold">Trust Us</p>
                <p>You can trust us to deliver your most confidential documents to the desired place absolutely intact right on time! </p>
            </div>
            <div className="w-[300px] text-center p-2">
                <img className="" src="https://i.ibb.co/V21xb3d/ic-Parcel-Feature-2.png" alt="" />
                <p className="text-3xl font-bold">Emergency? <br /> Deliver via Parcel!</p>
                <p>With Pathao Parcel, you can get your item in the quickest time. Because your emergencies are Parcel’s biggest concern! </p>
            </div>
        </div>
    );
};

export default Features;