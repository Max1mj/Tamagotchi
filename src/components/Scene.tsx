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
        <meshBasicMaterial color={"#20C997"} />
      </mesh>
    </>
  );
};

export default Scene;
