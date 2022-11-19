import React from 'react';

const ServiceCart = ({ service }) => {
    const { name, image, Details } = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold">{name}</h2>
                <p>{Details}</p>
            </div>
        </div>
    );
};

export default ServiceCart;