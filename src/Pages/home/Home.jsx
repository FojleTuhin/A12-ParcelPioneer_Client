import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";
import Statistics from "./Statistics";
import TopDeliveryMan from "./TopDeliveryMan";
import WhatWeSend from "./WhatWeSend";
import Questions from "./Questions";
import Available from "./Available";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    ParcelPioneer || Home
                </title>
            </Helmet>
            <Banner/>
            <WhatWeSend></WhatWeSend>
            <Features></Features>
            <Available></Available>
            <Statistics></Statistics>
            <TopDeliveryMan></TopDeliveryMan>
            <Questions></Questions>
        </div>
    );
};

export default Home;