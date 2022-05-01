import React from 'react';

const Prodcut = ({ product }) => {
    const { name, picture, description, price, quantity, supplier } = product;
    return (
        <div className='border'>
            <img
                className="object-cover w-full h-56 "
                src={picture}
                alt=""
            />

            <div className="p-6">
                <h5 className="text-xl">
                    {name}
                </h5>

                <p className="mt-2 text-sm text-gray-600">
                    {description.slice(0, 250)}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                    Price: ${price}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                    Quantity: {quantity}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                    Supplier: {supplier}
                </p>

            </div>
            <div className="py-3 w-full text-white bg-rose-500 focus:outline-none focus:ring" href="/download">
                <div className="flex justify-center items-center">
                    <div className="text-md uppercase  font-medium">
                        stock update
                    </div>

                    <svg className="w-5 h-5 ml-2 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Prodcut;