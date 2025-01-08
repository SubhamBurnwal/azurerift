import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../public/images/about-img-three.png";

const About = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
               <div className="about-img">
                 <Image src={aboutImg} alt="Image" width={375} height={440} />
               </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About Azure Rift</span>
                <h2>
                  A Multi-Domain Consultancy Firm Providing Innovative Solutions
                </h2>
                <p>
                  Azure Rift is a dynamic consultancy firm offering cutting-edge solutions across various domains. We specialize in software development, AI & ML solutions, digital marketing, animation, VFX, robotics, drones, cybersecurity, and blockchain. Founded in 2018 as a startup under the SACC India Startup Accelerator, we are driven by a passion for innovation and excellence. Our founders, Nessan Irani and Neelanjan Chakraborty, have built a team that is committed to delivering results that exceed expectations.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Expert Software Development Services
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Cutting-Edge AI & ML Solutions
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Advanced Digital Marketing Strategies
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        High-Quality Animation & VFX Services
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Robotics & Drone Technologies
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Robust Cybersecurity & Blockchain Solutions
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
