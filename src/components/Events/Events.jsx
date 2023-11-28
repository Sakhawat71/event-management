import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Events = ({ event }) => {
    const { id, name, image, shortDescription, price } = event;


    return (
        <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure className='lg:h-64'>
                <img
                    className='h-full w-full'
                    src={image}
                    alt="Events"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-2xl text-gray-800">{name}</h2>
                <p className='text-gray-600'>{shortDescription}</p>
                <div className="card-actions items-center justify-end">
                    <p className='font-black text-xl text-gray-700'>{price}</p>
                    <Link to={`/event/${id}`}>
                        <button className="btn btn-primary font-semibold border-none "
                        >Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Events;

Events.propTypes = {
    event: PropTypes.object,
};
