"use client";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function MailingList() {
  const initialFormData = {
    name: "",
    company: "",
    company_size: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/employerWaitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      // Reset the form data and set success message
      setFormData(initialFormData);
      setMessage("Form data saved successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error saving form data");
    }
  };

  return (
    <>
      <Header />
      <main className="flex min-h-screen bg-gray-100">
        <div className="hidden lg:flex w-1/2 relative">
          <img
            src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1722241325/Screen_Shot_2024-07-29_at_11.20.52_njm7yq.png"
            alt="Login Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 mt-10 rounded-lg shadow-md w-full max-w-md"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl mt-8 font-bold text-gray-800">
                Let us help you hire fast, hire right!
              </h2>
            </div>
            {message && (
              <p className="text-center mb-4 text-green-600">{message}</p>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Name of Organization:
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="eg Safaricom Ltd"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company Size:</label>
              <input
                type="text"
                name="company_size"
                value={formData.company_size}
                onChange={handleChange}
                placeholder="eg. 10-50 employees"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Work Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Johndoe@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-400 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
