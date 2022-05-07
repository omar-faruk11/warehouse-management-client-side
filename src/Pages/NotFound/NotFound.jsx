import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className=' flex justify-center items-center text-justify flex-col h-screen'>
                <h2 className="text-9xl font-extrabold ">
                    404
                </h2>
                <h3 className="text-3xl text-rose-500">Page Not Found</h3>
                <p className="text-gray-500 text-center">We're sorry, the page you were looking for isn't found here. The link you followed may <br /> either be broken or no longer exists. Please try again, or take a look at our.</p>
               <button onClick={()=> navigate('/')} className=' mt-2 px-2 py-1 bg-gray-50'> Go to Home  <FontAwesomeIcon  icon={faArrowRightLong}/></button>
            </div>
        </div>
    );
};

export default NotFound;