/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCloudDownload} from "react-icons/ai";
const About =()=>{
    return (
      <div id="About">
        <section className="text-gray-600 body-font relative">
          <div
            className="absolute top-0 left-0 w-full h-full z-[-10]  "
            style={{
              backgroundImage: `url("/assets/images/digitalmarketing.png")`, // Use the correct path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-full">
            <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  space-x-2   flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl font-bold text-6xl mb-4  pl-5 text-red-800">
              About Me
              </h1>
              <p className="mb-8 leading-relaxed text-justify items-center space-y-2 my-4 mx-4 text-xl text-gray-50 p-2">
                I possess advanced programming abilities, specializing in HTML,
                CSS, JavaScript, TypeScript, Python, and C++. Over the course of
                time, I've cultivated a robust understanding of programming
                principles and methodologies, and I've utilized my skills to
                construct diverse applications and websites. I recognize the
                significance of establishing a potent online presence, and I've
                aided numerous enterprises in accomplishing their digital
                marketing objectives through my proficiency in SEO, and social
                media marketing. My experience with WordPress encompasses
                crafting custom themes and plugins, optimizing website
                performance, and overseeing website content management.
              </p>
              <div className="flex justify-center">
                <Link
                  href={
                    "/assets/https://gullmahpara-porfolio.netlify.app//Resume.pdf"
                  }
                >
                  <button className=" font-bold inline-flex text-white bg-red-800 border-0 py-3 px-6 focus:outline-none hover:bg-gray-950 hover:text-gray-50 rounded text-lg">
                    Download CV{" "}
                    <AiOutlineCloudDownload className="text-3xl ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className=" border-4">
              <Image
                className="object-cover object-center rounded-full w-[400px]"
                alt="hero"
                src={require("../../../public/assets/images/about.jpg")}
              />
            </div>
          </div>
        </section>
      </div>
    );
}
export default About