import { useLoaderData, useParams } from "react-router-dom";

const EventDatails = () => {

    const {id} = useParams()
    const paramsId = parseInt(id)
    const events = useLoaderData()

    const event = events.find(event => event.id === paramsId )
    const {image,name,fullDescription} = event;


    return (
        <div className="my-10 space-y-4">
            <figure className="max-w-[800px] mx-auto justify-center">
                <img className="w-full md:h-[400px]" src={image} alt="" />
            </figure>
            <div>
                <h2 className="font-bold text-4xl text-center mb-5">{name}</h2>
                <p>{fullDescription}</p>
            </div>
        </div>
    );
};

export default EventDatails;