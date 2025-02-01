import React from "react";
import { Icon } from "@iconify/react";
import viteIcon from "@iconify/icons-logos/vitejs";
import reactIcon from "@iconify/icons-logos/react";
import tailwindIcon from "@iconify/icons-logos/tailwindCss-Icon";

const About = ({ sharedBasicInfo, resumeBasicInfo }) => {
  // Construct the profile picture path
  const profilepic = sharedBasicInfo?.image
    ? "images/" + sharedBasicInfo.image // Resolves to "images/myProfile.png"
    : "images/placeholder.jpg"; // Fallback image

  const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : "";
  const about = resumeBasicInfo ? resumeBasicInfo.description : "";

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-text-charcoal-gray mb-8 text-center">
          <span>{sectionName}</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Image and Icons Section */}
          <div className="flex flex-col gap-10 h-full w-full md:w-1/4 relative bg-white rounded-lg shadow-md p-4">
            <div className="">
              <img
                className="h-1/2 w-full rounded-lg"
                src={profilepic}
                alt="Avatar"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "images/placeholder.jpg"; // Fallback on error
                }}
              />
            </div>
            <div className="w-full h-full flex justify-center items-center gap-4">
              <Icon
                icon={viteIcon}
                className="text-4xl text-accent-silver cursor-pointer hover:text-hover-light-silver"
              />
              <Icon
                icon={reactIcon}
                className="text-4xl text-accent-emerald-green cursor-pointer hover:text-hover-light-silver"
              />
              <Icon
                icon={tailwindIcon}
                className="text-4xl text-accent-silver cursor-pointer hover:text-hover-light-silver"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-3/5">
            <div className="flex justify-center gap-2 bg-text-charcoal-gray rounded-t-lg p-2">
              <span className="text-green-500 text-xl">●</span>
              <span className="text-yellow-500 text-xl">●</span>
              <span className="text-red-500 text-xl">●</span>
            </div>
            <div className="bg-white p-8 rounded-b-lg shadow-md">
              <div className="font-trebuchet text-justify text-lg">
                <p className="text-xl font-medium text-text-charcoal-gray mb-4"></p>
                <p className="text-text-dark-gray">{about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
