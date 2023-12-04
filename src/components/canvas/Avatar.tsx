import { useEffect, useRef } from "react";
import {
  PerspectiveCamera,
  useAnimations,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";

const Avatar = () => {
  const group = useRef();
  const avatar = useGLTF("/avatar/62c7f76c48960be56e11f85f.glb");

  const { animations: sittingAnimation } = useFBX(
    "/avatar/animations/Sitting.fbx"
  );
  sittingAnimation[0].name = "sitting";

  const { actions } = useAnimations(sittingAnimation, group);

  useEffect(() => {
    actions["sitting"]?.reset().play();
  }, []);

  return (
    <mesh>
      <ambientLight intensity={2} />  
      <primitive object={avatar.scene} ref={group} position={[0, 0, 0]} rotation={[0.3, -0.3, 0]}/>
    </mesh>
  );
};

useGLTF.preload("/avatar/62c7f76c48960be56e11f85f.glb");

const AvatarCanvas = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
    >
      <PerspectiveCamera makeDefault position={[-0.1, 0.8, 3.3]} fov={40}/>
      <Suspense fallback={<Loader />}>
        <Avatar />
      </Suspense>
    </Canvas>
  );
};

export default AvatarCanvas;
