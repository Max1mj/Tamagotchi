import React from "react";

const Scene = () => {
  return (
    <>
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry args={[100, 100, 100, 100]} />
        <meshBasicMaterial color={"#95DEE3"} />
      </mesh>
    </>
  );
};

export default Scene;
