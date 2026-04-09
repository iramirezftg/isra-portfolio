import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, MeshDistortMaterial, Float, Environment } from '@react-three/drei';

function AbstractShape() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[3, 0, -2]}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#22c55e"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={3}
          wireframe
        />
      </mesh>
      
      {/* Inner solid core */}
      <mesh scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#000" 
          emissive="#22c55e" 
          emissiveIntensity={0.2} 
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#22c55e" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        {/* Background stars / particles */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Floating abstract object */}
        <AbstractShape />
      </Canvas>
    </div>
  );
}
