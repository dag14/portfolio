import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface TechParticlesProps {
  count?: number;
  isDark?: boolean;
}

export const TechParticles = ({ count = 1500, isDark = false }: TechParticlesProps) => {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    // Tech symbols patterns (simplified geometric representations)
    const techPatterns = [
      // React logo pattern (circles)
      { type: 'react', radius: 3, density: 0.2 },
      // Angular brackets < >
      { type: 'code', radius: 4, density: 0.15 },
      // Database cylinders
      { type: 'database', radius: 3.5, density: 0.15 },
      // Cloud patterns
      { type: 'cloud', radius: 5, density: 0.2 },
      // Network nodes
      { type: 'network', radius: 4.5, density: 0.3 }
    ];
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const pattern = techPatterns[i % techPatterns.length];
      
      // Create clustered distribution based on tech patterns
      const clusterRadius = pattern.radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      // Add some randomization to make it more organic
      const radiusVariation = clusterRadius + (Math.random() - 0.5) * 2;
      
      positions[i3] = radiusVariation * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radiusVariation * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radiusVariation * Math.cos(phi);
      
      // Tech-themed colors (yellow/gold accent with variations)
      const intensity = Math.random() * 0.6 + 0.4;
      if (pattern.type === 'react') {
        // React blue-ish
        colors[i3] = isDark ? 0.4 : 0.2;     // Red
        colors[i3 + 1] = isDark ? 0.8 : 0.6; // Green
        colors[i3 + 2] = isDark ? 1 : 0.9;   // Blue
      } else if (pattern.type === 'database') {
        // Database green
        colors[i3] = isDark ? 0.2 : 0.1;     // Red
        colors[i3 + 1] = isDark ? 1 : 0.8;   // Green
        colors[i3 + 2] = isDark ? 0.4 : 0.2; // Blue
      } else {
        // Default golden/yellow theme
        colors[i3] = isDark ? 1 : intensity;
        colors[i3 + 1] = isDark ? 0.84 : intensity * 0.84;
        colors[i3 + 2] = isDark ? 0 : 0;
      }
      
      // Vary particle sizes based on pattern
      sizes[i] = pattern.type === 'network' ? 0.02 : 0.015;
    }
    
    return { positions, colors, sizes };
  }, [count, isDark]);

  useFrame((state) => {
    if (ref.current) {
      // Slower, more subtle rotation for professional look
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.04) * 0.05;
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