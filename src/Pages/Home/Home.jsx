import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from '../../Components/Category';
import Loading from '../../Components/Loading';
import Prodcut from '../../Components/Prodcut';
import Topsale from '../../Components/Topsale';
import Footer from '../../Sheard/Footer';
const axios = require('axios');

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [webLoading, setWebLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://powerful-woodland-06362.herokuapp.com/products');
      setProducts(data);
      console.log(data);
      setWebLoading(false);
    })();
    (async () => {
      const { data } = await axios.get('https://powerful-woodland-06362.herokuapp.com/categorys');
      setCategories(data);
      console.log(data);
    })()
  }, []);
  if (webLoading) {
    return <Loading />
  };

  const topSalesProduct = [...products].sort(()=>0.5 - Math.random());
  const topSales = topSalesProduct.slice(0,3);
console.log(topSales);
  
  return (
    <>
      <div>
        <div className="relative bg-black">
          <img
            className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100 "
            src="http://enthavende.com/wp-content/uploads/2020/05/electronics.jpg"
            alt=''
          />

          <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-black sm:to-transparent"></div>

          <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div className="max-w-xl text-center sm:text-left md:ml-14">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white uppercase">
                electronics
                <strong className="font-extrabold text-rose-500 sm:block uppercase ">
                  warehouse
                </strong>
              </h1>

              <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white">
                The best Electronics warehouse. There are many product of our warehouse. Now you can manage product , add product, and delete product.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 text-center">
                <div className="block w-full px-12 py-3 text-sm font-medium cursor-pointer text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring">
                  Get Started
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* categories section */}
        <div>
          <div className=' uppercase flex justify-center text-3xl my-8 '>categories</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-9 mx-2 md:mx-14">
            {
              categories.slice(0, 4).map(category => <Category key={category._id} category={category}></Category>)
            }

          </div>
        </div>
        {/* Top sale  */}
        <div className=' bg-gray-200 p-2 md:p-6 mt-8 '>
        <div className=' uppercase flex justify-center text-3xl mb-8 '>Top sales</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  md:mx-14 ">
            {
              topSales?.map(topSale => <Topsale key={topSale._id} topSale={topSale}/>)
            }
          </div>
        </div>
        {/* inventory items  */}
        <div>
          <div className=' uppercase flex justify-center text-3xl my-8 '>inventory items</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 md:mx-14 ">
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
      <Footer />
    </>
  );
};

export default Home;

/* 
 */