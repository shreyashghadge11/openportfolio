// Theme1.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile_img.jpg";
import techStackIcons from "../utils/techIcons";

const Theme1: React.FC = () => {
  // Replace these with actual user information
  const user = {
    name: "John Doe",
    title: "Web Developer",
    intro: "Passionate about creating awesome web experiences.",
    profileImage: profileImg,
    github: "github_username",
    twitter: "twitter_handle",
    email: "user@example.com",
    linkedin: "linkedin_profile",
    resumeLink: "url_to_resume",
    techStack: [
      "react",
      "nodejs",
      "python",
      "java",
      "html",
      "css",
      "javascript",
      "mongodb",
      "mysql",
      "postgresql",
      "docker",
      "git",
      "github",
    ],
  };

  return (
    <div className="lg:max-w-[80%] mx-auto">
      {/* Navbar */}
      <nav className=" p-4 sticky">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-bold text-4xl">{user.name}</div>
          <div className="hidden lg:flex space-x-4">
            <a
              href="#projects"
              className="text-black font-semibold text-xl py-2"
            >
              Projects
            </a>
            <a href="#skills" className="text-black font-semibold text-xl py-2">
              Skills
            </a>
            <a
              href="#contact"
              className="text-black font-semibold text-xl py-2"
            >
              Contact Me
            </a>
            <a
              href="#contact"
              className="text-white border px-4 py-2 rounded-full bg-black"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="container mx-auto mt-12 mb-12 flex  lg:flex-row items-center justify-around min-h-[80vh] flex-col px-2 text-center lg:text-start">
        <div className=" ">
        <h1 className="text-3xl font-semibold text-gray-600 mb-2">Hello I'm</h1>
          <h1 className="text-6xl font-bold mb-2">{user.name}</h1>
          <h2 className="text-4xl font-semibold text-gray-600 mb-4">
            {user.title}
          </h2>
          <p className="mb-4 text-2xl">{user.intro}</p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex space-x-4 mb-4 border-2 border-black rounded-full px-4 py-2">
              <a
                href={`https://github.com/${user.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={`https://twitter.com/${user.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a href={`mailto:${user.email}`} className="text-black">
                <FaEnvelope size={24} />
              </a>
              <a
                href={`https://www.linkedin.com/in/${user.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* View Resume Button */}
            <div className="mt-3 ml-4">
              <a
                href={user.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white py-2 px-4 rounded-full"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
        <div className="lg">
          <img
            src={user.profileImage}
            alt="Profile"
            className="rounded-full w-[400px] h-[400px] mb-4 lg:mb-0 lg:mr-4"
          />
        </div>
      </div>
      {/* Tech Stack Section */}
      <div className="container mx-auto mt-18 mb-8 items-center lg:w-[60%] ">
        <div className="items-center text-center">
          {" "}
          {/* Added text-center class */}
          <h1 className="text-4xl font-bold mb-2">Tech Stack</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {user.techStack.map((tech) => (
            <div className="flex flex-col items-center justify-center m-4 max-w-[100px]">
              {techStackIcons[tech]}
              <p className="text-black">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme1;
