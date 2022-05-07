import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Myitem from '../../Components/Myitem';
import auth from '../../firebase.config';
import { signOut } from 'firebase/auth';
import Loading from '../../Components/Loading';


const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [webLoading, setWebLoading] = useState(true)
    const [user, loading, error] = useAuthState(auth);
    const email = user.email;
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            try{
                const {data} = await axios.get(`https://powerful-woodland-06362.herokuapp.com/myitems?email=${email}`,{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
                setWebLoading(false)
            }catch(error){
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            } 
        })();
    }, [email]);
    if(webLoading){
        return <Loading/>
    }
    
    return (
        <>
            <h2 className='uppercase flex justify-center text-3xl mb-5 mt-20'>My Items</h2>
            {
                myItems.length === 0 && <h2 className=' text-2xl text-gray-400 ml-10'>No Item Found</h2>
            }
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    {
                        myItems?.map(myitem => <Myitem key={myitem._id} myitem={myitem} myItems={myItems} setMyItems={setMyItems}></Myitem>)
                    }
                </div>
            </div>
        </>
    );
};

export default MyItems;