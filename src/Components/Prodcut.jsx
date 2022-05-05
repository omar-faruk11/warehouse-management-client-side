import React from 'react';
import { useNavigate } from 'react-router-dom';

const Prodcut = ({ product }) => {
    const { _id, name, picture, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    
    return (
        <div className='relative border-[1px] border-gray-100 hover:shadow-2xl rounded-xl '>
            
            <img

                className="object-cover w-full h-56 rounded-t-xl"
                src={picture}
                alt=""
            />
            
            <div className="p-6 mb-10">
                <h5 className="text-xl">
                    {name}
                </h5>

                <p className="mt-2 text-sm text-gray-600">
                    {description.slice(0, 200)}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                    Supplier: {supplier}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                    Price: ${price}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                    Quantity: {quantity}
                </p>
                

            </div>
            <div onClick={() => navigate(`/inventory/${_id}`)} className=" absolute bottom-0  cursor-pointer py-3 w-full rounded-b-xl text-white bg-rose-500 focus:outline-none focus:ring">
                <div className="flex justify-center items-center">
                    <div className="text-md uppercase  font-medium">
                        stock update
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prodcut;