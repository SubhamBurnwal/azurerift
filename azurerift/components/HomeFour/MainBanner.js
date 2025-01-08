import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei';
import Link from 'next/link';
import FsLightbox from 'fslightbox-react';


const Avatar = ({ mouse }) => {
  const meshRef = useRef();
  const mixerRef = useRef();
  const { nodes, materials, scene, animations } = useGLTF('/models/avatar.glb');
  
  // Load and play idle animation
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // Import the loaders dynamically
        const THREE = await import('three');
        const { FBXLoader } = await import('three/examples/jsm/loaders/FBXLoader');
        
        const fbxLoader = new FBXLoader();
        fbxLoader.load('/animations/Waving.fbx', (fbx) => {
          const animation = fbx.animations[0];
          
          if (animation) {
            // Create a new mixer if it doesn't exist
            if (!mixerRef.current) {
              mixerRef.current = new THREE.AnimationMixer(scene);
            }
            
            // Retarget the animation to your model's skeleton
            const clip = animation.clone();
            const action = mixerRef.current.clipAction(clip);
            
            // Configure the animation
            action.setEffectiveTimeScale(1);
            action.setEffectiveWeight(1);
            action.setLoop(THREE.LoopRepeat, Infinity);
            
            // Play the animation
            action.play();
          }
        });
      } catch (error) {
        console.error('Error loading animation:', error);
      }
    };

    loadAnimation();
    
    // Cleanup function
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [scene]);

  useEffect(() => {
    const headBone = scene.getObjectByName('Head');
    if (headBone) {
      headBone.rotation.set(0, 0, 0);
    }
  }, [scene]);

      useFrame((state, delta) => {
    const headBone = scene.getObjectByName('Head');
    if (headBone) {
      const targetRotationY = mouse.current[0] * 0.5;
      const targetRotationX = -mouse.current[1] * 0.3;
      
      headBone.rotation.y += (targetRotationY - headBone.rotation.y) * 0.1;
      headBone.rotation.x += (targetRotationX - headBone.rotation.x) * 0.1;
      
      headBone.rotation.x = Math.max(-0.5, Math.min(0.5, headBone.rotation.x));
      headBone.rotation.y = Math.max(-0.8, Math.min(0.8, headBone.rotation.y));
    }
    
    // Update animation mixer
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <group 
      ref={meshRef} 
      position={[0, -9, 0]}
      scale={7}
      rotation={[0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  const mouse = useRef([0, 0]);
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    mouse.current = [
      (clientX / innerWidth) * 2 - 1,
      -(clientY / innerHeight) * 2 + 1
    ];
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

            <div className="col-lg-6 w-full h-full">
              <Canvas
                camera={{ 
                  position: [0, 4, 7],
                  fov: 60,
                }}
                className="h-96 md:h-128 lg:h-144"
                style={{ position: 'relative', height:'500px' }}
              >
                {/* Enhanced lighting setup */}
                <ambientLight intensity={0.3} color="#a0d8ef" /> {/* Soft blue ambient light */}
                <directionalLight 
                  position={[5, 5, 5]} 
                  intensity={0.8} 
                  castShadow 
                  color="#ffffff"
                />
                <directionalLight 
                  position={[-5, 5, -5]} 
                  intensity={0.4}
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
                  position={[3, 0, 2]}
                  intensity={0.3}
                  color="#a0d8ef"
                  distance={10}
                />
                <Avatar mouse={mouse} />
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={false}
                  target={[0, 0, 0]}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;