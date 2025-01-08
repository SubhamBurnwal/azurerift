import React from "react";
import Link from "next/link";

const MakeYourBusiness = () => {
  return (
    <>
      <section className="business-area business-area-four ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
            <div className="business-content">
              <h2>Empower Your Business with Cutting-Edge Solutions</h2>
            </div>

            <div className="single-business">
              <i className="flaticon-chip"></i>
              <h3>Enhance Cybersecurity with AI Automation</h3>
              <p>
                Unlock new levels of protection and efficiency by integrating AI-driven cybersecurity solutions. Safeguard your digital assets with ease.
              </p>
            </div>

            <div className="single-business">
              <i className="flaticon-blockchain"></i>
              <h3>Building a Stronger, Unified Community</h3>
              <p>
                Join forces with like-minded innovators to drive meaningful change and foster collaboration in a vibrant, goal-oriented environment.
              </p>
            </div>
                
              <div className="business-btn">
                <Link href="/about-2" className="default-btn">
                  Know Details
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">95%</span>
                    </h2>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">90%</span>
                    </h2>
                    <p>Design</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">85%</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">80%</span>
                    </h2>
                    <p>Award Win</p>
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
