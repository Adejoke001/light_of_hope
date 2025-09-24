"use client";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import styles from './fundraising.modules.css';

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center justify-center text-purple-700 mt-10">
          Our Mission
        </h1>
        <h5 className="text-md text-center justify-center mt-4 mx-10 text-gray-800">
          To provide hope, opportunity, and essential care for less privileged
          children and orphans,
          <br />
          empowering them to build a brighter future. We believe every child
          deserves <br />a future filled with promise.
        </h5>
      </div>

      <div className="mt-10 justify-center">
        <h1 className="text-3xl text-center justify-center text-purple-700">
          Our Vision
        </h1>
        <h5 className="text-md text-center justify-center mt-4 mx-10 text-gray-800 mb-10">
          A world where every child, regardless of their circumstances, has the
          opportunity to thrive,
          <br /> learn, and grow in a nurturing environment that fosters their
          infinite
          <br /> potential and well-being.
        </h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 my-15">
        <div className="fund bg-fuchsia-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center">
          <Image
            src={assets.Health1}
            alt="Health"
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            Health and Wellness
          </h3>
          <p className="text-gray-700 text-center text-[15px]">
            Providing access to healthcare, nutrition, and emotional support to
            ensure the well-being of children in need.
          </p>
          <button className="text-white bg-purple-600 p-2.5 mt-4 rounded-full">
            <Link href="/donate">Donate Now</Link>
          </button>
        </div>

        <div className="fund bg-fuchsia-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center">
          <Image
            src={assets.School1}
            alt="Education"
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            Education and Learning
          </h3>
          <p className="text-gray-700 text-center text-[15px]">
            Supporting educational initiatives, scholarships, and learning
            resources to empower children through knowledge.
          </p>
          <button className="btn text-white bg-purple-600 p-2.5 mt-4 rounded-full">
            <Link href="/donate">Donate Now</Link>
          </button>
        </div>

        <div className="fund bg-fuchsia-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center">
          <Image
            src={assets.second}
            alt="Community"
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            Community and Support
          </h3>
          <p className="text-gray-700 text-center text-[15px]">
            Building strong communities through mentorship, life skills
            training, and social activities to foster a sense of belonging.
          </p>
          <button className="btn text-white bg-purple-600 p-2.5 mt-4 rounded-full">
            <Link href="/donate">Donate Now</Link>
          </button>
        </div>

        <div className="fund bg-fuchsia-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center">
          <Image
            src={assets.scholar}
            alt="Health"
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            Scholarship Schemes
          </h3>
          <p className="text-gray-700 text-center text-[15px]">
            Offering scholarships to deserving children, enabling them to pursue
            their educational dreams without financial barriers.
          </p>
          <button className="btn text-white bg-purple-600 p-2.5 mt-4 rounded-full">
            <Link href="/donate">Donate Now</Link>
          </button>
        </div>

        <div className="fund bg-fuchsia-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center">
          <Image
            src={assets.outreach}
            alt="Health"
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            Medical Outreach
          </h3>
          <p className="text-gray-700 text-center text-[15px]">
            Organizing medical camps and health check-ups to provide essential
            healthcare services to underserved children and communities.
          </p>
          <button className="btn text-white bg-purple-600 p-2.5 mt-4 rounded-full">
            <Link href="/donate">Donate Now</Link>
          </button>
        </div>

        <div className="fund bg-fuchsia-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center">
          <Image
            src={assets.Health1}
            alt="Health"
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            Empowerment and Awareness
          </h3>
          <p className="text-gray-700 text-center text-[15px]">
            To empower vulnerable children with opportunity and voice, while
            mobilizing awareness and action to create a world where they can
            thrive.
          </p>
          <button className="btn text-white bg-purple-600 p-2.5 mt-4 rounded-full">
            <Link href="/donate">Donate Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
