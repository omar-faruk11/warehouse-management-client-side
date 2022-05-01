import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faSignOut, faXmark } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../Utility/CustomLink';
import { Link } from 'react-router-dom';
import auth from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut } from 'firebase/auth';


const Menubar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='sticky top-0 left-0 w-full'>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-base  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              slate Tailwind Starter Kit
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none mx-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {
                navbarOpen ? <FontAwesomeIcon className=' text-2xl ' icon={faXmark} /> : <FontAwesomeIcon className=' text-2xl ' icon={faBars} />
              }
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center " + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger" >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <CustomLink className="mx-3 py-2 flex items-center text-base uppercase   leading-snug text-white hover:opacity-75" to="/" >
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="mx-3 py-2 flex items-center text-base uppercase  leading-snug text-white hover:opacity-75" to="/manageitems" >
                  Manage Items
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="mx-3 py-2 flex items-center text-base uppercase  leading-snug text-white hover:opacity-75" to="/additem" >
                  Add Item
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="mx-3 py-2 flex items-center text-base uppercase  leading-snug text-white hover:opacity-75" to="/myitems" >
                  My items
                </CustomLink>
              </li>
              <li className="nav-item">
                {
                  user ? <>
                      <button onClick={()=> signOut(auth)} className='text-md uppercase text-white border border-white hover:bg-rose-500 duration-500 px-5 py-1 rounded-full '>
                        Log Out <FontAwesomeIcon icon={ faSignOut}/>
                      </button>
                  </> : <>
                    <Link to='/login'>
                      <button className='text-md uppercase text-white border border-white hover:bg-rose-500 duration-500 px-5 py-1 rounded-full '>
                        Log In
                      </button>
                    </Link>

                  </>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;