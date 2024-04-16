import React from 'react';

const Carusel = ({children, offset}) => {
    return (
        <div className='mContainer'>
        <div className="window">
            <div style={{
                transform: `translateX(${offset}px)`
            }} className="sliderMain">
                {children}
            </div>
        </div>
    </div>
    );
};

export default Carusel;