import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id} = useParams();
    const [product, setproduct] = useState([]);
    const {_id, name, picture, description, price, quantity, supplier} = product;
    useEffect(() =>{
        (async() =>{
            const {data} =await axios.get(`https://powerful-woodland-06362.herokuapp.com/products/${id}`)
            setproduct(data)
            
        })();
    },[id])
    
    return (
        <div>
            
        </div>
    );
};

export default Inventory;