import Image from "next/image";
import Link from "next/link";
import React from "react";

import { GoArrowUpRight } from "react-icons/go";

// Sample post data for illustration
const posts = [
  {
    _id: "1",
    tag: "Instant Matching",
    slug: "instant-matching",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1721481956/Designer_1_vegzie.jpg",
    title: "Instant Matching",
    description:
      "Our instant matching feature quickly connects you with ideal candidates, reducing recruitment time and effort. Similar to Tinder, we use a percentage match to compare job descriptions with candidate profiles, ensuring the best fit. Detailed reports on skills and experience provide a comprehensive view of each candidate's suitability. This allows you to prioritize top candidates efficiently, making hiring as simple and intuitive as swiping right",
  },
  {
    _id: "2",
    tag: "Fine Tune",
    slug: "fine-tune",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1721482413/Designer_3_sb3pzi.jpg",
    title: "Vetted Talent Pool",
    description:
      "Access a pool of our pre-screened talent with comprehensive background check reports available at the click of a button. Our detailed reports include education verification, identity confirmation, work history, criminal record, reference checks, credit checks, and more. With our thorough vetting process, you can confidently hire the right candidates, ensuring they meet your standards for trustworthiness and reliability. Explore the convenience and security of our talent screening today.",
  },
  {
    _id: "3",
    tag: "Automate",
    slug: "automate",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1721483885/Designer_6_bwwxft.jpg",
    title: "Pre-screening  tools",
    description:
      "Our pre-screening tools include advanced psychometric tests and competency-based assessments to ensure you find the right candidates. Psychometric tests evaluate personality traits, cognitive abilities, and emotional intelligence, while competency-based tools measure specific skills and job-related competencies. These tools provide a thorough understanding of a candidate's potential, helping you make informed hiring decisions. Enhance your recruitment process with our reliable pre-screening solutions for better talent alignment and organizational success.",
  },
  {
    _id: "4",
    tag: "AI Resume Builder",
    slug: "ai-resume-builder",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1721483354/Designer_4_sdgnpd.jpg",
    title: "The jobseekers' profile is their cv",
    description:
      "Leverage our AI-powered CV checker to revise and create professional and polished CVs effortlessly. Our tool uses the candidate's profile to automatically generate a standout CV, wowing potential employers. By ensuring their CV highlights key skills and experiences, our AI-driven solution maximizes their chances of securing job opportunities. Transform your job search with a top-quality, expert generated CV tailored to your profile.",
  },
  // {
  //   _id: "5",
  //   tag: "Peers",
  //   slug: "job-application-tracker",
  //   mainImage:
  //     "https://res.cloudinary.com/dhz4c0oae/image/upload/v1721501327/Designer_7_nffuyc.jpg",
  //   title: "Job Application Tracker",
  //   description:
  //     "Stay organized during your job search with our job application tracker. Track your applications, set reminders, and manage follow-ups to ensure you never miss an opportunity in your career hunt.",
  // },
  // Add more posts here if needed
];

function PrimaryFeatures() {
  function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) {
      return text;
    }
    const words = text.split(" ");
    const truncatedText = words.slice(0, maxLength).join(" ");
    return truncatedText + "...";
  }

  return (
    <div className="mt-0 flex flex-col gap-10 bg-white px-10 py-10">
      <h2 className="text-center text-blue-600 font-extrabold text-4xl">
        Powered by <span className="text-green-600">AI</span>
      </h2>
      {posts.map((post, index) => (
        <Link
          href="#"
          key={post._id}
          className="no-underline hover:no-underline"
        >
          <div
            className={`mt-2 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 p-4">
              <img
                src={post.mainImage}
                width={500}
                height={300}
                className="object-cover rounded-lg"
                alt="main blog image"
              />
            </div>
            {/* Text Section */}
            <div className="flex w-full flex-col justify-between p-4 md:w-1/2">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-black">{post.title}</h2>
                <p className="text-black  text-justify">
                  {truncateText(post.description, 80)}
                </p>
                <Link
                  href="/demo"
                  className="mt-4 inline-flex items-center text-green-600"
                >
                  <span>Get Started</span>
                  <GoArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PrimaryFeatures;
