import React from "react";
import Image from "next/image";

import teamShape from "../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "/images/team/neelanjan.png",
    name: "Neelanjan Chakraborty",
    designation: "CEO & Founder",
    aosDelay: "100",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/anurag.png",
    name: "Anurag Moharana",
    designation: "DevOps Architect",
    aosDelay: "200",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/alok.png",
    name: "Aloknath",
    designation: "Software Developer",
    aosDelay: "300",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/satyajit.png",
    name: "Satyajit Sahoo",
    designation: "Backend Developer",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/deb.png",
    name: "Debashsih Mohapatra",
    designation: "Data Scientist",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },

    ],
  },
  {
    image: "/images/team/team1.png",
    name: "Omar Faruq",
    designation: "Frontend Devloper ( React)",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },

    ],
  },
  {
    image: "/images/team/team2.png",
    name: "Javier Castillo",
    designation: "UI UX Designer",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },

    ],
  },
  {
    image: "/images/team/team3.png",
    name: "Helen S. Guzman",
    designation: "Backend Devloper ( Node.js)",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },

    ],
  },
];

const Team = () => {
  return (
    <>
      <section className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Team</span>
            <h2>Meet Our Expert Team</h2>
            <p>
            Our team consists of highly skilled professionals dedicated to delivering the best results for our clients.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData &&
              teamData.slice(0, 8).map((value, i) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={140}
                        height={140}
                      />

                      <div className="team-img">
                        <Image
                          src={teamShape}
                          alt="Image"
                          width={208}
                          height={198}
                        />
                      </div>
                    </div>

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>

                      <ul>
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.url} target="_blank">
                              <i className={value.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
