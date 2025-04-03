import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ORGANS, BODY_SYSTEMS } from '../types/anatomy/OrganData';
import Organ from './Organ';


export default function HumanAnatomy() {
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
  const [systemFilter, setSystemFilter] = useState<string | null>(null);
  const organ = ORGANS.find(o => o.name === selectedOrgan);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <Canvas>
        <color attach="background" args={['#040720']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Body outline mesh - simplified human shape */}
        <mesh position={[0, 0, -2]} scale={[5, 10, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial color="#4f83cc" transparent opacity={0.1} />
        </mesh>

        {ORGANS.map((organ) => (
          <Organ 
            key={organ.name} 
            data={organ} 
            onSelect={setSelectedOrgan} 
            systemFilter={systemFilter}
          />
        ))}

        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <OrbitControls
          enablePan={true}
          minDistance={10}
          maxDistance={30}
        />
      </Canvas>

      {/* System Filter Buttons - Top of screen */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 p-2 rounded-lg backdrop-blur-sm">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSystemFilter(null)}
            className={`px-2 py-1 text-xs rounded-lg transition-colors ${
              systemFilter === null ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'
            }`}
          >
            All Systems
          </button>
          {BODY_SYSTEMS.map(system => (
            <button
              key={system}
              onClick={() => setSystemFilter(system)}
              className={`px-2 py-1 text-xs rounded-lg transition-colors ${
                systemFilter === system ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'
              }`}
            >
              {system}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Info Panel */}
      <div className="absolute bottom-4 left-4 text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm max-w-md">
        <h2 className="text-2xl font-bold mb-2">Human Anatomy Explorer 🔬</h2>
        {selectedOrgan && organ ? (
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-yellow-300">{organ.name}</h3>
            <p className="text-lg">{organ.description}</p>
            <div className="bg-blue-500/20 p-3 rounded-lg mt-2">
              <h4 className="text-lg font-bold text-blue-300">Interesting Fact! 🧠</h4>
              <p>{organ.funFact}</p>
            </div>
            <p className="text-sm mt-2">
              <span className="font-bold">Systems:</span> {organ.systems.join(', ')}
            </p>
            <button
              onClick={() => window.open(organ.medicalUrl, '_blank')}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Learn More at MedlinePlus! 🔬
            </button>
            <button
              onClick={() => setSelectedOrgan(null)}
              className="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Back to Explorer 🧪
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg mb-2">Welcome to Human Anatomy Explorer! 👋</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">🖱️</span>
                Click and drag to rotate the view
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">🔍</span>
                Scroll to zoom in and out
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">👆</span>
                Click on any organ to learn more
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">🧩</span>
                Use the filters at the top to view different body systems
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}