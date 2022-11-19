import React from 'react';

const GradientText = ({ children, classStyle }) => {
    return (
        <h3 className={`${classStyle} text-transparent bg-clip-text bg-gradient-to-b from-secondary to-primary`}>{children} </h3>
    );
};

export default GradientText;