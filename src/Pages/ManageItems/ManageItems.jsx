import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageItem from '../../Components/ManageItem';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    const [webLoading, setWebLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://powerful-woodland-06362.herokuapp.com/products')
            setProducts(data)
            setWebLoading(false)
        })()
    }, []);
    if(webLoading){
        return <Loading/>
    }
    return (
        <>
        <h2 className="flex justify-center items-center text-3xl my-5 uppercase mt-20">Manage Inventories</h2>
            <div className=" overflow-x-auto shadow-md sm:rounded-lg  px-1 md:mx-24 ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-md text-gray-700 uppercase font-normal bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                quantity
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageItem key={product._id} product={product} setProducts={setProducts} products={products}></ManageItem>)
                        }
                    </tbody>
                </table>
            </div>
            <div onClick={() => navigate('/additem')} className='absolute right-4 md:right-20 mt-5 cursor-pointer'>
                <div className="relative mb-2 rounded-full inline-flex items-center px-8 py-3 overflow-hidden text-white bg-slate-500  group active:bg-slate-800 focus:outline-none focus:ring">
                    <span className="text-lg">
                        Add new item
                    </span>

                    <svg className="w-7 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>

                </div>
            </div>
        </>
    );
};

export default ManageItems;