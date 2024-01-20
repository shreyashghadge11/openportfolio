// PortfolioInformationCollection.tsx

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

export interface Project {
  id: number;
  name: string;
  image: string;
  demoLink: string;
  githubLink: string;
}

const PortfolioInformationCollection: React.FC<{
  data: {
    name: string;
    title: string;
    introduction: string;
    github: string;
    twitter: string;
    email: string;
    linkedin: string;
    resume: string;
    frontendTechStack: string;
    backendTechStack: string;
    devOpsTechStack: string;
    otherTools: string;
    projects: Project[];
  };
  onChange: (field: string, value: string | Project[]) => void;
}> = ({ data, onChange }) => {
  const handleInputChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(field, e.target.value);
  };

  const handleProjectChange = (
    field: string,
    value: string,
    projectId: number
  ) => {
    const updatedProjects = data.projects.map((project) =>
      project.id === projectId ? { ...project, [field]: value } : project
    );
    onChange("projects", updatedProjects);
  };

  const handleAddProject = () => {
    onChange("projects", [
      ...data.projects,
      { id: Date.now(), name: "", image: "", demoLink: "", githubLink: "" },
    ]);
  };

  const handleFileChange = (projectId: number, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProjects = data.projects.map((project) =>
          project.id === projectId ? { ...project, image: reader.result as string } : project
        );
        onChange("projects", updatedProjects);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProject = (projectId: number) => {
    const updatedProjects = data.projects.filter(
      (project) => project.id !== projectId
    );
    onChange("projects", updatedProjects);
  };
  console.log(data);

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => handleInputChange("name", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={(e) => handleInputChange("title", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your title"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="introduction"
          className="block text-sm font-medium text-gray-700"
        >
          Introduction
        </label>
        <textarea
          id="introduction"
          value={data.introduction}
          onChange={(e) => handleInputChange("introduction", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your introduction"
        />
      </div>
      <div className="mb-4 flex items-center ">
        <FaGithub className="text-gray-500 mr-2" />
        <label
          htmlFor="github"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          GitHub
        </label>
        <input
          type="text"
          id="github"
          value={data.github}
          onChange={(e) => handleInputChange("github", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your GitHub link"
        />
      </div>

      <div className="mb-4 flex items-center">
        <FaLinkedin className="text-blue-500 mr-2" />
        <label
          htmlFor="linkedin"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          LinkedIn
        </label>
        <input
          type="text"
          id="linkedin"
          value={data.linkedin}
          onChange={(e) => handleInputChange("linkedin", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your LinkedIn link"
        />
      </div>

      <div className="mb-4 flex items-center">
        <FaTwitter className="text-blue-400 mr-2" />
        <label
          htmlFor="twitter"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          Twitter
        </label>
        <input
          type="text"
          id="twitter"
          value={data.twitter}
          onChange={(e) => handleInputChange("twitter", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your Twitter link"
        />
      </div>

      <div className="mb-4 flex items-center">
        <FaFileAlt className="text-gray-600 mr-2" />
        <label
          htmlFor="resume"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          Resume
        </label>
        <input
          type="text"
          id="resume"
          value={data.resume}
          onChange={(e) => handleInputChange("resume", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your resume link"
        />
      </div>

      <div className="mb-4 flex items-center">
        <FaEnvelope className="text-red-500 mr-2" />
        <label
          htmlFor="email"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          value={data.email}
          onChange={(e) => handleInputChange("email", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4 flex items-center ">
        <label
          htmlFor="frontendTechStack"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          Frontend Skills
        </label>
        <input
          type="text"
          id="frontendTechStack"
          value={data.github}
          onChange={(e) => handleInputChange("frontendTechStack", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your Frontend Skills (comma separated)"
        />
      </div>
      <div className="mb-4 flex items-center ">
        <label
          htmlFor="backendTechStack"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          Backend Skills
        </label>
        <input
          type="text"
          id="backendTechStack"
          value={data.github}
          onChange={(e) => handleInputChange("backendTechStack", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your Backend Skills (comma separated)"
        />
      </div>
      <div className="mb-4 flex items-center ">
        <label
          htmlFor="devopsTechStack"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
          Devops Skills
        </label>
        <input
          type="text"
          id="devopsTechStack"
          value={data.github}
          onChange={(e) => handleInputChange("devopsTechStack", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your Devops Skills (comma separated)"
        />
      </div>
      <div className="mb-4 flex items-center ">
        <label
          htmlFor="otherTools"
          className="block pr-2 text-sm font-medium text-gray-700"
        >
            Other Tools
        </label>
        <input
          type="text"
          id="otherTools"
          value={data.github}
          onChange={(e) => handleInputChange("otherTools", e)}
          className="mt-1 p-2 w-full border rounded-md shadow-md"
          placeholder="Enter your Other Tools Skills (comma separated)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Projects
        </label>
        {data.projects?.map((project) => (
          <div key={project.id} className="mb-2 ">
            <label className="block text-sm font-medium text-gray-700">
              Project {project.id}
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  handleProjectChange("name", e.target.value, project.id)
                }
                className="p-2 w-1/3 border rounded-md shadow-md"
                placeholder="Project Name"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(project.id, e.target.files?.[0] || null)}
                className="p-2 w-1/3 border rounded-md shadow-md"
              />
              <input
                type="text"
                value={project.demoLink}
                onChange={(e) =>
                  handleProjectChange("demoLink", e.target.value, project.id)
                }
                className="p-2 w-1/3 border rounded-md shadow-md"
                placeholder="Demo Link"
              />
              <input
                type="text"
                value={project.githubLink}
                onChange={(e) =>
                  handleProjectChange("githubLink", e.target.value, project.id)
                }
                className="p-2 w-1/3 border rounded-md shadow-md"
                placeholder="GitHub Link"
              />
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="bg-red-500 text-white px-2 rounded-full shadow-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleAddProject}
          className="bg-green-500 text-white px-2 rounded-full shadow-md"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default PortfolioInformationCollection;
