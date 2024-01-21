// PortfolioInformationCollection.tsx

import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileAlt,
  FaEnvelope,
  FaAngleDoubleLeft,
} from 'react-icons/fa';

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
    profileImage: string;
    github: string;
    twitter: string;
    email: string;
    linkedin: string;
    resume: string;
    skills: string;
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
    onChange('projects', updatedProjects);
  };

  const handleAddProject = () => {
    onChange('projects', [
      ...data.projects,
      { id: Date.now(), name: '', image: '', demoLink: '', githubLink: '' },
    ]);
  };

  const handleFileChange = (projectId: number, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProjects = data.projects.map((project) =>
          project.id === projectId
            ? { ...project, image: reader.result as string }
            : project
        );
        onChange('projects', updatedProjects);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange('profileImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProject = (projectId: number) => {
    const updatedProjects = data.projects.filter(
      (project) => project.id !== projectId
    );
    onChange('projects', updatedProjects);
  };
  console.log(data);

  return (
    <div className='font-serif'>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          value={data.name}
          onChange={(e) => handleInputChange('name', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your name'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='profilePicture'
          className='block text-sm font-medium text-gray-700'
        >
          Profile Picture
        </label>
        <input
          type='file'
          accept='image/*'
          onChange={(e) =>
            handleProfileImageChange(e.target.files?.[0] || null)
          }
          className='w-full p-2 border rounded-md shadow-md'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700'
        >
          Title
        </label>
        <input
          type='text'
          id='title'
          value={data.title}
          onChange={(e) => handleInputChange('title', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your title'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='introduction'
          className='block text-sm font-medium text-gray-700'
        >
          Introduction
        </label>
        <textarea
          id='introduction'
          value={data.introduction}
          onChange={(e) => handleInputChange('introduction', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your introduction'
        />
      </div>
      <div className='flex items-center mb-4 '>
        <FaGithub className='mr-2 text-gray-500' />
        <label
          htmlFor='github'
          className='block pr-2 text-sm font-medium text-gray-700'
        >
          GitHub
        </label>
        <input
          type='text'
          id='github'
          value={data.github}
          onChange={(e) => handleInputChange('github', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your GitHub link'
        />
      </div>

      <div className='flex items-center mb-4'>
        <FaLinkedin className='mr-2 text-blue-500' />
        <label
          htmlFor='linkedin'
          className='block pr-2 text-sm font-medium text-gray-700'
        >
          LinkedIn
        </label>
        <input
          type='text'
          id='linkedin'
          value={data.linkedin}
          onChange={(e) => handleInputChange('linkedin', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your LinkedIn link'
        />
      </div>

      <div className='flex items-center mb-4'>
        <FaTwitter className='mr-2 text-blue-400' />
        <label
          htmlFor='twitter'
          className='block pr-2 text-sm font-medium text-gray-700'
        >
          Twitter
        </label>
        <input
          type='text'
          id='twitter'
          value={data.twitter}
          onChange={(e) => handleInputChange('twitter', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your Twitter link'
        />
      </div>

      <div className='flex items-center mb-4'>
        <FaFileAlt className='mr-2 text-gray-600' />
        <label
          htmlFor='resume'
          className='block pr-2 text-sm font-medium text-gray-700'
        >
          Resume
        </label>
        <input
          type='text'
          id='resume'
          value={data.resume}
          onChange={(e) => handleInputChange('resume', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your resume link'
        />
      </div>

      <div className='flex items-center mb-4'>
        <FaEnvelope className='mr-2 text-red-500' />
        <label
          htmlFor='email'
          className='block pr-2 text-sm font-medium text-gray-700'
        >
          Email
        </label>
        <input
          type='text'
          id='email'
          value={data.email}
          onChange={(e) => handleInputChange('email', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your email'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='skills'
          className='block text-sm font-medium text-gray-700'
        >
          Skills
        </label>
        <textarea
          id='skills'
          value={data.skills}
          onChange={(e) => handleInputChange('skills', e)}
          className='w-full p-2 mt-1 border rounded-md shadow-md'
          placeholder='Enter your Skills (Frontend, Backend, DevOps, Other Tools comma separated)'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>
          Projects
        </label>
        {data.projects?.map((project) => (
          <div key={project.id} className='py-4 mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Project
            </label>

            <div className='flex flex-col space-y-2'>
              <input
                type='text'
                value={project.name}
                onChange={(e) =>
                  handleProjectChange('name', e.target.value, project.id)
                }
                className='p-2 border rounded-md shadow-md'
                placeholder='Project Name'
              />

              <input
                type='file'
                accept='image/*'
                onChange={(e) =>
                  handleFileChange(project.id, e.target.files?.[0] || null)
                }
                className='p-2 border rounded-md shadow-md'
              />

              <input
                type='text'
                value={project.demoLink}
                onChange={(e) =>
                  handleProjectChange('demoLink', e.target.value, project.id)
                }
                className='p-2 border rounded-md shadow-md'
                placeholder='Demo Link'
              />

              <input
                type='text'
                value={project.githubLink}
                onChange={(e) =>
                  handleProjectChange('githubLink', e.target.value, project.id)
                }
                className='p-2 border rounded-md shadow-md'
                placeholder='GitHub Link'
              />

              <button
                onClick={() => handleDeleteProject(project.id)}
                className='w-1/4 px-2 py-1 text-white bg-red-500 rounded-full shadow-md'
              >
                <FaAngleDoubleLeft className='inline-block mr-2' /> Delete
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={handleAddProject}
          className='bg-[#5E17EB] text-white px-2 py-2 rounded-full shadow-md'
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default PortfolioInformationCollection;
