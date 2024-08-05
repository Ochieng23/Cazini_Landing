"use client";
import { useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function MailingList() {
  const initialFormData = {
    name: "",
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
      const response = await fetch("/api/submitForm", {
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
      setMessage("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form");
    }
  };

  return (
    <>
      <Header />
      <main className="flex min-h-screen">
        <div className="hidden lg:flex w-1/2 relative">
          <img
            src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1720092052/image_1_bqfry8.png"
            alt="Login Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-100 p-6 rounded-lg shadow-md w-full max-w-md"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl text-black font-bold">
                Be the first to know when we launch!
              </h2>
            </div>
            {message && (
              <p className="text-center mb-4 text-green-600">{message}</p>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
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
              <label className="block text-gray-700">Email</label>
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
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
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
