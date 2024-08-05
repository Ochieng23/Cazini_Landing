"use client";
import { useState } from "react";
import Image from "next/image";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false); // State to track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true during form submission

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

      // Clear form data after successful submission
      setFormData({ name: "", email: "" });

      // Show success alert
      alert("Form submitted successfully!");

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setSubmitting(false); // Reset submitting state after form submission completes
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1720092052/image_1_bqfry8.png"
          alt="Login Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Be the first to know when we launch!</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            disabled={submitting} // Disable button while submitting
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
