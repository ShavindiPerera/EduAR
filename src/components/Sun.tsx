import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Sun() {
  const sunRef = useRef<Mesh>(null);
  const coronaRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (sunRef.current && coronaRef.current) {
      sunRef.current.rotation.y += delta * 0.1;
      coronaRef.current.rotation.y -= delta * 0.05;
      coronaRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FDB813"
          emissiveIntensity={2}
          roughness={0.2}
          metalness={0.8}
        />
        <pointLight intensity={50} distance={100} decay={2} />
      </mesh>

      <mesh ref={coronaRef} scale={1.2}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FF8C00"
          emissiveIntensity={1}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0}
        />
      </mesh>

      <ambientLight intensity={0.1} />
    </group>
  );
}

/*import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

export default function Sun() {
  const sunRef = useRef<Mesh>(null);
  const coronaRef = useRef<Mesh>(null);

  // Load the GLTF model
  const { scene: sunModel } = useGLTF('sun.glb'); // Replace with the correct path to your .glb file

  useFrame((state, delta) => {
    if (sunRef.current && coronaRef.current) {
      sunRef.current.rotation.y += delta * 0.1;
      coronaRef.current.rotation.y -= delta * 0.05;
      coronaRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group>
      
      <primitive
        object={sunModel}
        ref={sunRef}
        scale={4} // Adjust scale as needed
      >
        <pointLight intensity={50} distance={100} decay={2} />
      </primitive>

     
      <mesh ref={coronaRef} scale={1.2}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FF8C00"
          emissiveIntensity={1}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0}
        />
      </mesh>

      <ambientLight intensity={0.1} />
    </group>
  );
}*/

