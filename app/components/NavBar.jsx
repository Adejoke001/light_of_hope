"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
import * as Icon from "@phosphor-icons/react/dist/ssr"
import React from "react";
import styles from './navbar.modules.css';


const page = () => {
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translate(16rem)";
  };

  return (
    <>
      <nav className="container relative flex items-center justify-between w-full sticky top-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 bg-white h-15 shadow-md">
        <Link href="/" className="logo">
          <Image
            src={assets.Logo}
            className="w-20 h-20 md:w-40 lg:w-50 cursor-pointer md:mr-14"
            alt="Logo"
          />
        </Link>
        <div className="nav-links flex items-center space-x-6">
          <ul className="nav hidden md:flex items-center gap-6 lg:gap-8 text-lg font-semibold rounded-full px-12 py-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/brief">Projects</Link>
            </li>
            <li>
              <Link href="/fundraising">Fundraising</Link>
            </li>
            <li>
              <Link href="/form">Contact</Link>
            </li>
            <li>
              <Link href="/donate">Donate</Link>
            </li>
          </ul>
          <button className="main bg-purple-800 text-white rounded hidden md:block md:border-1 lg:border-2 rounded-4 px-5.5 md:py-1 py-1.5">
            <Link href='/form'>Volunteer</Link>
          </button>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Icon.List className="text-3xl" weight="bold" />
          </button>
          
          {/*Sidebar*/}

          <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-6 pt-16 px-10 fixed -right-64 top-0 w-65 h-120 bg-white z-50'>
             <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Icon.XIcon className="text-2xl cursor-pointer" weight="bold" />
          </div>
            <li onClick={closeMenu}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/brief">Projects</Link>
            </li>
           
            <li onClick={closeMenu}>
              <Link href="/Fundraising">Fundraising</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/contact">Contact</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/donate">Donate</Link>
            </li> 

          </ul>
        </div>
      </nav>
    </>
  );
};

export default page;
