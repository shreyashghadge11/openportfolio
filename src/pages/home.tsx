// LandingPage.tsx

import React from "react";
import landingImg from "../assets/landing.png";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="text-center mx-auto w-[60%] ">
          <div className="rounded-md overflow-hidden shadow-lg">
            <img
              src={landingImg}
              alt="Landing Background"
              className="rounded-md border border-white"
            />
          </div>

          <div className="">
            <div>
              <h1 className="text-4xl font-bold pb-1 pt-5 bg-gradient-to-r from-green-600 via-green-500 to-green-400 inline-block text-transparent bg-clip-text">
                Create beautiful Portfolios
              </h1>
              <h1 className="text-4xl font-sans mb-4 py-1">
                using OpenPortfolio
              </h1>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded-full">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
