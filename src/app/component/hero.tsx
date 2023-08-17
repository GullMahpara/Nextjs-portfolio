import Image from "next/image";
import { AiFillContacts, AiOutlineCloudDownload  } from "react-icons/ai";
const Hero = () => {
  return (
    <div id="Hero">
      <section className=" body-font relative  ">
        <div
          className="absolute top-0 left-0 w-full h-full z-[-10]"
          style={{
            backgroundImage: `url("/assets/images/digitalmarketing.png")`, // Use the correct path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
          <div>
            <Image
              className="object-cover object-center rounded-full w-[500px]"
              alt="hero"
              src={require("../../../public/assets/images/img1.jpg")}
            />
          </div>
          <div className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-6xl font-bold text-6xl mb-4  pl-5 text-red-800">
              I am Programmer
            </h1>

            <p className="mb-8 leading-relaxed text-justify text-gray-50 font-sans text-lg tracking-normal  p-8 justify-center items-center ">
              I am a skilled programmer with expertise in HTML, CSS, JavaScript,
              TypeScript, Python, and C++. Over the years, I have developed a
              strong foundation in programming concepts and methodologies, and I
              have used my skills to build various applications and websites.
            </p>
            <div className="flex justify-center">
              <a href="/assets/resume/Resume.pdf">
                <button className="inline-flex text-gray-950 bg-gray-100 border-0 font-bold py-2 px-6 focus:outline-none hover:bg-red-800 hover:text-gray-50 rounded text-lg">
                  Download CV{" "}
                  <AiOutlineCloudDownload className="text-3xl ml-2" />
                </button>
              </a>
              <a href="#Contact">
                <button className="ml-4 inline-flex text-gray-950 bg-gray-100 font-bold border-0 py-2 px-6 focus:outline-none hover:bg-red-800 hover:text-gray-50 rounded text-lg">
                  Contact Us
                  <AiFillContacts className="text-2xl ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;