import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer1.png";

const HeavyIndustry = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={370} height={390} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Heavy Industry</h3>
            <p>
              Transforming heavy industries with advanced technologies and automation to drive efficiency and innovation.
            </p>
            <p>
              Our solutions help industries like mining, construction, and energy maximize productivity, reduce costs, and enhance safety through intelligent systems and data-driven insights.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Industrial Automation
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Advanced Robotics
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Smart Manufacturing
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Predictive Maintenance
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Operational Efficiency
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Safety Innovations
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

export default HeavyIndustry;
