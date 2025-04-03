import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Mesh} from 'three';
import { OrganData } from '../types/anatomy/OrganData';


interface OrganProps {
  data: OrganData;
  onSelect: (name: string) => void;
  systemFilter: string | null;
}

export default function Organ({ data, onSelect, systemFilter }: OrganProps) {
  const organRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  
  // Check if this organ should be visible based on the system filter
  useFrame((state, delta) => {
    if (organRef.current) {
      // Handle pulsing/animation based on organ type
      organRef.current.rotation.y += delta * data.rotationSpeed;
      
      // Make heart "beat" by scaling
      if (data.name === "Heart") {
        const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
        organRef.current.scale.set(scale, scale, scale);
      }
      
      // Make lungs "breathe" by scaling
      if (data.name === "Lungs") {
        const breathScale = 1 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
        organRef.current.scale.set(breathScale, breathScale, breathScale);
      }
      
      // Check visibility based on system filter
      if (systemFilter) {
        setVisible(data.systems.includes(systemFilter));
      } else {
        setVisible(true);
      }
    }
  });

  const handleClick = () => {
    onSelect(data.name);
  };

  if (!visible) return null;

  return (
    <group position={data.position as [number, number, number]}>
      <mesh
        ref={organRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        rotation={data.rotation as [number, number, number]}
      >
        <sphereGeometry args={[data.size, 64, 64]} />
        <meshStandardMaterial
          color={data.color}
          roughness={data.roughness || 0.5}
          metalness={data.metalness || 0.5}
          transparent={data.opacity !== undefined}
          opacity={data.opacity || 1}
          emissive={hovered ? "#ffffff" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />

        {hovered && (
          <Html distanceFactor={10}>
            <div className="bg-black/80 text-white p-2 rounded-lg whitespace-nowrap">
              <h3 className="font-bold text-lg">{data.name}</h3>
              <p className="text-sm">{data.description}</p>
              <p className="text-xs mt-1 text-yellow-300">Click to learn more!</p>
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
}