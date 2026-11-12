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
      {/* Outer Geodesic Bounding Polytope (Sacred Geometry / Topology) */}
      <mesh>
        <icosahedronGeometry args={[6.2, 1]} />
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.07} />
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
