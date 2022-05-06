import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { toast } from 'react-toastify';



const ManageItem = ({ product, products, setProducts }) => {
    const { _id, name, picture, description, price, quantity, supplier } = product;
    const navigate = useNavigate()

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
                    const remaningProducts = products.filter(fproduct => fproduct._id !== id);
                    setProducts(remaningProducts);
                }
            })();
        }
    }
    return (
        <>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th scope="row" className="md:px-6 py-4  text-gray-800 font-medium dark:text-white whitespace-nowrap">
                    <img className='w-10 h-10 rounded-full' src={picture} alt="" />
                </th>
                <td className="md:px-6 py-4">
                    {name}
                </td>
                <td className="md:px-6 py-4">
                    {supplier}
                </td>
                <td className="md:px-6 py-4">
                    {quantity}
                </td>
                <td className="md:pl-6 py-4">
                    {price}
                </td>
                <td className="md:pl-6 py-4">
                <button onClick={()=>navigate(`/inventory/${_id}`)}  className=' rounded border border-rose-500 px-2 py-1 hover:bg-rose-500 hover:text-white focus:right-1'>Stock Update</button>
                </td>
                <td className="md:px-2 py-4 text-right ">
                    <FontAwesomeIcon onClick={() => handleDeleteItem(_id)} className='w-6 h-6  cursor-pointer  text-red-600 active:bg-rose-300 p-2 rounded-full' icon={faTrashCan}></FontAwesomeIcon>
                </td>
            </tr>
        </>
    );
};

export default ManageItem;