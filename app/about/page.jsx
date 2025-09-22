import React from "react";
import {assets} from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import 'animate.css';
import styles from './about.modules.css';

const page = () => {
  return (
    <>
      <div className="flex flex-col my-10">
        <h1 className="text-3xl text-purple-800 text-center my-5">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8 max-w-full mx-auto">
          <div className="intro container-fluid font-lg text-lg text-gray-700 space-y-3">
            <p>
            At Light of Hope Foundation (LOH),
            we are dedicated to making a positive
            impact in our community through various initiatives and programs.
            Our mission is to empower individuals and create opportunities for
            growth and development.
          </p>
          <p>
            Founded in 2020, we have been actively involved in projects that
            focus on education, health, and social welfare. Our team is composed
            of passionate individuals who are committed to driving change and
            fostering a supportive environment for all.
          </p>
          <p>
            We believe in the power of collaboration and work closely with local
            partners, volunteers, and stakeholders to achieve our goals.
            Together, we can create a brighter future for everyone.
          </p>
          <p>
            Thank you for your interest in our organization. We invite you to
            explore our website to learn more about our programs, upcoming
            events, and ways you can get involved.
          </p>
          </div>

          <div>
            <Image
            src={assets.group}
            alt='group'
            className='w-full h-full rounded-lg animate__animated animate__zoomIn animate__slow	3s' />
          </div>
        </div>
        <div className="flex justify-center my-6">
          <Link href="/donate">
            <button className="button text-lg bg-purple-800 text-white px-8 py-3 rounded-lg animate__animated animate__rotateIn animate__slow	4s">
              Join Us
            </button>
          </Link>
        </div>

        <h3 className="text-center justify-center text-lg text-gray-700">You can reach us on our Social media platforms below</h3>
        <Icon.ArrowDown size={25} className="mx-auto my-3 items-center justify-center text-fuchsia-600" />
        <div className="flex items-center justify-center my-2">
            <Link href='https://www.facebook.com/LightOfHopeFoundationNG'>
            <Icon.FacebookLogo size={30} className="icon text-purple-800 mx-3 mb-3" />
            </Link>
             <Icon.WhatsappLogo size={30} className="icon text-purple-800 mx-3 mb-3" />
              <Icon.InstagramLogo size={30} className="icon text-purple-800 mx-3 mb-3" />
               <Icon.TwitterLogo size={30} className="icon text-purple-800 mx-3 mb-3" />
                <Icon.LinkedinLogo size={30} className="icon text-purple-800 mx-3 mb-3" />
        </div>
      </div>
    </>
  );
};

export default page;
//  bg-gradient-to-b from-purple-100 to-purple-200
