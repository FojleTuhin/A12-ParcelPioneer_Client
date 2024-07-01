import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Questions = () => {
    return (
        <div className="px-4 md:px-16 lg:px-[140px] mb-20 pt-10">
            <h1 className="mt-5 font-bold text-4xl mb-10 text-center">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger><span className="text-xl">How do i contact the deliverer?</span></AccordionTrigger>
                    <AccordionContent>
                        <span className="text-xl">
                            After accepting your request, you will see the deliverers’ name, picture and user rating appear on your phone screen, along with a phone icon. Press the phone icon beside the contact number to call the deliverer.
                        </span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger><span className="text-xl">How do i cancel a request?</span></AccordionTrigger>
                    <AccordionContent>
                        <span className="text-xl">  You can cancel the request up until the start of your delivery. To do this, you have to press either “Cancel Request” or a red “X” sign when applicable.</span>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger><span className="text-xl">How do i reqest for a delivery?</span></AccordionTrigger>
                    <AccordionContent>
                        <span className="text-xl">
                            To request a ride, you will have to select Pathao Parcels from the vertical button at the top of the screen. Then, you will have to select your pickup and drop-off location, fill in detailed information about the receiver of the item and select any one of the predefined product category which is closest to the item you are sending. Then you can review information before you request for a delivery pickup, after which Pathao Parcels can find the nearest deliverer around you and send them your way.
                        </span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger><span className="text-xl">How do i tract my delivery?</span></AccordionTrigger>
                    <AccordionContent>
                        <span className="text-xl">
                            There are three stages in tracking your delivery. After the deliverer accepts your requests, your phone screen will show “Request Accepted”. The delivery status will change to “In Transit” the moment the deliverer starts the request. When the deliverer has successfully delivered your item, the status will change to “Delivered”. All throughout, your phone screen will display a phone icon to call the deliverer. Press on the phone icon to call the deliverer if you wish to know detailed location of your deliverer.
                        </span>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    );
};

export default Questions;