import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, useAnimations } from "@react-three/drei";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import Avatar from "../Common/Avatar";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  const [lookTarget, setLookTarget] = useState([0.5,0,0]);
  const [camera, setCamera] = useState({
    position: [0.4, 3, 1.4],
    rotation: [0, 0.4, 0],
    fov: 64,
  });

  const mouse = useRef([0, 0]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const newPos = [
      (clientX / innerWidth) * 2 - 1,
      -(clientY / innerHeight) * 2 + 1,
    ];
    mouse.current = newPos
    setLookTarget(mouse.current);
  };


  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="main-banner-area main-banner-area-four"
        onMouseMove={handleMouseMove}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1 className="text-4xl font-bold mb-6">
                  Unlock Business Insights with AI-Powered Data Solutions
                </h1>

                <p className="text-lg mb-8">
                  Drive operational efficiency and uncover valuable insights by transforming unstructured data into actionable intelligence. Empower your team with cutting-edge AI technology.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/about" className="default-btn">
                    Learn More
                  </Link>

                  <Link href="/contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 w-full h-full overflow-visible">
              <Canvas
                camera={camera}
                className="h-96 md:h-128 lg:h-144"
                style={{ position: "relative", width: "200%", right: "50%", height: "500px" }}
              >
                {/* Enhanced lighting setup */}
                <ambientLight intensity={0.7} color="#a0d8ef" />{" "}
                {/* Soft blue ambient light */}
                <directionalLight
                  position={[5, 5, 5]}
                  intensity={1.6}
                  castShadow
                  color="#ffaaaa"
                />
                <directionalLight
                  position={[-15, 5, -5]}
                  intensity={1.4}
                  color="#a0d8ef" // Azure tint
                />
                {/* Back rim light */}
                <spotLight
                  position={[0, 2, -5]}
                  intensity={0.6}
                  color="#4fa3d1"
                  angle={0.5}
                  penumbra={0.5}
                />
                {/* Additional fill light for character */}
                <pointLight
                  position={[3, 1, 2]}
                  intensity={40.3}
                  color="#f0d8ef"
                  distance={10}
                />
                <Avatar lookTarget={lookTarget} initPosition={[0, 0, 0]} initRotation={[0, 0, 0]} lerpSpeed={0.1}/>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
