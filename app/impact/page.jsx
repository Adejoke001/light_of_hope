"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import styles from "./impact.modules.css";
import 'animate.css';



const page = () => {
  return (
    <div className="bg-purple-100 impact">
      <h1 className="text-3xl font bold text-center justify-center my-5 pt-20">
        Choose Us For Impactful Change <br />
        In Global Communities.
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-center justify-center py-10 px-4 max-w-6xl cursor-pointer">
        <div className="animate__animated animate__zoomIn animate__slow	2s bg-white p-5 imp">
          <Icon.Money
            size={40}
            className="icon flex text-start justify-start pb-2"
          />
          <h2 className="text-xl font-medium pb-2">Transparent Operations</h2>
          <p className="text-sm">
            We believe trust is built on transparency. That's why we openly
            share our finances, outcomes, and strategies. See exactly how your
            support creates change.
          </p>
        </div>

        <div className="animate__animated animate__zoomIn animate__slow	2s bg-white p-5 imp">
          <Icon.UsersThree
            size={40}
            className="icon flex text-start justify-start pb-2"
          />
          <h2 className="text-xl font-medium pb-2">Community Partnerships</h2>
          <p className="text-sm">
            Our work is powered by partnerships. We unite with community groups
            to ensure our solutions are local, effective, and sustainable. True
            change is a collective effort.
          </p>
        </div>

        <div className="animate__animated animate__zoomIn animate__slow	2s bg-white p-5 imp">
          <Icon.WebcamSlash
            size={40}
            className="icon flex text-start justify-start pb-2"
          />
          <h2 className="text-xl font-medium pb-2">Accountabilty & Reporting</h2>
          <p className="text-sm">
            We believe trust is built on transparency. Our rigorous reporting
            and responsible stewardship of resources ensure every contribution
            delivers measurable impact.
          </p>
        </div>

        <div className="animate__animated animate__slideInDown animate__slow	3s bg-white p-5 imp">
          <Icon.HourglassHigh
            size={40}
            className="icon flex text-start justify-start pb-2"
          />
          <h2 className="text-xl font-medium pb-2">Empowering Futures</h2>
          <p className="text-sm">
            Our mission goes beyond immediate aid; we are invested in empowering
            futures. We provide the tools, education, and sustainable resources
            communities need to build resilience, seize opportunities, and shape
            their own destinies.
          </p>
        </div>

        <div className="animate__animated animate__slideInDown animate__slow	3s bg-white p-5 imp">
          <Icon.Globe
            size={40}
            className="icon flex text-start justify-start pb-2"
          />
          <h2 className="text-xl font-medium pb-2">Global Reach</h2>
          <p className="text-sm">
            Our impact knows no borders. While our roots are local, our
            partnerships and programs extend across the globe, allowing us to
            address universal challenges with culturally-aware, scalable
            solutions. Local action, global vision.
          </p>
        </div>

        <div className="animate__animated animate__slideInDown animate__slow	3s bg-white p-5 imp">
          <Icon.Heart
            size={40}
            className="icon flex text-start justify-start pb-2"
          />
          <h2 className="text-xl font-medium pb-2">Volunteer Opportunities</h2>
          <p className="text-sm">
            Your time and skills can drive real change. Explore our diverse
            volunteer opportunities and join a passionate community dedicated to
            making a tangible difference on the front lines of our mission. 
            Our volunteers are the heart of our operation. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
