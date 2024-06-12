import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";
import Statistics from "./Statistics";
import TopDeliveryMan from "./TopDeliveryMan";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    ParcelPioneer || Home
                </title>
            </Helmet>
            <Banner/>
            <Features></Features>
            <Statistics></Statistics>
            <TopDeliveryMan></TopDeliveryMan>
        </div>
    );
};

export default Home;