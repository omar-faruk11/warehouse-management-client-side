import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.config';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = (formdata,e) => {
        console.log(formdata);
        toast.success('Item Added!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress:''
            });
            reset();
        (async () => {
            const { data } = await axios.post('https://powerful-woodland-06362.herokuapp.com/product', (formdata));
            
        })();
    };
    return (
        <>
            <div className='uppercase flex justify-center text-3xl mt-20 mb-5'>Add New Item</div>
            <form className='   md:w-3/6 mx-4 md:mx-auto' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded my-2 " placeholder='Product Name'{...register("name", { required: true })} />
                <textarea className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded my-2" placeholder='Product Description' {...register("description", { required: true })} />
                <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded my-2" placeholder='Supplier Name'{...register("supplier", { required: true })} />
                <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded my-2" min={1} type='number' placeholder='Price'{...register("price", { required: true })} />
                <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded my-2" min={1} type='number' placeholder='Quantity'{...register("quantity", { required: true })} />
                <input className="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded my-2" placeholder='Picture url'{...register("picture", { required: true })} />
                <input className=" hidden" defaultValue={user.email}  {...register("email", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="block w-full cursor-pointer active:bg-rose-500 px-5 py-3 text-sm font-medium text-white bg-rose-600 rounded-mg text-xl" type="submit" value='Add item'/>
            </form>

        </>
    );
};

export default AddItem;