import React from "react";
import TeamCard from "./TeamCard";

const team = [
  {
    name: "Arush Panwar",
    role: "Full Stack Developer",
    bio: "Allrounder",
    avatarSrc: "/Images/Team/Arush.jpg",
    socialLinks: {
      twitter: "https://twitter.com/panwar_arush",
      linkedin: "https://www.linkedin.com/in/arushpanwar/",
      github: "",
    },
  },
  {
    name: "Dhruv Rajak",
    role: "Front End Developer and UI/UX Designer ",
    bio: "I like to design and code",
    avatarSrc: "/Images/Team/Dhruv.jpg",
  },
  {
    name: "Sahil Rathi",
    role: "Prompt Engineer",
    bio: "I fill in wherever required",
    avatarSrc: "/Images/Team/Sahil.jpeg",
  },
  {
    name: "Chinmay Dorge",
    role: "Back End & ML Developer",
    bio: "Backbone",
    avatarSrc: "/Images/Team/Chinmay.jpg",
  },
];

interface Team {
  name: string;
  role: string;
  bio: string;
  avatarSrc: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamCardProps {
  team: Team;
}

const Team = () => {
  return (
    <section className="bg-white">
      <div className="py-20 px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl font-semibold text-neutral-800">
            Our Team
          </h2>
          <p className="font-light text-gray-700 lg:mb-16 sm:text-xl ">
            A Team of Four with bespoke expertise in their following fields.{" "}
            <br /> We focus on adding new functionalities along with maintaining
            the beauty of the product.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-12">
            <TeamCard
              name={"Dr. Niharika Anand"}
              role={"Supervisor"}
              bio={""}
              avatarSrc={
                "https://iiitl.ac.in/wp-content/uploads/2019/09/niharika-e1569760305721-800x800.jpeg"
              }
            />
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {team.map((team: Team) => (
              <TeamCard
                key={team.name}
                name={team.name}
                role={team.role}
                bio={team.bio}
                avatarSrc={team.avatarSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
