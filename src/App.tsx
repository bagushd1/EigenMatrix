import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ConstellationGraph } from './components/ConstellationGraph';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#090D16', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 0, 13.5], fov: 45 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#090D16']} />
        <fog attach="fog" args={['#090D16', 12, 28]} />

        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#38BDF8" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#818CF8" />

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
