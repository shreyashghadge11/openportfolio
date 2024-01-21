// LandingPage.tsx

import React from "react";
import landingImg from "../assets/landing.png";
import backgroundImage from "../assets/backgroundImage.jpg";
import { FiGithub } from "react-icons/fi";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div
        className="container mx-auto mt-0 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center mx-auto w-[60%] pt-10">
          <div className="rounded-md overflow-hidden  shadow-md shadow-[#5E17EB]">
            <img
              src={landingImg}
              alt="Landing Background"
              className="rounded-md border border-white"
            />
          </div>

          <div className="">
            <div>
              <h1 className="text-4xl font-bold pb-1 pt-5 bg-gradient-to-r from-[#5E17EB] via-indigo-600 to-indigo-400 inline-block text-transparent bg-clip-text">
                Create beautiful Portfolios
              </h1>
              <h1 className="text-4xl font-sans mb-4 py-1">
                using OpenPortfolio
              </h1>
            </div>
            <div className="flex justify-center">
              <div>
                <button className="bg-[#5E17EB] text-white py-2 px-4 rounded-full">
                  Try Now
                </button>
              </div>
              <div className="ml-4">
                <button className="bg-white text-[#5E17EB] py-2 px-4 rounded-full border border-[#5E17EB]">
                  <FiGithub className="inline-block mr-2" />
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
