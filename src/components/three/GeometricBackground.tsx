import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface GeometricBackgroundProps {
  count?: number;
  isDark?: boolean;
}

export const GeometricBackground = ({ count = 2000, isDark = false }: GeometricBackgroundProps) => {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Create sphere distribution
      const radius = Math.random() * 6 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Golden color palette
      const goldIntensity = Math.random() * 0.8 + 0.2;
      colors[i3] = isDark ? 1 : goldIntensity; // Red
      colors[i3 + 1] = isDark ? 0.84 : goldIntensity * 0.84; // Green 
      colors[i3 + 2] = isDark ? 0 : 0; // Blue
    }
    
    return { positions, colors };
  }, [count, isDark]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};