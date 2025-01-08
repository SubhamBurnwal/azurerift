import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer3.png";

const HealthCare = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={620} height={445} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Health Care</h3>
            <p>
              Revolutionizing healthcare with cutting-edge technologies to enhance patient care and operational efficiency.
            </p>
            <p>
              Our solutions harness the power of AI, machine learning, and data analytics to improve diagnostics, personalize treatments, and streamline healthcare operations for better patient outcomes.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    AI-Powered Diagnostics
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Personalized Medicine
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Remote Patient Monitoring
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Data-Driven Insights
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Healthcare Automation
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Operational Efficiency
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services" className="default-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthCare;
