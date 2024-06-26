"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Profile = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");

  const router = useRouter();

  const profileHandle = (e) => {
    e.preventDefault();
    // console.log(name, city, district);
    router.push("/wallet");
  };

  return (
    <div>
      <div className=" p-3 flex gap-1 sm:pl-6 font-medium ">
        <Link
          href={"/wallet"}
          className=" flex justify-center items-center px-2"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span>Back</span>
        </Link>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div>
          <h2 className="text-center text-xl font-medium tracking-wide py-2">
            Profile
          </h2>
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
        <div className="py-8 px-4 w-full xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md ">
          <form onSubmit={profileHandle} className="space-y-5">
            {/* name  */}
            <div className=" rounded-xl gap-1">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            {/* phone  */}
            <div className="  rounded-xl gap-1">
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="w-full "
              />
            </div>

            {/* email   */}
            <div className=" rounded-xl gap-1">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>

            {/* street  */}
            <div className=" rounded-xl gap-1">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Street"
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              ></input>
            </div>

            {/* city  */}
            <div className=" rounded-xl gap-1">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="City"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              ></input>
            </div>

            {/* district  */}
            <div className=" rounded-xl gap-1">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="District"
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              ></input>
            </div>

            <div className="  flex items-center justify-between gap-4 font-medium  w-full">
              <button className=" w-1/2 border-2 border-green-500 py-2  rounded-xl ">
                <Link href={"/wallet"} className="  px-12 py-3 rounded-lg">
                  Cancel
                </Link>
              </button>
              <button
                type="submit"
                className="w-1/2 border-2 bg-green-600 py-2 rounded-lg text-white border-none"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
