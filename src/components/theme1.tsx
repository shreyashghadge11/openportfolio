// Theme1.tsx

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";
import profileImg from "../assets/profile_img.jpg";
import techStackIcons from "../utils/techIcons";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";
import { PortfolioData } from "../pages/dashboard";

const Theme1: React.FC<{ portfolioData: PortfolioData }> = ({
  portfolioData,
}) => {
  // Replace these with actual user information
  const user = {
    name: "John Doe",
    title: "Web Developer",
    intro: "Passionate about creating awesome web experiences.",
    profileImage: portfolioData.profileImage || profileImg,
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
    projects: [
      {
        id: 1,
        title: "Project 1",
        imageUrl:
          "https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1705817997~exp=1705818597~hmac=edbd9f8b21b110a37580432fbd00370ab17f762866ff9f87f3c1ab7964479c7f",
        demoLink: "https://example.com",
        githubLink: "https://github.com",
      },
      {
        id: 2,
        title: "Project 2",
        imageUrl:
          "https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1705817997~exp=1705818597~hmac=edbd9f8b21b110a37580432fbd00370ab17f762866ff9f87f3c1ab7964479c7f",
        demoLink: "https://example.com",
        githubLink: "https://github.com",
      },
      {
        id: 3,
        title: "Project 3",
        imageUrl:
          "https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1705817997~exp=1705818597~hmac=edbd9f8b21b110a37580432fbd00370ab17f762866ff9f87f3c1ab7964479c7f",
        demoLink: "https://example.com",
        githubLink: "https://github.com",
      },
    ],
  };

  return (
    <div className="lg:max-w-[100%] mx-auto font-mono border">
      {/* Navbar */}
      <nav className="sticky p-4 ">
        <div className="container flex items-center justify-between mx-auto">
          <div className="text-4xl font-bold text-black">
            {portfolioData.name}
          </div>
          <div className="hidden space-x-4 lg:flex">
            <a href="#projects" className="py-2 text-xl text-black font">
              Projects
            </a>
            <a href="#skills" className="py-2 text-xl text-black font">
              Skills
            </a>
            <a href="#contact" className="py-2 text-xl text-black font">
              Contact Me
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-white bg-black border rounded-full"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="container mx-auto mt-12 mb-12 flex lg:w-[80%]  lg:flex-row items-center justify-around min-h-[80vh] flex-col px-2 text-center lg:text-start">
        <div className="">
          <h1 className="mb-2 text-2xl font-semibold text-gray-600">
            Hello I'm
          </h1>
          <h1 className="mb-2 text-6xl font-bold">{portfolioData.name}</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-600">
            {portfolioData.title}
          </h2>
          <p className="mb-4 text-2xl">{portfolioData.introduction}</p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex px-4 py-2 mb-4 space-x-4 border-2 border-black rounded-full">
              <a
                href={`https://github.com/${portfolioData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={`https://twitter.com/${portfolioData.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a href={`mailto:${portfolioData.email}`} className="text-black">
                <FaEnvelope size={24} />
              </a>
              <a
                href={`https://www.linkedin.com/in/${portfolioData.linkedin}`}
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
                href={portfolioData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-black rounded-full"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
        <div className="lg">
          <img
            src={portfolioData.profileImage || profileImg}
            alt="Profile Image"
            className="rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mb-4 lg:mb-5 lg:mr-4 shadow-lg"
          />
        </div>
      </div>
      {/* Tech Stack Section */}
      <div
        className="container mx-auto mt-18 mb-8 items-center lg:w-[70%] "
        id="skills"
      >
        <div className="items-center text-center">
          {" "}
          <h1 className="mb-2 text-4xl font-bold">Tech Stack</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {portfolioData.skills.map((tech) => (
            <div className="flex flex-col items-center justify-center m-4 max-w-[100px] ">
              {techStackIcons[tech]}
              <p className="text-black">{tech}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Projects Section */}

      <div
        className="container mx-auto mt-28 mb-8 items-center lg:w-[100%] pt-30 font-mono"
        id="projects"
      >
        <div className="items-center text-center">
          <h1 className="mb-2 text-4xl font-bold">Projects</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {portfolioData.projects?.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center justify-center m-4 max-w-[300px] shadow-lg p-4 rounded-md hover:w-full hover:shadow-xl transition duration-300 ease-in-out hover:zoom-in"
            >
              <img
                src={project.image}
                alt={project.name}
                className="mb-2 transition duration-300 ease-in-out rounded-md shadow-md hover:w-full hover:shadow-xl"
                style={{ width: "100%", height: "auto" }}
              />
              <h2 className="mb-2 text-xl font-">{project.name}</h2>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-white bg-black rounded-full"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-white bg-gray-700 rounded-full"
                >
                  <RiGithubFill className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Contact Section */}
        <div
          className="container mx-auto mt-28 mb-8 items-center lg:w-[50%] justify-center"
          id="contact"
        >
          <div className="items-center text-center">
            <h1 className="mb-2 text-4xl font-bold">Contact Me</h1>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email Address
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border rounded-md shadow-md"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Email Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border rounded-md shadow-md"
              placeholder="Enter your email subject"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded-md shadow-md"
              rows={4}
              placeholder="Type your message here"
            />
          </div>

          {/* Send Button with Icon */}
          <div className="flex justify-center">
            <button className="flex items-center px-4 py-2 text-white bg-black rounded-full">
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </div>
        </div>
        <footer className="py-6 mt-12 text-center border-t ">
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href={`https://github.com/${portfolioData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={`https://twitter.com/${portfolioData.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaTwitter size={24} />
            </a>
            <a href={`mailto:${portfolioData.email}`} className="text-black">
              <FaEnvelope size={24} />
            </a>
            <a
              href={`https://www.linkedin.com/in/${portfolioData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Made with Love */}
          <p className="mt-4 text-gray-600">
            Made with <span className="text-red-600">&#x2764;&#xFE0E;</span> by
            OpenPortfolio
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Theme1;
