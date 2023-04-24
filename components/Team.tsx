import React from "react";
import TeamCard from "./TeamCard";

const team = [
  {
    name: "Arush Panwar",
    role: "Full Stack Developer",
    bio: "Allrounder",
    avatarSrc: "/Images/Team/Arush.jpg",
  },
  {
    name: "Dhruv Rajak",
    role: "Front End Developer and UI/UX Designer ",
    bio: "I like to design and code",
    avatarSrc: "/Images/Team/Dhruv.jpg",
  },
  {
    name: "Sahil Rathi",
    role: "Back End & ML Developer",
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
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl tracking-tight font-medium text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            A Team of Four with bespoke expertise in their following fields.{" "}
            <br /> We focus on adding new functionalities along with maintaining
            the beauty of the product.
          </p>
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
    </section>
  );
};

export default Team;
