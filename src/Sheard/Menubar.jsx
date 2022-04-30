import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import ButtonContainer from '../Components/ButtonContainer';
import CustomLink from '../Utility/CustomLink';
import { Link } from 'react-router-dom';

const Menubar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full'>
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
                navbarOpen?<FontAwesomeIcon className=' text-2xl ' icon={faXmark}/> : <FontAwesomeIcon className=' text-2xl ' icon={faBars}/>
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
                <CustomLink className="mx-3 py-2 flex items-center text-base uppercase  leading-snug text-white hover:opacity-75"to="/additem" >
                Add Item
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="mx-3 py-2 flex items-center text-base uppercase  leading-snug text-white hover:opacity-75"to="/myitems" >
                My items
                </CustomLink>
              </li>
              <li className="nav-item">
                <Link to='/login'>
                <ButtonContainer>log in</ButtonContainer>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;