import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Myitem from '../../Components/Myitem';
import auth from '../../firebase.config';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const email = user.email;
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://powerful-woodland-06362.herokuapp.com/myitems?email=${email}`);
            setMyItems(data);
            console.log(data);
        })()
    }, [email])
    return (
        <>
            <h2 className='uppercase flex justify-center text-3xl my-5'>My Items</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    {
                        myItems.map(myitem => <Myitem key={myitem._id} myitem={myitem} myItems={myItems} setMyItems={setMyItems}></Myitem>)
                    }
                </div>
            </div>
        </>
    );
};

export default MyItems;