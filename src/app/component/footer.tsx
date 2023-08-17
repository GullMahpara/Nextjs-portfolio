import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import {BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
const Footer =()=>{
    return (
      <div className="bg-red-700">
        <footer className="text-gray-50 body-font">
          <div className="container   pb-3 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-red-100">
              <div>
                <Link href={"#Home"}>
                  <Image
                    src={require("../../../public/assets/images/mahpara.png")}
                    alt="Gull"
                    width={150}
                    height={80}
                    className=" "
                  />
                </Link>
              </div>
              <span className="ml-3 text-2xl text-gray-50 font-serif tracking-normal">
                Mahpara
              </span>
            </a>
            <p className="text-lg text-gray-50 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-red-100 sm:py-2 sm:mt-0 mt-4">
              © 2023 Mahpara —
              <a
                href="https://gullmahpara-porfolio.netlify.app/"
                className="text-gray-50 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                GullMahpara
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-2">
              <Link
                target="_blank"
                className="text-gray-50 hover:text-gray-300 text-2xl"
                href={"https://github.com/GullMahpara"}
              >
                <AiFillGithub />
              </Link>
              <Link
                target="_blank"
                className="text-gray-50 hover:text-gray-300 text-2xl"
                href={"https://twitter.com/GullMahpara"}
              >
                <AiFillTwitterCircle />
              </Link>
              <Link
                target="_blank"
                className="text-gray-50 hover:text-gray-300 text-2xl"
                href={"https://www.instagram.com/mahparamahparagull/"}
              >
                <BsInstagram />
              </Link>
              <Link
                target="_blank"
                className="text-gray-50 hover:text-gray-300 text-2xl"
                href={"https://www.linkedin.com/in/mahpara-gull-b449b6220/"}
              >
                <BsLinkedin />
              </Link>
            </span>
          </div>
        </footer>
      </div>
    );
}
export default Footer