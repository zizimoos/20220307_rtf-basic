import React from "react";

function Plane(props) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="peru" />
    </mesh>
  );
}

export default Plane;
