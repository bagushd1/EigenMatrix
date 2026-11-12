'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { ConstellationNode } from '../data/constellationData';

interface NodeItemProps {
  node: ConstellationNode;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export function NodeItem({ node, isHovered, onHover }: NodeItemProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.6;
  });

  return (
    <group position={node.position}>
      <Float
        speed={node.type === 'CORE_DOMAIN' ? 1.2 : 2.0}
        rotationIntensity={0.5}
        floatIntensity={0.7}
      >
        {/* Main Node Geometry */}
        <mesh
          ref={meshRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            onHover(node.id);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            onHover(null);
            document.body.style.cursor = 'auto';
          }}
          castShadow
        >
          {node.type === 'CORE_DOMAIN' ? (
            <icosahedronGeometry args={[node.size, 1]} />
          ) : node.type === 'PROJECT' ? (
            <octahedronGeometry args={[node.size, 0]} />
          ) : (
            <dodecahedronGeometry args={[node.size, 0]} />
          )}

          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={isHovered ? 2.2 : 0.7}
            roughness={0.08}
            metalness={0.92}
            toneMapped={false}
          />
        </mesh>

        {/* Glow Halo for Core Domains & Hovered Nodes */}
        {(node.type === 'CORE_DOMAIN' || isHovered) && (
          <mesh scale={1.35}>
            {node.type === 'CORE_DOMAIN' ? (
              <icosahedronGeometry args={[node.size, 1]} />
            ) : (
              <sphereGeometry args={[node.size, 16, 16]} />
            )}
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={isHovered ? 0.65 : 0.3}
              wireframe
              toneMapped={false}
            />
          </mesh>
        )}
      </Float>
    </group>
  );
}
