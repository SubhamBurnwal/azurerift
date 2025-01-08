import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Robotics & Drones",
    shortText:
      "Empowering industries with advanced robotics and drone technology to streamline operations and enhance productivity.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-vr",
    title: "Virtual Reality Solutions",
    shortText:
      "Creating immersive virtual experiences that drive engagement, innovation, and new possibilities for businesses.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-blockchain",
    title: "Blockchain Integration",
    shortText:
      "Secure and transparent blockchain solutions designed to revolutionize data management and transaction processes.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-target",
    title: "Image Processing Technologies",
    shortText:
      "Advanced image recognition and processing tools that empower businesses to automate tasks and extract valuable insights.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-choice",
    title: "Order Management Systems",
    shortText:
      "Streamlining order workflows and enhancing customer satisfaction through tailored order management solutions.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Machine Learning Platforms",
    shortText:
      "Harnessing the power of machine learning to unlock predictive analytics and drive data-driven decision-making.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <>
      <div className="offer-area offer-area-two offer-area-four pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Services</span>
            <h2>Comprehensive Solutions to Drive Your Business Forward</h2>
            <p>
              Our diverse range of services is designed to meet the evolving needs of modern enterprises, ensuring growth, efficiency, and technological advancement.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
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

export default Services;
