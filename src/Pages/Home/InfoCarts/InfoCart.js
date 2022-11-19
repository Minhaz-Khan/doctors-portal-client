import React from 'react';

const InfoCart = ({ cartInfo }) => {
    const { name, description, icon, bgClass } = cartInfo;
    return (
        <div className={`card p-6 md:card-side bg-base-100 shadow-xl ${bgClass} text-white`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCart;