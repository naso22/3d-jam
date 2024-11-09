"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ParticleCube() {
  const ParticleCube: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    // 立方体の頂点位置を取得する
    const spheres = useMemo(() => {
      const sphereData = [];

      // 立方体の寸法
      const size = 4;
      const divisions = 10; // 粒子の密度を決定
      const step = size / divisions;

      // 各軸の範囲に沿って粒子を配置
      for (let x = -size / 2; x <= size / 2; x += step) {
        for (let y = -size / 2; y <= size / 2; y += step) {
          for (let z = -size / 2; z <= size / 2; z += step) {
            // 立方体の表面（x, y, zのいずれかが境界）にのみ粒子を配置
            if (
              Math.abs(x) === size / 2 ||
              Math.abs(y) === size / 2 ||
              Math.abs(z) === size / 2
            ) {
              // ランダムな色を生成（RGB形式）
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

    // 立方体を回転させる
    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.rotation.x += 0.001;
        groupRef.current.rotation.y += 0.001;
      }
    });

    return (
      <group ref={groupRef} position={[2, 0, 0]}>
        {spheres.map((sphere, index) => (
          <mesh key={index} position={sphere.position as [number, number, number]}>
            <sphereGeometry args={[0.01, 16, 16]} />
            <meshStandardMaterial color={sphere.color} />
          </mesh>
        ))}
      </group>
    );
  };
  return (
    <Canvas
      //   className={styles.canvas}
      camera={{ position: [0, 0, 5.7] }}
      style={{ height: "700px" }}
    >
      <ParticleCube />
    </Canvas>
  );
}
