"use client";

import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Profile = () => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div>Back</div>
      <div className=" flex flex-col justify-center items-center">
        <div>
          <h2 className="text-center py-2">PICTURE</h2>
          <div className="bg-gray-300 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-28 text-green-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="py-2">
          FORM
          <form action="#" className="space-y-5">
            {/* name  */}
            <div className=" rounded-xl gap-1">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-5 py-2 border-2 border-black/35 outline-none rounded-xl bg-gray-100"
              />
            </div>
            {/* phone  */}
            <div className="  rounded-xl gap-1">
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="w-full p-1 border-2 border-black/35 outline-none rounded-xl"
              />
            </div>

            {/* email   */}
            <div className=" rounded-xl gap-1">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full px-5 py-2 border-2 border-black/35 outline-none rounded-xl bg-gray-100"
              />
            </div>

            {/* street  */}
            <div className=" rounded-xl gap-1">
              <input
                type="text"
                placeholder="Enter Your Street"
                className="w-full px-5 py-2 border-2 border-black/35 outline-none rounded-xl bg-gray-100"
              />
            </div>

            {/* city  */}
            <div className=" rounded-xl gap-1">
              <input
                type="text"
                placeholder="Enter Your City"
                className="w-full px-5 py-2 border-2 border-black/35 outline-none rounded-xl bg-gray-100"
              />
            </div>

            {/* district  */}
            <div className=" rounded-xl gap-1">
              <input
                type="text"
                placeholder="Enter Your District"
                className="w-full px-5 py-2 border-2 border-black/35 outline-none rounded-xl bg-gray-100"
              />
            </div>
          </form>
        </div>
        <div className="mt-4 flex gap-2 font-medium">
          <button className="bg-green-200 px-10 border-2 border-green-500 py-2 rounded-xl border-none">
            Cancel
          </button>
          <button className="px-10 border-2 bg-green-600 py-2 rounded-xl text-white border-none">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
