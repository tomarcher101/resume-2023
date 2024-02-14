import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
  const ref = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (hovered) {
      ref.current.rotation.y += 3 * delta;
    }
  });

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={1.2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0.1, 0, 0.1]} intensity={1.2} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        ref={ref}
      >
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color={"#ffffff"}
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
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
