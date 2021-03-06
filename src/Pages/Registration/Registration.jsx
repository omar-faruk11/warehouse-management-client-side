import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SingInWithPopUp from '../../Components/SingInWithPopUp';
import auth from '../../firebase.config';

const Registration = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [notmatch, setNotmatch] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updeterror] = useUpdateProfile(auth);
    
    const handleCreateUserWithEailPass = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const displayName = event.target.name.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            updateProfile({displayName});
            toast.success('Send Email verification', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            const { data } = await axios.post('https://powerful-woodland-06362.herokuapp.com/login', { email });
            if (data) {
                localStorage.setItem('accessToken', data);
            }
        }
        else {
            setNotmatch('Password not Match')
        }

    };
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    return (
        <div className="max-w-screen-xl py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <form onSubmit={handleCreateUserWithEailPass} className="p-8 sm:mt-6 mb-0 space-y-4 rounded-2xl sm:shadow-2xl">
                    <p className="text-3xl font-medium">Register</p>
                    <div>
                        <label htmlFor="name" className="text-sm font-medium">Name</label>

                        <div className=" mt-1">
                            <input
                                type="text"
                                id="text"
                                name='name'
                                className="w-full p-3 pr-12 text-base border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Your Name"

                            />

                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>

                        <div className=" mt-1">
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="w-full p-3 pr-12 text-base border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter email"
                                required
                            />

                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium">Password</label>

                        <div className=" mt-1">
                            <input
                                type="password"
                                id="password"
                                name='password'
                                className="w-full p-3 pr-12 text-base border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter password"
                                required
                            />


                        </div>
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="text-sm font-medium">Confirm  Password</label>

                        <div className=" mt-1">
                            <input
                                type="password"
                                id="confirm-password"
                                name='confirmPassword'
                                className="w-full p-3 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Confirm  password"
                                required
                            />


                        </div>
                    </div>
                    {
                        notmatch ? <p className=' text-red-500'>{notmatch}</p> : ''
                    }
                    {
                        error ? <p>{error.message}</p> : ''
                    }

                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white  bg-rose-500 active:bg-rose-400 rounded-lg">
                        Register
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        Alrady heve an account?
                        <Link className='text-rose-500' to='/login'> LogIn</Link>
                    </p>
                    <SingInWithPopUp />
                </form>

            </div>
        </div>
    );
};

export default Registration;