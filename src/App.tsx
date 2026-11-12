import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ConstellationGraph } from './components/ConstellationGraph';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#040711', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 0, 13.5], fov: 45 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#040711']} />
        <fog attach="fog" args={['#040711', 14, 32]} />

        <ambientLight intensity={0.4} />
        <pointLight position={[12, 14, 12]} intensity={3.2} color="#FFFFFF" />
        <pointLight position={[-10, -10, -8]} intensity={2.2} color="#00F0FF" />
        <pointLight position={[8, -12, 6]} intensity={1.8} color="#FF2A85" />

        <Suspense fallback={null}>
          <ConstellationGraph />
        </Suspense>

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={25}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
