"use client";
import React, { useState } from "react";

function How() {
  const [view, setView] = useState("jobseekers");

  return (
    <div className="bg-white py-8">
      <div className="text-center mb-8">
        <h1 className="text-blue-800 font-extrabold mt-5 text-4xl">
          How <span className="text-green-500">Cazini</span> works
        </h1>
      </div>
      <div className="flex flex-col px-2 md:flex-row justify-center gap-6 mt-5 mb-8">
        <button
          onClick={() => setView("jobseekers")}
          className={`${
            view === "jobseekers" ? "bg-green-600" : "bg-green-500"
          } text-white rounded-md py-2 px-4 hover:bg-green-600`}
        >
          For Job Seekers
        </button>
        <button
          onClick={() => setView("employers")}
          className={`${
            view === "employers" ? "bg-green-600" : "bg-green-500"
          } text-white rounded-md py-2 px-4 hover:bg-green-600`}
        >
          For Employers
        </button>
      </div>

      {/* Conditional Rendering of Content */}
      {view === "jobseekers" ? (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          <img
            src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1720273280/avatars/oaxfsyrdtuijrb5nxy7w.png"
            alt="Job Seekers"
            className="w-full md:w-1/2 rounded-lg shadow-md"
            loading="lazy"
            width={300}
            height={300}
          />
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              Automated job applications using A.I
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">Create account</h3>
                  <p>
                    You create your account using your personal details that are
                    verifiable.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">
                    Fill your experience and credentials
                  </h3>
                  <p>
                    You fill your most recent experiences and upload your
                    credentials for verification and background check.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">
                    AI Assistant automatically applies jobs for you
                  </h3>
                  <p>
                    Our AI assistant matches you with the most suitable job
                    based on your skills and experiences.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">Get Job</h3>
                  <p>
                    Geta job that matches your skills and experiences!
                    It&rsquo;s that simple.
                  </p>
                </div>
              </li>
            </ul>
            <button className="bg-green-500 text-white mt-6 rounded-md py-2 px-4 hover:bg-green-600">
              Sign Up & Get Matched (for Free)
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
          {/* Employers Content */}
          <img
            src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1721556691/Job-listing_hi6s3g.webp"
            alt="Employers"
            className="w-full md:w-1/2 rounded-lg shadow-md"
            loading="lazy"
            width={300}
            height={300}
          />
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              Automated hiring process using A.I
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">Post Your Job</h3>
                  <p>
                    Post your job details and requirements easily on our
                    platform.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">Find Best Matches</h3>
                  <p>
                    Our AI assistant recommends a list of candidates based on a
                    percentage match, ensuring they meet your specific
                    requirements with deep understanding and accuracy.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">
                    Background Checks and Credential Verification
                  </h3>
                  <p>
                    Get a detailed background check and credential verification
                    report on a candidate from the click of a button.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-3">✔️</div>
                <div className="text-black">
                  <h3 className="font-semibold">Hire with confidence</h3>
                  <p>
                    Make informed decisions and hire the best candidates
                    confidently.
                  </p>
                </div>
              </li>
            </ul>
            <button className="bg-green-500 text-white mt-6 rounded-md py-2 px-4 hover:bg-green-600">
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default How;
