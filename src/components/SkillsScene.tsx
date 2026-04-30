import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import SkillOrb from './SkillOrb';

interface Skill {
  name: string;
  proficiency: number;
  color: string;
  position: [number, number, number];
}

const skills: Skill[] = [
  { name: 'React.js', proficiency: 95, color: '#00d4ff', position: [-2.5, 1, 0] },
  { name: 'TypeScript', proficiency: 90, color: '#3178c6', position: [2.5, 0.5, 1] },
  { name: 'Node.js', proficiency: 88, color: '#68a063', position: [-1.5, -1, 2] },
  { name: 'Tailwind CSS', proficiency: 92, color: '#06b6d4', position: [1.5, -0.5, -2] },
  { name: 'Next.js', proficiency: 87, color: '#ffffff', position: [3, 1.5, 0.5] },
  { name: 'MongoDB', proficiency: 85, color: '#47a248', position: [-3, -0.5, -1] },
  { name: 'Express.js', proficiency: 86, color: '#404040', position: [0, 1.5, -1] },
  { name: 'JavaScript', proficiency: 93, color: '#f7df1e', position: [2, -1.5, 1] },
];

const ParticleField = () => {
  return (
    <Stars
      radius={100}
      depth={50}
      count={2000}
      factor={4}
      saturation={0}
      fade
      speed={0.5}
    />
  );
};

const GridFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  );
};

const SkillsScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.2} />
          
          {/* Main directional light */}
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.5}
            color="#00d4ff"
          />
          
          {/* Accent lights */}
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#a855f7" />
          <pointLight position={[5, -5, 10]} intensity={0.3} color="#ec4899" />

          {/* Background elements */}
          <ParticleField />
          <GridFloor />

          {/* Skill orbs */}
          <Float
            speed={1}
            rotationIntensity={0.2}
            floatIntensity={0.3}
          >
            {skills.map((skill, index) => (
              <SkillOrb
                key={skill.name}
                position={skill.position}
                skill={skill.name}
                proficiency={skill.proficiency}
                color={skill.color}
                index={index}
              />
            ))}
          </Float>

          {/* Camera controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={5}
            maxDistance={15}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SkillsScene;
