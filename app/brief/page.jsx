"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  // State for each donation card's fundraising progress
  const [donations, setDonations] = useState({
    education: {
      raised: 12500,
      goal: 50000,
    },
    healthcare: {
      raised: 30000,
      goal: 75000,
    },
    disaster: {
      raised: 42000,
      goal: 100000,
    },
  });

  // Function to handle donations (would connect to the backend)
  const handleDonate = (category, amount) => {
    setDonations((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        raised: prev[category].raised + amount,
      },
    }));
  };

  return (
    <>
      <div className="relative mt-12 mb-12 h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-[400px]">
          <Image
            src={assets.Bg}
            alt="background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/70 to-gray-900/80"></div>
        </div>

        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center py-10 px-4 max-w-6xl cursor-pointer z-10">
          <div className="p-4 rounded-lg shadow-md items-center justify-center backdrop-blur-sm bg-white/10">
            <div className="circle-border border-2 border-white/30 flex items-center justify-center rounded-full mx-auto mb-4 w-16 h-16 p-3">
              <Link href="#">
                <Icon.HandHeart className="text-white w-6 h-6" />
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-center text-white">400+</h1>
            <p className="text-white text-sm font-medium text-center">
              Team Member
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md items-center justify-center backdrop-blur-sm bg-white/10">
            <div className="circle-border border-2 border-white/30 flex items-center justify-center rounded-full mx-auto mb-4 w-16 h-16 p-3">
              <Link href="#">
                <Icon.HandsClapping className="text-white w-6 h-6 " />
              </Link>
            </div>
            <h1 className="text-2xl font-bold items-center text-center justify-center text-white">
              8k+
            </h1>
            <p className="text-white text-sm font-medium items-center text-center justify-center">
              Client Review
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md items-center justify-center backdrop-blur-sm bg-white/10">
            <div className="circle-border border-2 border-white/30 flex items-center justify-center rounded-full mx-auto mb-4 w-16 h-16 p-3">
              <Link href="#">
                <Icon.Bell className="text-white w-6 h-6 " />
              </Link>
            </div>
            <h1 className="text-2xl font-bold items-center text-center justify-center text-white">
              1k+
            </h1>
            <p className="text-white text-sm font-medium items-center text-center justify-center">
              Complete Project
            </p>
          </div>

          <div className="p-4 rounded-lg shadow-md items-center justify-center bg-white/10">
            <div className="circle-border border-2 border-white/30 flex items-center justify-center rounded-full mx-auto mb-4 w-16 h-16 p-3">
              <Link href="#">
                <Icon.HandPalm className="text-white w-6 h-6" />
              </Link>
            </div>
            <h1 className="text-2xl font-bold items-center text-center justify-center text-white">
              20+
            </h1>
            <p className="text-white text-sm font-medium items-center text-center justify-center">
              Winning Award
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center justify-center">
          Empowering Communities Through Donations
        </h1>
        <p className="text-center justify-center text-medium text-gray-800 mt-2 mb-8">
          Your generosity can transform lives. Join us in making a difference
          today.
        </p>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-center justify-center py-10 px-4 max-w-6xl cursor-pointer z-10">
          {/* Education Card */}
          <div className="rounded-lg shadow-md backdrop-blur-sm bg-white/10 relative">
            <Image
              src={assets.School3}
              alt="donation1"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div className="p-3">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Education for All
              </h1>
              <p className="text-gray-600 text-sm mb-4">
                Support our initiatives to provide quality education to
                underprivileged children, empowering them for a brighter future.
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>
                    ${donations.education.raised.toLocaleString()} raised
                  </span>
                  <span>${donations.education.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{
                      width: `${Math.min(
                        100,
                        (donations.education.raised /
                          donations.education.goal) *
                          100
                      )}%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {Math.round(
                    (donations.education.raised / donations.education.goal) *
                      100
                  )}
                  % funded
                </p>
              </div>

              <button className="bg-purple-700 rounded-full text-white px-4 py-2 hover:bg-purple-800 transition duration-300 w-full">
                <Link href="#">Donate to Education</Link>
              </button>
            </div>
          </div>

          {/* Healthcare Card */}
          <div className="rounded-lg shadow-md backdrop-blur-sm bg-white/10 relative">
            <Image
              src={assets.Health2}
              alt="donation2"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div className="p-3">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Healthcare Access
              </h1>
              <p className="text-gray-600 text-sm mb-4">
                Help us provide essential healthcare services to underserved
                communities, ensuring everyone has access to medical care.
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>
                    ${donations.healthcare.raised.toLocaleString()} raised
                  </span>
                  <span>${donations.healthcare.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{
                      width: `${Math.min(
                        100,
                        (donations.healthcare.raised /
                          donations.healthcare.goal) *
                          100
                      )}%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {Math.round(
                    (donations.healthcare.raised / donations.healthcare.goal) *
                      100
                  )}
                  % funded
                </p>
              </div>

              <button className="bg-purple-700 rounded-full text-white px-4 py-2 hover:bg-purple-800 transition duration-300 w-full">
                <Link href="#">Support Healthcare</Link>
              </button>
            </div>
          </div>

          {/* Disaster Relief Card */}
          <div className="rounded-lg shadow-md backdrop-blur-sm bg-white/10 relative">
            <Image
              src={assets.Relieve4}
              alt="donation3"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div className="p-3">
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                Disaster Relief
              </h1>
              <p className="text-gray-600 text-sm mb-4">
                Contribute to our disaster relief efforts, providing immediate
                aid and long-term recovery support to those affected by natural
                calamities.
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>
                    ${donations.disaster.raised.toLocaleString()} raised
                  </span>
                  <span>${donations.disaster.goal.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{
                      width: `${Math.min(
                        100,
                        (donations.disaster.raised / donations.disaster.goal) *
                          100
                      )}%`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {Math.round(
                    (donations.disaster.raised / donations.disaster.goal) * 100
                  )}
                  % funded
                </p>
              </div>

              <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition duration-300 w-full">
                <Link href="#">Help with Disaster Relief</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
