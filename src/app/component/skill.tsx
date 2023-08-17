import { RiComputerLine } from 'react-icons/ri'
const Skill = () => {
    return (
      <div id="Skills">
        <section className="text-gray-600 body-font relative">
          <div
            className="absolute top-0 left-0 w-full h-full z-[-10]  "
            style={{
              backgroundImage: `url("/assets/images/digitalmarketing.png")`, // Use the correct path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="title-font sm:text-6xl font-bold text-5xl mb-4  pl-5 text-red-800">
                Programmering Languages
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-50 text-lg">
                My proficiency spans across various technical skills such as
                C++, JAVA, TypeScript, web development, WordPress, Next.js, and
                digital marketing.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {/* 1st */}
              <div className="xl:w-1/3 md:w-1/2 p-4 transition-all relative hover:scale-110">
                <div
                  className="border border-gray-100 p-6 rounded-lg"
                  style={{ boxShadow: "0 0 1rem #B03218" }}
                >
                  <div
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-red-800 mb-4"
                    style={{ boxShadow: "0 0 1rem #B03218" }}
                  >
                    <RiComputerLine />
                  </div>
                  <h2 className="text-xl text-gray-50 font-bold title-font mb-2">
                    C++
                  </h2>
                  <div className="w-full bg-gray-50 rounded-full h-2.5 mb-4 dark:bg-red-800">
                    <div
                      className="bg-red-800 h-2.5 rounded-full dark:bg-red-800"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <p className="leading-relaxed text-lg text-gray-50">
                    I have hands-on experience in C++ development, having
                    created multiple applications and websites utilizing the
                    platform.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 transition-all relative hover:scale-110">
                <div
                  className="border border-gray-100 p-6 rounded-lg"
                  style={{ boxShadow: "0 0 1rem #B03218" }}
                >
                  <div
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-50 text-red-800 mb-4"
                    style={{ boxShadow: "0 0 1rem #B03218" }}
                  >
                    <RiComputerLine />
                  </div>
                  <h2 className="text-xl text-gray-50  title-font mb-2 font-bold ">
                    JAVA
                  </h2>
                  <div className="w-full bg-gray-50 rounded-full h-2.5 mb-4 dark:bg-gray-100">
                    <div
                      className="bg-red-800 h-2.5 rounded-full dark:bg-red-300"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <p className="leading-relaxed text-lg text-gray-50">
                    I have hands-on experience in Java development, having
                    created multiple gaming applications and websites utilizing
                    the platform.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 transition-all relative hover:scale-110">
                <div
                  className="border border-gray-200 p-6 rounded-lg"
                  style={{ boxShadow: "0 0 1rem #B03218" }}
                >
                  <div
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-red-800 mb-4"
                    style={{ boxShadow: "0 0 1rem  #B03218" }}
                  >
                    <RiComputerLine />
                  </div>
                  <h2 className="text-xl text-gray-50 title-font mb-2 font-bold">
                    Nextjs
                  </h2>
                  <div className="w-full bg-gray-50 rounded-full h-2.5 mb-4 dark:bg-gray-100">
                    <div
                      className="bg-red-800 h-2.5 rounded-full dark:bg-red-800"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="leading-relaxed text-lg text-gray-50 ">
                    I have hands-on experience in NextkJs development, having
                    created multiple gaming applications and websites utilizing
                    the platform.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 transition-all relative hover:scale-110">
                <div
                  className="border border-gray-100 p-6 rounded-lg"
                  style={{ boxShadow: "0 0 1rem #B03218" }}
                >
                  <div
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-red-800 mb-4"
                    style={{ boxShadow: "0 0 1rem #B03218" }}
                  >
                    <RiComputerLine />
                  </div>
                  <h2 className="text-xl text-gray-50 font-bold  title-font mb-2">
                    Digital Marketing
                  </h2>
                  <div className="w-full bg-gray-50 rounded-full h-2.5 mb-4 dark:bg-gray-50">
                    <div
                      className="bg-red-800 h-2.5 rounded-full dark:bg-red-600"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <p className="leading-relaxed text-lg text-gray-50 ">
                    I have hands-on experience in Digital Marketing , having
                    created multiple applications and websites utilizing the
                    platform.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 transition-all relative hover:scale-110">
                <div
                  className="border border-gray-100 p-6 rounded-lg"
                  style={{ boxShadow: "0 0 1rem #B03218" }}
                >
                  <div
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-red-800 mb-4"
                    style={{ boxShadow: "0 0 1rem #B03218" }}
                  >
                    <RiComputerLine />
                  </div>
                  <h2 className="text-xl text-gray-50 font-bold  title-font mb-2">
                    JavaScript
                  </h2>
                  <div className="w-full bg-gray-50 rounded-full h-2.5 mb-4 dark:bg-gray-50">
                    <div
                      className="bg-red-800 h-2.5 rounded-full dark:bg-red-600"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <p className="leading-relaxed text-lg text-gray-50 ">
                    I have hands-on experience in JavaScript , havin createdg
                    multiple applications and websites utilizing the platform.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 transition-all relative hover:scale-110">
                <div
                  className="border border-gray-100 p-6 rounded-lg"
                  style={{ boxShadow: "0 0 1rem #B03218" }}
                >
                  <div
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-red-800 mb-4"
                    style={{ boxShadow: "0 0 1rem #B03218" }}
                  >
                    <RiComputerLine />
                  </div>
                  <h2 className="text-xl text-gray-50 font-bold  title-font mb-2">
                    Wordpress
                  </h2>
                  <div className="w-full bg-gray-50 rounded-full h-2.5 mb-4 dark:bg-gray-50">
                    <div
                      className="bg-red-800 h-2.5 rounded-full dark:bg-red-600"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <p className="leading-relaxed text-lg text-gray-50 ">
                    I have hands-on experience in WordPress , having created
                    multiple applications and websites utilizing the platform.
                  </p>
                </div>
              </div>
            </div>

            <a href="#Contact">
              <button className="flex mx-auto mt-16 text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-50 hover:text-gray-900 rounded text-xl font-semibold">
                Contact Us
              </button>
            </a>
          </div>
        </section>
      </div>
    );
}
export default Skill