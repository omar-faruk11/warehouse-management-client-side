import React,{useEffect, useState} from 'react';
import Prodcut from '../../Components/Prodcut';
const axios = require('axios');

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    (async() => {
      const {data} = await axios.get('https://powerful-woodland-06362.herokuapp.com/products',{limit:6})
      setProducts(data)
     })()
  },[])
  
  return (
    <>
      <div className="container mx-auto">
      {/* <div className="grid grid-cols-2 md:grid-cols-5">
        <div className="col-span-3">

        </div>
        <div className="col-span-2">
          <img className=' w-full rounded-lg' src="https://i.ibb.co/vxXBRBL/banner.jpg" alt="" />
        </div>
      </div> */}

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 md:mx-14">
          {
            products.map(product => <Prodcut key={product._id} product={product}></Prodcut>)
          }
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;