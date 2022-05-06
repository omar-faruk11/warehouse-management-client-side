import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import Prodcut from '../../Components/Prodcut';
const axios = require('axios');

const Home = () => {
  const [products, setProducts] = useState([]);
  const [webLoading, setWebLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://powerful-woodland-06362.herokuapp.com/products')
      setProducts(data)
      setWebLoading(false)
    })()
  }, []);
  if(webLoading){
    return <Loading/>
  }

  return (
    <>
      <div className="">
        {/* <div className="grid grid-cols-2 md:grid-cols-5">
        <div className="col-span-3">

        </div>
        <div className="col-span-2">
          <img className=' w-full rounded-lg' src="https://i.ibb.co/vxXBRBL/banner.jpg" alt="" />
        </div>
      </div> */}
        <div className="relative bg-black">
          <img
            className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
            src=" https://hosfeltelectronics.com/wp-content/uploads/2021/05/consumer-electronics-1.jpg"
            alt=''
          />

          <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-black sm:to-transparent"></div>

          <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div className="max-w-xl text-center sm:text-left ml-14">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                Let us find your
                <strong className="font-extrabold text-rose-600 sm:block">
                  Forever Home.
                </strong>
              </h1>

              <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="flex flex-wrap gap-4 mt-8 text-center">
                <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
                  Get Started
                </a>

                <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className=' uppercase flex justify-center text-3xl my-5 '>inventory items</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 md:mx-14">
            {
              products.slice(0, 6).map(product => <Prodcut key={product._id} product={product}></Prodcut>)
            }
          </div>
        </div>
      </div>
      <div onClick={() => navigate('/manageitems')} className='absolute right-4 md:right-20 mt-5 cursor-pointer'>
        <div className="relative rounded-full inline-flex items-center px-8 py-3 overflow-hidden text-white bg-rose-600  group active:bg-rose-500 focus:outline-none focus:ring">
          <span className="text-lg">
            Manage Inventories
          </span>

          <svg className="w-7 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>

        </div>
      </div>
    </>
  );
};

export default Home;