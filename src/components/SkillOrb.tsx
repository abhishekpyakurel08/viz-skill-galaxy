import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SkillOrbProps {
  position: [number, number, number];
  skill: string;
  proficiency: number;
  color: string;
  index: number;
}

const SkillOrb = ({ position, skill, proficiency, color, index }: SkillOrbProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation with unique offset per orb
      const time = state.clock.elapsedTime;
      const floatOffset = Math.sin(time * 0.5 + index * 0.5) * 0.3;
      const horizontalFloat = Math.cos(time * 0.3 + index * 0.7) * 0.1;
      
      meshRef.current.position.y = position[1] + floatOffset;
      meshRef.current.position.x = position[0] + horizontalFloat;
      
      // Slow rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;

      // Scale on hover
      const targetScale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    if (glowRef.current) {
      glowRef.current.position.copy(meshRef.current!.position);
      const glowScale = hovered ? 2 : 1.5;
      glowRef.current.scale.lerp(new THREE.Vector3(glowScale, glowScale, glowScale), 0.1);
    }
  });

  const colorHex = new THREE.Color(color);

  return (
    <group>
      {/* Outer glow */}
      <mesh ref={glowRef} position={position}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color={colorHex}
          transparent
          opacity={hovered ? 0.15 : 0.08}
        />
      </mesh>

      {/* Main orb */}
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial
          color={colorHex}
          emissive={colorHex}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          metalness={0.8}
          roughness={0.2}
          wireframe={!hovered}
        />
      </mesh>

      {/* Skill label */}
      {(hovered || clicked) && (
        <Html
          position={[position[0], position[1] + 1, position[2]]}
          center
          distanceFactor={8}
        >
          <div className="glass-panel px-4 py-3 min-w-[120px] text-center animate-fade-in pointer-events-none">
            <p className="font-display text-sm text-primary neon-text whitespace-nowrap">
              {skill}
            </p>
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${proficiency}%`,
                  background: `linear-gradient(90deg, ${color}, ${color}88)`,
                  boxShadow: `0 0 10px ${color}`,
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{proficiency}%</p>
          </div>
        </Html>
      )}
    </group>
  );
};

export default SkillOrb;
