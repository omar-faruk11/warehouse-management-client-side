import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const { name, picture, description, price, quantity, supplier } = product;
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://powerful-woodland-06362.herokuapp.com/products/${id}`)
            setproduct(data)

        })();
    }, [id]);
    const handledelivered = () => {

        if (quantity) {
            const { quantity, ...rest } = product;
            const newQuantity = quantity - 1;
            const newProduct = { quantity: newQuantity, ...rest };
            (async () => {
                await axios.put(`https://powerful-woodland-06362.herokuapp.com/product/${id}`, { newQuantity })
                setproduct(newProduct)
            })();
        }
    }
    const handleRestock = (event) => {
        const productQuantity = parseInt(event.target.number.value);
        event.preventDefault();
        if (productQuantity) {
            const { quantity, ...rest } = product;
            const newQuantity = quantity + productQuantity;
            const newProduct = { quantity: newQuantity, ...rest };
            (async () => {
                await axios.put(`https://powerful-woodland-06362.herokuapp.com/product/${id}`, { newQuantity })
                setproduct(newProduct)
                event.target.reset()
            })()
        }

    };

    return (
        <>
            <div className='container mx-auto mt-6'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-full md:w-11/12 mx-auto hover:shadow-lg p-6 border-[1px] border-gray-200">
                    <div className="md:col-span-2">
                        <img className='w-full h-full' src={picture} alt="" />
                    </div>
                    <div className="md:col-span-3 mx-5 md:mx-0">
                        <h2 className=' text-2xl'>{name}</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            {description}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            Supplier: {supplier}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            Price: $ {price}
                        </p>
                        {
                            quantity ? <>
                                <p className="mt-2 text-sm text-gray-800">
                                    Quantity: {quantity}
                                </p>
                            </> : <p className="mt-2 text-sm text-gray-800" >Stock Out</p>
                        }
                        <button onClick={handledelivered} className=' px-5 py-1 text-white bg-rose-500 mt-3 group active:bg-rose-500 focus:outline-none focus:ring disabled:bg-gray-300 rounded-sm' disabled={!quantity}>
                            Delivered
                        </button>
                        <p className='mt-5 uppercase text-lg mb-3'> restock the items:</p>
                        <form onSubmit={handleRestock} >
                            <input className=' bg-gray-200 w-24 pl-7' type="number" min={1} name="number" id="number" />
                            <input className=' bg-rose-500 px-3 ml-1 text-white group active:bg-rose-500 focus:outline-none focus:ring cursor-pointer' type="submit" value="Restock" />
                        </form>
                    </div>
                </div>

            </div>

            <div className='absolute right-20 mt-5 cursor-pointer'>
                <div class="relative rounded-full inline-flex items-center px-8 py-3 overflow-hidden text-white bg-rose-600  group active:bg-rose-500 focus:outline-none focus:ring">
                    <span class="text-lg">
                    Manage Inventories
                    </span>

                    <svg class="w-7 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>

                </div>
            </div>
        </>
    );
};

export default Inventory;