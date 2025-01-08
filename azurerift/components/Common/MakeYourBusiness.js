import React from "react";
import Link from "next/link";

const MakeYourBusiness = () => {
  return (
    <>
      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>Boost Your Business with AI-Powered Innovation</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>AI-Driven Automation for Cybersecurity</h3>
                <p>
                  Our AI solutions enhance your cybersecurity by automatically identifying threats, reducing human error, and enabling faster responses to potential breaches, keeping your business secure.
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>Join a Community of Visionary Innovators</h3>
                <p>
                  Be part of a growing network dedicated to harnessing the power of AI and data analytics to transform industries, create new opportunities, and drive business growth.
                </p>
              </div>

              <div className="business-btn">
                <Link href="/about-2" className="default-btn">
                  Learn More About Our Platform
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">95%</span>
                    </h2>
                    <p>Projects Successfully Completed</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">90%</span>
                    </h2>
                    <p>Design Excellence</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">85%</span>
                    </h2>
                    <p>Satisfied Clients</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">80</span>
                    </h2>
                    <p>Awards Won for Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeYourBusiness;
