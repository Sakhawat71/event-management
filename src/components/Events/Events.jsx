import PropTypes from 'prop-types';


const Events = ({ event }) => {
    const { name, image, shortDescription , price} = event;


    return (
        <div className="card card-compact max-w-md bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{shortDescription}</p>
                <div className="card-actions items-center justify-end">
                    <p>{price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Events;

Events.propTypes = {
    event: PropTypes.object,
};
