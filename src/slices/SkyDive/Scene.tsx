"use client";

import FloatingCan from "@/components/FloatingCan";
import { Cloud, Clouds, Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type Props = {};

export default function Scene({}: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloud3Ref = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan ref={canRef}></FloatingCan>
      </group>
      
      <Clouds>
        <Cloud/>
      </Clouds>

      {/* <OrbitControls /> */}

      <ambientLight intensity={2} color="#9DDEFA" />
      <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />
    </group>
  );
}
