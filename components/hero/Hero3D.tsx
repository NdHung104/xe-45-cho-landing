"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

function Bus() {
  const { scene } = useGLTF("/model/montreal-bus.glb");
  return <primitive object={scene} scale={2.2} position={[0, -0.6, 0]} />;
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        gl={{ alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0); // transparent
        }}
        camera={{ position: [0, 1.6, 7], fov: 35 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Stage environment="city">
          <Bus />
        </Stage>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/model/montreal-bus.glb");
