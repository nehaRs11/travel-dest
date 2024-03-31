import React from 'react';

const Card = ({ count, title }: any) => {
    return (
        <div className="w-60 border-2 p-3 ml-5 mr-5  rounded-xl">
            <div>
                <h2 className={`text-3xl text-center text-orange-500 font-bold`}>{count}</h2>
                <p className="card-description p-2 text-center">{title}</p>
            </div>
        </div>
    );
};

export default Card;
