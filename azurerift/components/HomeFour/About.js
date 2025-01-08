import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../public/images/about-img.png";

const About = () => {
  return (
    <>
      <div className="about-area about-area-four pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Image src={aboutImg} alt="Image" width={490} height={420} />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <span>About Us</span>
                <h2>
                  Delivering Excellence in Every Project We Undertake
                </h2>
                <p>
                  Our mission is to drive success by offering innovative solutions tailored to meet the unique needs of our clients. With a strong commitment to quality and attention to detail, we ensure every project exceeds expectations.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Robust Performance Optimization
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Scalable and Flexible Solutions
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Cutting-Edge Technology Integration
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Reliable Infrastructure Support
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        24/7 Dedicated Customer Service
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Streamlined Workflow Processes
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about" className="default-btn">
                  Discover More
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
