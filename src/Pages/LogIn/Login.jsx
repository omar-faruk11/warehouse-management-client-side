import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import SingInWithPopUp from '../../Components/SingInWithPopUp';
import auth from '../../firebase.config';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const [currentuser, loadinG, erroR] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";

    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSignInWithEailPass = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        (async () => {
            const { data } = await axios.post('https://powerful-woodland-06362.herokuapp.com/login', { email });
            if (data) {
                localStorage.setItem('accessToken', data)
                navigate(from, { replace: true });
            }

        })();
    };
    
    useEffect(()=>{
        if(currentuser){
            navigate(from, { replace: true });
    
        }
    },[currentuser])
    if (loading || loadinG) {
        return <Loading/>
    };
    


    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <form onSubmit={handleSignInWithEailPass} className="p-8 mt-6 mb-0 space-y-4 rounded-2xl shadow-2xl">
                    <p className="text-3xl font-medium">Login</p>

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

                        <div className=" my-1">
                            <input
                                type="password"
                                id="password"
                                name='password'
                                className="w-full p-3 pr-12 text-base border border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter password"
                                required
                            />


                        </div>
                        <Link className='text-rose-500 ' to='/forgot-password'>Forgot Password?</Link>
                    </div>
                    {
                        error ? <p>{error.message}</p> : ''
                    }
                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-rose-500 active:bg-rose-400 rounded-lg">
                        Log in
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        No account?
                        <Link className='text-rose-500' to='/registration'> Register</Link>
                    </p>
                    <SingInWithPopUp />
                </form>
            </div>
        </div>
    );
};

export default Login;