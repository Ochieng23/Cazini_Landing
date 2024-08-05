import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto text-left">
        {" "}
        {/* Modified */}
        <h1 className="text-5xl mt-3 text-center font-extrabold py-7 text-blue-800 mb-6">
          Modernize Your Recruitment <br /> Processes <br />
        </h1>
        <p className="text-lg font-semibold text-center text-black mb-12">
          Is your background check process outdated? Upgrade to a fast, smooth,
          and secure screening experience with AI-powered shortlisting.
        </p>
        <div className="flex flex-col md:flex-row justify-center mx-2 gap-6">
          <div className="relative w-full md:w-1/2 lg:w-1/2 h-72 overflow-hidden rounded-lg shadow-md md:mb-0">
            <img
              src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1719922480/img_2_y88dum.png"
              alt="Looking for a job?"
              layout=""
              objectFit=""
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Looking for a job?
              </h2>
              <p className="text-white mb-4">
                We use AI to match you with <br /> jobs near you that match your{" "}
                <br />
                career preferences
              </p>
              <Link
                href="/mail"
                className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 lg:w-1/2 h-72 overflow-hidden rounded-lg shadow-md">
            <img
              src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1719922480/img_sjxabp.png"
              alt="Are you employing?"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Are you employing?
              </h2>
              <p className="text-white mb-4">
                Get AI-matched to vetted and <br /> verified candidates with
                clean <br />
                backgrounds and credentials
              </p>
              <Link
                href="/demo"
                className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
