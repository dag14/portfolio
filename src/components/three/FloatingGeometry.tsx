import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingGeometry = () => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 0.8) * 0.5;
      sphereRef.current.rotation.x = time * 0.3;
    }
    
    if (boxRef.current) {
      boxRef.current.position.y = Math.sin(time * 0.6 + Math.PI / 3) * 0.3;
      boxRef.current.rotation.z = time * 0.2;
    }
    
    if (octaRef.current) {
      octaRef.current.position.y = Math.sin(time * 0.7 + Math.PI / 6) * 0.4;
      octaRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Golden Sphere */}
      <Sphere ref={sphereRef} args={[0.3]} position={[-2, 0, 0]}>
        <meshStandardMaterial
          color="#FFD600"
          metalness={0.8}
          roughness={0.2}
          emissive="#FFD600"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Wireframe Box */}
      <Box ref={boxRef} args={[0.4, 0.4, 0.4]} position={[2, 0, -1]}>
        <meshStandardMaterial
          color="#FFD600"
          wireframe
          transparent
          opacity={0.6}
        />
      </Box>
      
      {/* Crystal Octahedron */}
      <Octahedron ref={octaRef} args={[0.25]} position={[0, 0, 2]}>
        <meshStandardMaterial
          color="#F4C400"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </Octahedron>
    </group>
  );
};