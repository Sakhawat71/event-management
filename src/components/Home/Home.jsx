import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Events from "../Events/Events";
import Services from "../../pages/services/Services";


const Home = () => {

    const allEvents = useLoaderData()

    return (
        <div>
            <Slider></Slider>
            <Services></Services>

            <h2 className="font-semibold text-2xl text-center mt-10">Available Services</h2>
            <div className="flex md:mx-10 mx-auto justify-center">

                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-10">
                    {
                        allEvents?.map(event => <Events
                            key={event.id}
                            event={event}
                        ></Events>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;