import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3 } from "three";

const Avatar = ({ lookTarget, lerpSpeed}) => {
  const meshRef = useRef();
  const mixerRef = useRef();
  const { scene } = useGLTF("/models/avatar.glb");

  // Load and play idle animation
  useEffect(() => {
    scene.name = "Avatar";
    scene.castShadow = true;
    scene.receiveShadow = true;
    
    window._s = scene.parent.parent;
    window._h = scene.getObjectByName("Head");
    
    const loadAnimation = async () => {
      try {
        // Import the loaders dynamically
        const THREE = await import("three");
        const { FBXLoader } = await import(
          "three/examples/jsm/loaders/FBXLoader"
        );

        const fbxLoader = new FBXLoader();
        fbxLoader.load("/animations/Waving.fbx", (fbx) => {
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
        console.error("Error loading animation:", error);
      }
    };
    const composeScene = async () => {
        const headBone = scene.getObjectByName("Head");
        if (headBone) {
          headBone.rotation.set(0, 0, 0);
        }
        const boundingBox = new Box3().setFromObject(scene.children[0]);
        const height = boundingBox.max.y - boundingBox.min.y;
        console.log("Object Height:", height);
    }

    loadAnimation();
    composeScene();

    // Cleanup function
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [scene]);

  useFrame((state, delta) => {
    // Update animation mixer
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    const headBone = scene.getObjectByName("Head");
    if (headBone) {
      const targetRotationY = lookTarget[0] * 0.5;
      const targetRotationX = -lookTarget[1] * 0.3;

      if (!headBone._lerpSpeed) headBone._lerpSpeed = lerpSpeed;
      
      const easeInOut = (t) => t * (3 - 2 * t);
      headBone._lerpSpeed += delta * 0.05;
      const lerp = (target, current) => current + (target - current) * easeInOut(headBone._lerpSpeed);
      headBone.rotation.y = lerp(targetRotationY, headBone.rotation.y);
      headBone.rotation.x = lerp(targetRotationX, headBone.rotation.x);

      headBone.rotation.x = Math.max(-0.5, Math.min(0.5, headBone.rotation.x));
      headBone.rotation.y = Math.max(-0.8, Math.min(0.8, headBone.rotation.y));
    }
  });
  
  return (
    <group
      ref={meshRef}
      name={"AvatarContainer"}
      position={[0,0,0]}
      rotation={[0,0,0]}
      scale={2}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Avatar;
