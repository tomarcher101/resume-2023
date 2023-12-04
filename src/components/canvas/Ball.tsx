import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader from "./Loader";

interface BallProps {
  imgUrl: string;
}

interface BallCanvasProps {
  icon: string;
}

const Ball = ({ imgUrl }: BallProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={1.2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0.1, 0, 0.1]} intensity={1.2}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#ffffff"}
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal position={[0, 0, 1]} map={decal} rotation={[2 * Math.PI, 0, 6.25]}/>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
