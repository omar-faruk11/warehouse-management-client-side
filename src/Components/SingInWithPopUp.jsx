import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.config';

const SingInWithPopUp = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [currentuser, loadinG, erroR] = useAuthState(auth);
    const email = currentuser?.email; 
    useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
        }
    },[user]);
    if(currentuser){
        (async () => {
            const { data } = await axios.post('https://powerful-woodland-06362.herokuapp.com/login', { email });
            if (data) {
                localStorage.setItem('accessToken', data)
                navigate(from, { replace: true });
            }

        })();
    }
    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="h-[1px] bg-black w-10/12"></div>
                <div className=' mx-3'> Or</div>
                <div className="h-[1px] bg-black w-10/12"></div>
            </div>
            <div  onClick={()=> signInWithGoogle()} className=" bg-gray-200 active:bg-white w-full px-5 py-3 text-lg border rounded-lg flex justify-center items-center cursor-pointer">
                <img src="https://img.icons8.com/color/25/000000/google-logo.png" alt="google logo" />
                <div className='mx-2'>Sign in with Google</div>
            </div>
        </>
    );
};

export default SingInWithPopUp;