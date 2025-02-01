import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./Scene";
import { CameraControls } from "@react-three/drei";

const Experience = () => {
  return (
    <Canvas gl={{ pixelRatio: 2 }}>
      <CameraControls />
      <Scene />
    </Canvas>
  );
};

export default Experience;
