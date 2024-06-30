"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Wallet = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState("");

  const allData = async () => {
    const blob = await fetch(
      "https://www.thedevstudio.in/api/react-internship-wallet-summary"
    );
    const res = await blob.json();

    console.log(res.transactions);
    setData(res);
  };

  let milliseconds = 1578567991011;
  function Date_Fun() {
    let date = new Date(milliseconds);
    console.log("Milliseconds = " + date.toString());
    let newDate = date.toString().split(" ");
    let res =
      newDate[1] +
      " " +
      newDate[2] +
      " " +
      newDate[3] +
      " at " +
      newDate[4].split(":")[0] +
      ":" +
      newDate[4].split(":")[1];
    return res;
  }

  useEffect(() => {
    allData();
  }, []);

  return (
    <div className=" sm:max-w-7xl mx-auto">
      <div className=" flex items-center justify-between px-4 p-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 bg-green-300 p-1 rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
      </div>
      <div className=" p-2 flex justify-end items-center">
        <button className="font-medium text-green-600 border-2 border-green-500 px-6 py-2 rounded-xl ">
          Add Money
        </button>
      </div>

      <div className=" sm:w-full  sm:inline-block">
        <div className="p-2  flex items-center justify-around gap-2  sm:w-[25%] sm:float-end">
          <div className="flex flex-col justify-center items-center gap-2 border-2 border-green-500 bg-green-100 px-4 py-10 rounded-2xl">
            <h2 className="text-2xl text-gray-800">₹ 500</h2>
            <p className="text-gray-700">Available Balance</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 border-2 border-green-500 bg-green-100 px-8 py-10 rounded-2xl">
            <h2 className="text-2xl text-gray-800">₹ 200</h2>
            <p className="text-gray-700">Total Expend</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" mt-4 p-2 px-3  flex justify-between items-center text-[14px] font-medium">
          <div>Transactions</div>
          <div className="text-green-700">See All</div>
        </div>
        {/* single obj  */}

        {data?.transactions?.map((obj, index) => {
          return (
            <div
              key={index}
              className="border-2 border-green-600 rounded-xl m-2 mt-4 p-2 flex justify-between items-center"
            >
              <div className="flex justify-center items-center gap-2 ">
                <div>
                  {obj.type == "expense" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 bg-red-200 p-2 rounded-full text-red-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 bg-green-200 p-2 rounded-full text-green-900 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="text-[15px] font-medium tracking-wide">
                    {obj.label}
                  </h4>
                  <p className="text-[13px]">{Date_Fun(obj.time)}</p>
                </div>
              </div>
              <div>
                {obj.type == "expense" ? "-" : ""} ₹ {obj.amount}.00
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Nav */}
      <div className=" sm:p-4 sticky bottom-0 rounded-2xl">
        <div className="py-2 flex bg-slate-200 items-center justify-evenly">
          <Link href={"/"}>
            <div className="flex flex-col justify-center items-center gap-1 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </span>
              <span className="font-medium text-[14px]  text-gray-700">
                Home
              </span>
            </div>
          </Link>

          <Link href={"/login"}>
            <div className="flex flex-col justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
              <span className="font-medium text-[14px]  text-gray-700">
                Favourite
              </span>
            </div>
          </Link>

          <Link href={"/wallet"}>
            <div className="flex flex-col justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </span>
              <span className="font-medium text-[14px]  text-gray-700">
                Wallet
              </span>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex flex-col justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </span>
              <span className="font-medium text-[14px]  text-gray-700">
                Offer
              </span>
            </div>
          </Link>

          <Link href={"/profile"}>
            <div className="flex flex-col justify-center items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </span>
              <span className="font-medium text-[14px]  text-gray-700">
                Profile
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
