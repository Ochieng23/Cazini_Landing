import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function HRBackgroundCheckDashboard() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-20 p-6">
        <div className="bg-white shadow-md rounded-lg p-4 mt-10 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Background Check Summary
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-green-500 p-4 rounded-lg">
              <h3 className="text-lg font-medium">Total Candidates</h3>
              <p className="text-3xl font-bold">150</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-lg">
              <h3 className="text-lg font-medium">Completed Checks</h3>
              <p className="text-3xl font-bold">120</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded-lg">
              <h3 className="text-lg font-medium">Pending Checks</h3>
              <p className="text-3xl font-bold">20</p>
            </div>
            <div className="bg-red-500 p-4 rounded-lg">
              <h3 className="text-lg font-medium">Issues/Flags</h3>
              <p className="text-3xl font-bold">10</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Candidates List</h2>
          <table className="w-full table-auto text-black">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Request Date</th>
                <th className="px-4 py-2">Expected Completion</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through candidates data */}
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">Software Engineer</td>
                <td className="border px-4 py-2">Completed</td>
                <td className="border px-4 py-2">2024-06-01</td>
                <td className="border px-4 py-2">2024-06-10</td>
              </tr>
              {/* More rows as needed */}
            </tbody>
          </table>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Issues and Flags</h2>
          <ul>
            <li className="mb-2">
              <strong>Jane Smith:</strong> Employment discrepancy - follow up
              required
            </li>
            {/* More issues as needed */}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HRBackgroundCheckDashboard;
