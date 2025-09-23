"use client";
import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { assets } from "@/assets/assets";
import styles from "./menu.modules.css";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const page = () => {

  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');

  const quotes = [
    "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed. - Carl Jung",
    "The greatest weapon against stress is our ability to choose one thought over another. - William James",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
  "No one has ever become poor by giving. - Anne Frank",
  "We make a living by what we get, but we make a life by what we give. - Winston Churchill",
  "Small acts, when multiplied by millions of people, can transform the world. - Howard Zinn",
  "The meaning of life is to find your gift. The purpose of life is to give it away. - Pablo Picasso",
  "Help others without any reason and give without the expectation of receiving anything in return. - Roy T. Bennett",
  "To the world you may be one person, but to one person you may be the world. - Dr. Seuss",
  "Service to others is the rent you pay for your room here on Earth. - Muhammad Ali",
  "When we give cheerfully and accept gratefully, everyone is blessed. - Maya Angelou",
  "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees. - Amelia Earhart"
  ];

  const generateQuote = () => {
    // Random quote selection
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    setCurrentQuote(newQuote);
    setShowQuote(true);
  };

  const closeQuote = () => {
    setShowQuote(false);
  };

  return (
    <>
      <div className="mt-3 relative">
        <Image
          src={assets.Menu}
          alt="About Us"
          className="w-full h-[450px] md:h-[550px] lg:h-[550px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center justify-center text-white w-full max-w-md md:max-w-xl lg:max-w-2xl px-4">
          <h5 className="text-lg font-medium pb-4">
            Give a helping hand for a child
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Lend A Helping Hand To Those Who Need It
          </h1>
          <div className="flex justify-center items-center mt-6 gap-4 pb-12 lg:pb-0">
            <button className=" bg-purple-800 text-white font-semibold rounded-lg px-6 py-3 donate-btn one">
              <a href="donate">Donate Now</a>
            </button>
             <button 
        className="bg-pink-500 text-white font-semibold rounded-lg px-6 py-3 donate-btn two"
        onClick={generateQuote}
      >
        Get a quote
      </button>

      {/* Pop-up Modal */}
      {showQuote && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Quote</h3>
              <p className="text-gray-600 italic mb-6">{currentQuote}</p>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={generateQuote}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  New Quote
                </button>
                <button
                  onClick={closeQuote}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center items-center -mt-8 md:-mt-12 relative z-10 px-4 cursor-pointer">
          <div className="bg-fuchsia-500 p-6 text-white text-center w-full md:w-auto md:min-w-[250px] rounded-lg md:rounded-r-none stats-box">
            <h1 className="text-xl font-bold">Total Fund Needed</h1>
            <p className="text-2xl mt-2">$25,000</p>
          </div>
          <div className="bg-purple-900 p-6 text-white text-center w-full md:w-auto md:min-w-[250px] rounded-lg md:rounded-l-none mt-4 md:mt-0 stats-box">
            <h1 className="text-xl font-bold">Total Fund Raised</h1>
            <p className="text-2xl mt-2">$18,500</p>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="my-grid relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-full max-w-6xl px-4 py-[5rem]">
        <div className="col-span-1">
          <div className="flex flex-col pt-4">
            <Image
              src={assets.first}
              alt="Image 1"
              className="stress w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg mb-3"
            />
            <Image
              src={assets.second}
              alt="Image 2"
              className="stress w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Column (tall image) */}
        <div className="col-span-1 flex">
          <Image
            src={assets.third}
            alt="Image 3"
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-lg"
          />
        </div>

        {/* Third + Fourth Column (Text spans 2 cols) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-center text-center px-4 w-full">
            <h1 className="text-left text-3xl font-semibold text-gray-800">
              Welcome To{" "}
              <span className="text-purple-800"> Light Of Hope </span>Foundation{" "}
            </h1>
          </div>
          <p className="flex min-w-sm items-center justify-center pl-3 text-left text-xl mt-4 text-gray-600">
            Empowering communities with hope and opportunity through
            compassionate action and sustainable support.
          </p>

          <div className="flex flex-row col-span-1 md:col-span-1 lg:col-span-1 mt-6">
            <div className="flex flex-col-1 items-start mb-4">
              <ul className=" text-left text-gray-700">
               
                <li className="flex-col-1">
                  <Icon.Play className="absolute text-lg text-purple-800 flex mr-8 mt-0.5" />
                  <h2 className="flex ml-8">Become a Volunteer</h2>
                  <p className="ml-8 mb-2">
                    Join our mission and make a meaningful difference by
                    becoming a volunteer today.
                  </p>
                </li>

                <li className="flex-col-1">
                  <Icon.Play className="absolute text-lg text-purple-800 flex mr-8 mt-0.5" />
                  <h2 className="flex ml-8">Help The People</h2>
                  <p className="ml-8 mb-2">
                    Join our mission and make a meaningful difference by
                    becoming a volunteer today.
                  </p>
                </li>

                <button className="greater ml-8 bg-purple-600 py-2 px-3 text-white flex items-center gap-2 cursor-pointer rounded">
                  <a href="" target="_blank" className="flex items-center">
                    About Us
                    <span className="flex items-center ml-1">
                      <Icon.GreaterThanIcon className="w-4 text-white text-medium" />
                      <Icon.GreaterThanIcon className="w-4 text-white -ml-2 font-medium" />
                    </span>
                  </a>
                </button>
              </ul>
            </div>
          </div>

          <div className="card mt-4 col-span-1 md:col-span-1 lg:col-span-1 p-6 bg-gray-100 rounded-lg">
            <ul className="list-disc list-inside text-left text-gray-700">
              <li className="mb-2">
                Providing essential resources and support to those in need.
              </li>
              <li className="mb-2">
                Empowering individuals and communities to create positive
                change.
              </li>
              <li className="mb-2">
                Fostering hope, resilience, and opportunity for a brighter
                future.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
