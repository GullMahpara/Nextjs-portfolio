import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineCloudDownload} from "react-icons/ai";
const Navbar = () => {
  return (
    <div className=" bg-red-900">
      <header className="text-gray-100 body-font font-semibold  text-4xl  ">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-100  md:mb-0">
            <Link href={"#Home"}>
              <div>
                <Image
                  src={require("../../../public/assets/images/mahpara.png")}
                  alt="Gull"
                  width={130}
                  height={100}
                />
              </div>
            </Link>

            <span className="ml-3 text-xl text-gray-100">Mahpara </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-pink-100	flex flex-wrap items-center text-lg justify-center">
            <Link
              href={"#Hero"}
              className="mr-5 hover:text-gray-300  accent-slate-400"
            >
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-gray-300">
              About
            </Link>
            <Link href={"#Skills"} className="mr-5 hover:text-gray-300">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-gray-300">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-gray-300">
              Contact
            </Link>
          </nav>
          <a href="https://gullmahpara-porfolio.netlify.app/">
            <button className="inline-flex items-center text-gray-950 font-bold text-xl bg-gray-100 border-0 py-3 px-3 focus:outline-none hover:text-gray-100 hover:bg-gray-950 rounded mt-2 md:mt-0">
              Resume
              <AiOutlineCloudDownload className="text-3xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
export default Navbar