import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Myitem = ({ myitem,myItems, setMyItems }) => {
    const {_id, name, picture, description, price, quantity, supplier } = myitem;
    const handleDeleteItem = (id) => {
        const realy = window.confirm('Are you sure?');
        if (realy) {
            (async () => {
                const { data } = await axios.delete(`https://powerful-woodland-06362.herokuapp.com/product/${id}`);
                if (data) {
                    toast.success('Item Deleted', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    const remaningProducts = myItems.filter(myproduct => myproduct._id !== id);
                    setMyItems(remaningProducts);
                }
            })();
        }
    }
    return (
        <div className=''>
            <dir className="grid grid-cols-5  rounded rounded-l-none shadow-md hover:shadow-2xl hover:border-l-2  border-rose-500 p-4 ">
                <div className="col-span-2">
                    <img className='w-full h-full' src={picture} alt="" />
                </div>
                <div className="col-span-3">
                    <div className="pl-4">
                    <h5 className="text-xl">
                        {name}
                    </h5>

                    <p className="mt-2 text-sm text-gray-600">
                        {description.slice(0, 150)}
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
                    <button className='bg-rose-500 active:bg-rose-400 px-2 py-1 rounded text-white mt-2 ' onClick={()=>handleDeleteItem(_id)}>Delete</button>
                    </div>
                </div>
            </dir>

        </div>
    );
};

export default Myitem;