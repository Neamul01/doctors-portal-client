import React from 'react';

const CardInfo = ({ img, bg, title, text }) => {
    return (
        <div className={`card lg:card-side shadow-xl px-4 py-2 ${bg}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white text-left">
                <h2 className="card-title mb-3">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default CardInfo;