import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="p-4  flex justify-end  font-medium">
        <Link href={"/wallet"}>
          <span className=" px-3 py-1">Skip</span>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center  m-10">
        <div>
          <Image src={"/hero.png"} width={500} height={500} alt="imgage" />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto sm:w-[50%]">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide py-3">
            Anywhere you are
          </h1>
          <p className="text-lg sm:text-xl py-3 text-center sm:px-24 ">
            Sell houses easily with the help of Listenoryx and to make this line
            big I am writing more.
          </p>
        </div>
      </div>
      <div className="bg-green-100  flex justify-center w-24 h-24 rounded-full items-center mx-auto border-2 border-green-800">
        <Link href={"/signup"}>
          <div className="p-5 bg-green-400 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
