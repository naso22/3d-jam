"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ParticleCube() {
  const ParticleCube: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    const spheres = useMemo(() => {
      const sphereData = [];

      const size = 4;
      const divisions = 10;
      const step = size / divisions;

      for (let x = -size / 2; x <= size / 2; x += step) {
        for (let y = -size / 2; y <= size / 2; y += step) {
          for (let z = -size / 2; z <= size / 2; z += step) {
            if (
              Math.abs(x) === size / 2 ||
              Math.abs(y) === size / 2 ||
              Math.abs(z) === size / 2
            ) {
              const color = new THREE.Color(
                Math.random(),
                Math.random(),
                Math.random()
              ); // ランダムな色
              sphereData.push({ position: [x, y, z], color: color });
            }
          }
        }
      }

      return sphereData;
    }, []);

    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.rotation.x += 0.001;
        groupRef.current.rotation.y += 0.001;
      }
    });

    return (
      <group ref={groupRef} position={[2, 0, 0]}>
        {spheres.map((sphere, index) => (
          <mesh
            key={index}
            position={sphere.position as [number, number, number]}
          >
            <sphereGeometry args={[0.01, 16, 16]} />
            <meshStandardMaterial color={sphere.color} />
          </mesh>
        ))}
      </group>
    );
  };
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5] }}
      style={{ height: "90vh" }}
    >
      <ParticleCube />
    </Canvas>
  );
}
