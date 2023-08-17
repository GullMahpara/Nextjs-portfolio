const Contact = () => {
  return (
    <div id="Contact">
      <section className="text-gray-50 body-font relative">
        <div
          className="absolute top-0 left-0 w-full h-full z-[-10]"
          style={{
            backgroundImage: `url("/assets/images/digitalmarketing.png")`, // Use the correct path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container py-20 mx-auto flex sm:flex-nowrap flex-wrap  ">
          <div className=" lg:w-2/3 md:w-1/2 w-full  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="90%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d830.3933603974789!2d73.0476277!3d33.6423005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95a6f6846a2f%3A0xd140ead5d353e847!2sABBASI%20HOUSE!5e0!3m2!1sen!2s!4v1692005860787!5m2!1sen!2s"
            ></iframe>
          </div>
          <div className="lg:w-1/3 bg-gray-50 border-red-700 md:w-1/2 rounded-lg p-5 flex flex-col md:ml-auto w-full md:py-8  md:mt-0">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-red-700 p-5 flex items-center justify-center font-serif">
              Contact Us
            </h1>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-lg text-gray-950">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-red-700 focus:border-gray-100 focus:ring-2 focus:ring-gray-100  outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7  text-gray-950 text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-white rounded border border-red-700 focus:border-gray-100 focus:ring-2 focus:ring-gray-100  outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-lg text-gray-950"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-red-700 focus:border-gray-100 focus:ring-2 focus:ring-gray-100  outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-950 rounded text-lg">
              Submit
            </button>
            <p className="  text-sm text-gray-900 mt-4">
              International Islamic University Islamabad(IIUI)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
