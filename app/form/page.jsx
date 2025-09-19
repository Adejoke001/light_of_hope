"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import styles from "./form.modules.css";
import * as Icon from "@phosphor-icons/react/dist/ssr";
// import { Lottie } from '@lordicon/react';

const page = () => {
  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto mt-20 mb-15">
        <div className="form-container h-[500px] md:h-[600px] relative">
          <div className="form-image relative h-full w-full">
            <Image
              src={assets.first}
              alt="Form Image"
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 flex justify-end items-center p-6">
              <div className="form-content bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md ml-auto">
                <h1 className="form-title text-2xl md:text-3xl font-bold text-white mb-3">
                  Empowering Communities Through Donations
                </h1>
                <p className="form-description text-white mb-6">
                  Your support can change lives. Fill out the form below to get
                  involved.
                </p>
                <form className="form" action="#">
                  <div className="form-group mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-1"
                    >

                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 text-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      required
                    />
                  </div>
                  <div className="form-group mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      required
                    ></textarea>
                  </div>
                  <button className="greater ml-8 bg-purple-600 py-2 px-3 text-white flex items-center gap-2 cursor-pointer rounded">
                                    <a href="" target="_blank" className="flex items-center">
                                      Send Message
                                      <span className="flex items-center ml-1">
                                        <Icon.GreaterThanIcon className="w-3 text-white text-medium" />
                                        <Icon.GreaterThanIcon className="w-3 text-white -ml-2 font-medium" />
                                      </span>
                                    </a>
                                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
