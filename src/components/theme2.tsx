// Theme2.tsx

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
    FaHeart
} from "react-icons/fa";
import profileImg from "../assets/profile_img.jpg";
import techStackIcons from "../utils/techIcons";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri"; 
import { PortfolioData } from "../pages/dashboard";

const Theme2: React.FC<{ portfolioData: PortfolioData }> = ({portfolioData}) => {
  // Replace these with actual user information
  const user = {
    name: "John Doe 2",
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
    <div className="lg:max-w-[100%] mx-auto font-mono border bg-black">
      {/* Navbar */}
      <nav className=" p-4 sticky">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-4xl">{user.name}</div>
          <div className="hidden lg:flex space-x-4">
            <a href="#projects" className="text-white font text-xl py-2">
              Projects
            </a>
            <a href="#skills" className="text-white font text-xl py-2">
              Skills
            </a>
            <a href="#contact" className="text-white font text-xl py-2">
              Contact Me
            </a>
            <a
              href="#contact"
              className="text-black border px-4 py-2 rounded-full bg-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="container mx-auto mt-12 mb-12 flex  lg:flex-row items-center justify-around min-h-[80vh] flex-col px-2 text-center lg:text-start lg:w-[80%]">
        <div className=" ">
          <h1 className="text-2xl font-semibold text-gray-200 mb-2">
            Hello I'm
          </h1>
          <h1 className="text-6xl text-white font-bold mb-2">{user.name}</h1>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            {user.title}
          </h2>
          <p className="mb-4 text-white text-2xl">{user.intro}</p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex space-x-4 mb-4 border-2 border-white rounded-full px-4 py-2">
              <a
                href={`https://github.com/${user.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={`https://twitter.com/${user.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a href={`mailto:${user.email}`} className="text-white">
                <FaEnvelope size={24} />
              </a>
              <a
                href={`https://www.linkedin.com/in/${user.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
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
                className="bg-white text-black py-2 px-4 rounded-full"
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
            className="rounded-full border border-white border-4 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mb-4 lg:mb-5 lg:mr-4 shadow-lg"
          />
        </div>
      </div>
      {/* Tech Stack Section */}
      <div
        className="container mx-auto mt-18 mb-8 items-center lg:w-[70%] text-white"
        id="skills"
      >
        <div className="items-center text-center">
          {" "}
          <h1 className="text-4xl font-bold mb-2 text-white">Tech Stack</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {user.techStack.map((tech) => (
            <div className="flex flex-col items-center justify-center m-4 max-w-[100px] ">
              {techStackIcons[tech]}
              <p className="text-white">{tech}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Projects Section */}

      <div
        className="container mx-auto mt-28 mb-8 items-center lg:w-[80%] pt-30 font-mono"
        id="projects"
      >
        <div className="items-center text-center">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
        </div>
        <div className="flex flex-wrap flex-row justify-center">
          {user.projects?.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center border border-white justify-center m-4 max-w-[300px] shadow-lg shadow-white p-4 rounded-md hover:w-full hover:shadow-xl transition duration-300 ease-in-out hover:zoom-in"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-md mb-2 shadow-md shadow-white hover:w-full transition duration-300 ease-in-out hover:shadow-xl"
                style={{ width: "100%", height: "auto" }}
              />
              <h2 className="text-xl font- mb-2">{project.title}</h2>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-full flex items-center"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center"
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
          className="container mx-auto mt-28 mb-8 items-center lg:w-[50%] justify-center text-white"
          id="contact"
        >
          <div className="items-center text-center">
            <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-100"
            >
              Your Email Address
            </label>
            <input
              type="text"
              id="subject"
              className="p-2 w-full border rounded-md shadow-md"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-100"
            >
              Email Subject
            </label>
            <input
              type="text"
              id="subject"
              className="p-2 w-full border rounded-md shadow-md"
              placeholder="Enter your email subject"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-100"
            >
              Message
            </label>
            <textarea
              id="message"
              className="p-2 w-full border rounded-md shadow-md"
              rows={4}
              placeholder="Type your message here"
            />
          </div>

          {/* Send Button with Icon */}
          <div className="flex justify-center">
          <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
            <FaPaperPlane className="mr-2" />
            Send
          </button>
          </div>
        </div>
        <footer className=" py-6 mt-12 text-center border-t">
        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a
            href={`https://github.com/${user.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={`https://twitter.com/${user.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a href={`mailto:${user.email}`} className="text-white">
            <FaEnvelope size={24} />
          </a>
          <a
            href={`https://www.linkedin.com/in/${user.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Made with Love */}
        <p className="mt-4 text-gray-100">
          Made with <span className="text-red-500">&#x2764;&#xFE0E;</span> by OpenPortfolio
        </p>
      </footer>
      </div>
    </div>
  );
};

export default Theme2;
