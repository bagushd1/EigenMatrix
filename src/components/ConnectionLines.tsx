'use client';

import React, { useMemo } from 'react';
import { QuadraticBezierLine } from '@react-three/drei';
import { CONSTELLATION_NODES, ConstellationNode } from '../data/constellationData';

interface ConnectionLinesProps {
  hoveredNodeId: string | null;
}

interface Edge {
  id: string;
  source: ConstellationNode;
  target: ConstellationNode;
  mid: [number, number, number];
}

export function ConnectionLines({ hoveredNodeId }: ConnectionLinesProps) {
  const edges = useMemo(() => {
    const nodeMap = new Map<string, ConstellationNode>();
    CONSTELLATION_NODES.forEach((n) => nodeMap.set(n.id, n));

    const edgeList: Edge[] = [];
    const seen = new Set<string>();

    CONSTELLATION_NODES.forEach((source) => {
      source.connections.forEach((targetId) => {
        const target = nodeMap.get(targetId);
        if (!target) return;

        const key = [source.id, target.id].sort().join('---');
        if (seen.has(key)) return;
        seen.add(key);

        const midX = (source.position[0] + target.position[0]) / 2;
        const midY = (source.position[1] + target.position[1]) / 2 + 0.3;
        const midZ = (source.position[2] + target.position[2]) / 2;

        edgeList.push({
          id: key,
          source,
          target,
          mid: [midX, midY, midZ],
        });
      });
    });

    return edgeList;
  }, []);

  return (
    <group>
      {edges.map((edge) => {
        const isConnectedToHovered =
          hoveredNodeId !== null &&
          (edge.source.id === hoveredNodeId || edge.target.id === hoveredNodeId);

        return (
          <QuadraticBezierLine
            key={edge.id}
            start={edge.source.position}
            end={edge.target.position}
            mid={edge.mid}
            color={isConnectedToHovered ? '#FFFFFF' : edge.source.color}
            lineWidth={isConnectedToHovered ? 2.6 : 1.2}
            transparent
            opacity={isConnectedToHovered ? 1.0 : 0.45}
          />
        );
      })}
    </group>
  );
}
