import React from 'react';

const Topsale = ({ topSale }) => {
    const { name, picture, description, price } = topSale;
    return (
        <div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-full">

                <img

                    className="object-cover w-full h-56 rounded-t-xl p-2"
                    src={picture}
                    alt=""
                />

                <div className="p-6">
                    <h5 className="text-xl">
                        {name}
                    </h5>

                    <p className="mt-2 text-sm text-gray-600">
                        {description.slice(0, 200)}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                        Price: ${price}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                        Sale : { price >= 25000? 30: 50} 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Topsale;