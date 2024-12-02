"use client";

import { Environment } from "@react-three/drei";

import FloatingCan from "@/components/FloatingCan";
import { useRef } from "react";
import { Group } from "three";

type Props = {};

export default function Scene({}: Props) {
  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1Group = useRef<Group>(null);
  const can2Group = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  return (
    <group ref={groupRef}>
      <FloatingCan
        ref={can1Ref}
        flavor="blackCherry"
        floatSpeed={FLOAT_SPEED}
      />
      
      <FloatingCan
        ref={can2Ref}
        flavor="lemonLime"
        floatSpeed={FLOAT_SPEED}
      />
      
      <FloatingCan
        ref={can3Ref}
        flavor="grape"
        floatSpeed={FLOAT_SPEED}
      />
      
      <FloatingCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />
      
      <FloatingCan
        ref={can5Ref}
        flavor="watermelon"
        floatSpeed={FLOAT_SPEED}
      />
      

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
