import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faSignOut, faXmark } from '@fortawesome/free-solid-svg-icons'
import CustomLink from '../Utility/CustomLink';
import { Link } from 'react-router-dom';
import auth from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Menubar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='w-full fixed z-50 top-0'>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-2xl  leading-relaxed inline-block mr-4 mt-1 md:mt-auto whitespace-nowrap uppercase text-white"
              to="/"
            >
              electronics Corner
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
              <li className="nav-item py-1 mt-2">
                <CustomLink className="mx-3  md:flex items-center text-base uppercase   leading-snug text-white hover:opacity-75" to="/" >
                  Home
                </CustomLink>
              </li>
              <li className="nav-item py-1 mt-2">
                <CustomLink className="mx-3  md:flex items-center text-base uppercase   leading-snug text-white hover:opacity-75" to="/blogs" >
                blogs
                </CustomLink>
              </li>
              {
                user && <>
                  <li className="nav-item py-1 mt-2">
                    <CustomLink className="mx-3  md:flex items-center text-base uppercase  leading-snug text-white hover:opacity-75" to="/manageitems" >
                    Manage Inventories
                    </CustomLink>
                  </li>
                  <li className="nav-item py-1 mt-2">
                    <CustomLink className="mx-3  md:flex items-center text-base uppercase  leading-snug text-white hover:opacity-75" to="/additem" >
                      Add Item
                    </CustomLink>
                  </li>
                  <li className="nav-item py-1 mt-2">
                    <CustomLink className="mx-3  md:flex items-center text-base uppercase  leading-snug text-white hover:opacity-75" to="/myitems" >
                      My items
                    </CustomLink>
                  </li>
                </>
              }
              <li className="nav-item  mt-2">
                {
                  user ? <>
                    <button onClick={() => signOut(auth)} className=' text-md uppercase text-white border hover:border-rose-600 duration-1000  hover:bg-rose-500  px-5 py-1 rounded-full '>
                      Log Out <FontAwesomeIcon icon={faSignOut} />
                    </button>
                  </> : <>
                    <Link to='/login'>
                      <button className=' text-md uppercase text-white border hover:border-rose-600 duration-1000 hover:bg-rose-500  px-5 py-1  rounded-full '>
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