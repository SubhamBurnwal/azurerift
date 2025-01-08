import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const ServicesStyleTwo = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expert Services Powered by AI</h2>
            <p>
              Explore a range of AI-driven solutions designed to automate, optimize, and scale your business. Our innovative services are tailored to meet the evolving needs of modern businesses.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-chip"></i>
                <h3>
                  <Link href="/services/service-details/">
                    AI-Driven Robotics & Drones
                  </Link>
                </h3>
                <p>
                  Enhance efficiency and precision with our AI-powered robotics and drone solutions, designed to automate complex tasks and deliver unparalleled performance.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-vr"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Virtual Reality Solutions
                  </Link>
                </h3>
                <p>
                  Immerse your business in cutting-edge virtual reality environments that boost customer engagement and provide interactive, realistic experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Blockchain Development
                  </Link>
                </h3>
                <p>
                  Leverage the power of blockchain technology to create secure, transparent, and scalable systems that transform your business operations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-target"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Advanced Image Processing
                  </Link>
                </h3>
                <p>
                  Unlock the potential of your data with AI-enhanced image processing tools that automate visual recognition, analysis, and decision-making.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-choice"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Smart Order Management
                  </Link>
                </h3>
                <p>
                  Optimize and streamline your supply chain with intelligent order management solutions, powered by AI to predict demand, manage inventory, and automate fulfillment.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <Link href="/services/service-details/">
                    Machine Learning Solutions
                  </Link>
                </h3>
                <p>
                  Harness the power of machine learning to analyze vast amounts of data, uncover insights, and drive intelligent decision-making across all aspects of your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default ServicesStyleTwo;
