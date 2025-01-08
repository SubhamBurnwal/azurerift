import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../public/images/offer4.png";

const Manufacturing = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Manufacturing</h3>
            <p>
              Harness the power of cutting-edge technology to revolutionize manufacturing processes and drive operational excellence.
            </p>
            <p>
              From automation to smart systems, our solutions help manufacturers boost productivity, enhance efficiency, and reduce costs while maintaining quality and safety standards.
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Process Automation
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Innovation in Production
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Sustainable Practices
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Operational Efficiency
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Data-Driven Decisions
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Quality Assurance
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
            <Image src={offerImg} alt="Image" width={526} height={445} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manufacturing;
