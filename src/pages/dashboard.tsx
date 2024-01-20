// Dashboard.tsx

import React, { useState } from "react";
import Theme1 from "../components/theme1";
import PortfolioInformationCollection from "../components/informationCollection";
import { Project } from "../components/informationCollection";

interface PortfolioData {
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
    }

const Dashboard: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    name: "",
    title: "",
    introduction: "",
    github: "",
    twitter: "",
    email: "",
    linkedin: "",
    resume: "",
    frontendTechStack: "",
    backendTechStack: "",
    devOpsTechStack: "",
    otherTools: "",
    projects: [{ id: 1, name: "", image: "", demoLink: "", githubLink: "" }],
  });

  const [selectedTheme, setSelectedTheme] = useState("theme1");

  const handleInputChange = (field: string, value: string) => {
    setPortfolioData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  const handleNextTheme = () => {};

  const handlePrevTheme = () => {};

  const renderThemePreview = () => {
    switch (selectedTheme) {
      case "theme1":
        return <Theme1 />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto pt-8 grid grid-cols-12 gap-4 min-height-[90vh]">
      {/* <div className="col-span-0 mb-8 p-4 border-r min-h-[90vh] shadow-md"><PortfolioInformationCollection data={portfolioData} onChange={()=>{}}/></div> */}

      <div className="col-span-12">
        {renderThemePreview()}

        {/* <div className="fixed bottom-0 w-full bg-white p-4 justify-between">
          <button
            onClick={handlePrevTheme}
            className="bg-gray-500 text-white px-4 py-2 rounded-full mr-4 shadow-md"
          >
            Prev Theme
          </button>
          <button
            onClick={handleNextTheme}
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md"
          >
            Next Theme
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
