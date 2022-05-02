import React, { useEffect, useState } from 'react';
import Prodcut from '../../Components/Prodcut';
const axios = require('axios');

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://powerful-woodland-06362.herokuapp.com/products')
      setProducts(data)
    })()
  }, [])

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
              products.slice(0, 6).map(product => <Prodcut key={product._id} product={product}></Prodcut>)
            }
          </div>
        </div>
      </div>
      <div className='absolute right-20 mt-5 cursor-pointer'>
        <div class="relative rounded-full inline-flex items-center px-8 py-3 overflow-hidden text-white bg-rose-600  group active:bg-rose-500 focus:outline-none focus:ring">
          <span class="text-lg">
            Manage Inventories
          </span>

          <svg class="w-7 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>

        </div>
      </div>
    </>
  );
};

export default Home;