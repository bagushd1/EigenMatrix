'use client';

import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CONSTELLATION_NODES } from '../data/constellationData';
import { NodeItem } from './NodeItem';
import { ConnectionLines } from './ConnectionLines';

export function ConstellationGraph() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    // Rotate matrix universe slowly in idle
    if (!hoveredNodeId) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Matrix Orbital Ring Guides */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.2, 4.22, 64]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.35} side={2} toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <ringGeometry args={[5.4, 5.42, 64]} />
        <meshBasicMaterial color="#B026FF" transparent opacity={0.25} side={2} toneMapped={false} />
      </mesh>

      {/* Network Edges / Connections */}
      <ConnectionLines hoveredNodeId={hoveredNodeId} />

      {/* Constellation Geometric Nodes (No Text) */}
      {CONSTELLATION_NODES.map((node) => (
        <NodeItem
          key={node.id}
          node={node}
          isHovered={hoveredNodeId === node.id}
          onHover={setHoveredNodeId}
        />
      ))}
    </group>
  );
}
