import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer2.png";

const Transportation = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Transportation</h3>
            <p>
              Revolutionizing the transportation industry through smart solutions and advanced technologies.
            </p>
            <p>
              Our services improve efficiency in logistics, mobility, and transportation systems by leveraging automation, data analytics, and real-time tracking for seamless operations.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Real-Time Tracking
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Autonomous Vehicles
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Fleet Optimization
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Sustainability
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Efficiency Boost
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Cost Reduction
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

        <div className="col-lg-6">
          <div className="industries-img right-img">
            <Image src={offerImg} alt="Image" width={644} height={445} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportation;
