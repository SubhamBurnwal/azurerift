import React from "react";
import Image from "next/image";

import chooseImg from "../../public/images/choose-img.png";

const WhyChooseUs = () => {
  return (
    <>
      <section className="choose-ue-area azure-theme pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="choose-title home-four-section-title">
                <span className="azure-highlight">Why Choose Us</span>
                <h2>
                  Accelerating Innovation with Azure-Powered Solutions
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="choose-card azure-card rounded-3"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span>
                  01 <i className="flaticon-cloud"></i>
                </span>
                <h3>Cloud Security Excellence</h3>
                <p>
                  Leverage cutting-edge cloud security protocols to protect your assets, ensuring data integrity and compliance.
                </p>
              </div>

              <div
                className="choose-card azure-card rounded-3"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <span>
                  02 <i className="flaticon-cloud-computing"></i>
                </span>
                <h3>Azure-Driven Scalability</h3>
                <p>
                  Scale effortlessly with Azure solutions that adapt to your evolving business needs, providing flexibility and growth.
                </p>
              </div>

              <div
                className="choose-card azure-card rounded-3"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <span>
                  03 <i className="flaticon-support"></i>
                </span>
                <h3>24/7 Cloud Support</h3>
                <p>
                  Our Azure-certified experts are available around the clock, ensuring your cloud infrastructure operates seamlessly.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="choose-img azure-shadow"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="800"
              >
                <Image src={chooseImg} alt="Azure Cloud Services" width={807} height={704} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
