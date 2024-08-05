import React from "react";
import { FaCheckCircle, FaBolt, FaHandshake } from "react-icons/fa"; // Use react-icons for icons

function CallToAction() {
  return (
    <div className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-blue-800 mb-12">
          Why Choose <span className="text-green-500">Cazini</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaBolt className="text-green-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Secure Background Checks
            </h3>
            <p className="text-gray-600 mb-4">
              Are your background checks stuck in the past? Upgrade to a fast,
              smooth, safe screening experience.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaCheckCircle className="text-green-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              A.I. Powered Instant Job-Matching
            </h3>
            <p className="text-gray-600 mb-4">
              Our cutting-edge AI analyzes your skills and preferences to match
              you with perfect jobs, instantly. Say goodbye to endless
              searching.
            </p>
          </div>

          {/* Third Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaHandshake className="text-green-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Connect with Legally Compliant Employers
            </h3>
            <p className="text-gray-600 mb-4">
              We prioritize your safety and peace of mind. Find jobs from
              reputable, pre-vetted companies you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
