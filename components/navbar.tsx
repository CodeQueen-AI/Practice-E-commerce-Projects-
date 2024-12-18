import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavigationMenuDemo from '../components/navlinks';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#F7A6C9]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
              <GiHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/hero" className="text-[#BC5A94] hover:text-[#F35588]">Home</Link>
              </li>
              <li>
                <details>
                  <summary className="text-[#BC5A94] hover:text-[#F35588]">ShopHub</summary>
                  <ul className="p-2">
                    <li><Link href="/Eye Shade">Eye Shade</Link></li>
                    <li><Link href="/Nail Polish">Nail Polish</Link></li>
                    <li><Link href="/Lipstick">Lipstick</Link></li>
                    <li><Link href="/Watch">Watch</Link></li>
                    <li><Link href="/Face Makeup">Face Makeup</Link></li>
                    <li><Link href="/Accessories">Accessories</Link></li>
                    <li><Link href="/Perfume">Perfume</Link></li>
                    <li><Link href="/Accessories">/Jewelry</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/about" className="text-[#BC5A94] hover:text-[#F35588]">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#BC5A94] hover:text-[#F35588]">Contact</Link>
              </li>
            </ul>
          </div>
          <Image src='/logo.png' alt="logo" className="hidden lg:block ml-4" width={100} height={100} />
        </div>
        <div className="navbar-center">
          <Image src='/logo.png'alt="logo" className="block lg:hidden" width={100} height={100} />
          <div className="hidden lg:flex"><NavigationMenuDemo /></div>
        </div>
        <div className="navbar-end">
          <Link href={'/cart'}>
            <label tabIndex={0} className='cursor-pointer group'>
            <div tabIndex={0} role="button" className="pr-4 cursor-pointer group">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 group-hover:text-blue-700 duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm font-semibold indicator-item text-black group-hover:text-MyWhite group-hover:bg-myBlackPara">8</span>
              </div>
            </div>
            </label>
            </Link>
          </div>
        </div>
      </div>
    
  );
}

export default Navbar;
