import React from "react";
import Image from "next/image";

const partnerData = [
  {
    image: "/images/brands/brand1.svg",
    url: "#",
    aosDelay: "100",
  },
  {
    image: "/images/brands/brand2.svg",
    url: "#",
    aosDelay: "200",
  },
  {
    image: "/images/brands/brand3.svg",
    url: "#",
    aosDelay: "300",
  },
  {
    image: "/images/brands/brand4.svg",
    url: "#",
    aosDelay: "400",
  },
  {
    image: "/images/brands/brand5.svg",
    url: "#",
    aosDelay: "500",
  },
  {
    image: "/images/brands/brand6.svg",
    url: "#",
    aosDelay: "600",
  },
  {
    image: "/images/brands/brand7.svg",
    url: "#",
    aosDelay: "700",
  },
  {
    image: "/images/brands/brand8.svg",
    url: "#",
    aosDelay: "800",
  },
  {
    image: "/images/brands/brand9.svg",
    url: "#",
    aosDelay: "900",
  },
  {
    image: "/images/brands/brand10.svg",
    url: "#",
    aosDelay: "1000",
  },
];

const Partner = () => {
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <div className="brand-list">
            {partnerData &&
              partnerData.map((value, i) => (
                <div
                  className="single-brand"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <a href={value.url} target="_blank">
                    <Image
                      src={value.image}
                      alt="Image"
                      width={130}
                      height={80}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
