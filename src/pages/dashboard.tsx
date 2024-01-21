// Dashboard.tsx

import React, { useState } from 'react';
import Theme1 from '../components/theme1';
import PortfolioInformationCollection from '../components/informationCollection';
import { Project } from '../components/informationCollection';
import Theme2 from '../components/theme2';

export interface PortfolioData {
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
}

const Dashboard: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    name: '',
    title: '',
    introduction: '',
    profileImage: '',
    github: '',
    twitter: '',
    email: '',
    linkedin: '',
    resume: '',
    skills: '',
    projects: [{ id: 1, name: '', image: '', demoLink: '', githubLink: '' }],
  });

  const themes = ['theme1', 'theme2'];
  const [selectedTheme, setSelectedTheme] = useState('1');

  const handleInputChange = (field: string, value: string | Project[]) => {
    setPortfolioData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    console.log(portfolioData);
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  const handleNextTheme = () => {
    const index = themes.indexOf('theme' + selectedTheme);
    if (index < themes.length - 1) {
      setSelectedTheme((index + 2).toString());
    } else {
      setSelectedTheme('1');
    }
  };

  const handlePrevTheme = () => {
    const index = themes.indexOf('theme' + selectedTheme);
    if (index > 0) {
      setSelectedTheme(index.toString());
    } else {
      setSelectedTheme(themes.length.toString());
    }
  };

  const renderThemePreview = () => {
    const theme_ = 'theme' + selectedTheme;
    console.log(theme_);
    switch (theme_) {
      case 'theme1':
        return <Theme1 portfolioData={portfolioData} />;
      case 'theme2':
        return <Theme2 portfolioData={portfolioData} />;
      default:
        return null;
    }
  };

  return (
    <div className='container mx-auto pt-8 grid grid-cols-12 gap-4 min-height-[90vh]'>
      <div className='col-span-4 mb-8 p-4 border-r min-h-[90vh] shadow-md shadow-[#5E17EB]'>
        <PortfolioInformationCollection
          data={portfolioData}
          onChange={handleInputChange}
        />
      </div>

      <div className='col-span-8'>
        {renderThemePreview()}

        <div className='fixed bottom-0 justify-between w-full p-4 bg-transparent'>
          <button
            onClick={handlePrevTheme}
            className='px-4 py-2 mr-4 text-white bg-gray-500 rounded-full shadow-md'
          >
            Prev Theme
          </button>
          <button
            onClick={handleNextTheme}
            className='bg-[#5E17EB] text-white px-4 py-2 rounded-full shadow-md'
          >
            Next Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
