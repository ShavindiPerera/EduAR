import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Sun from './Sun';
import Planet from './Planet';
import { PLANETS } from '../types/SolarSystem/planet';

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const planet = PLANETS.find(p => p.name === selectedPlanet);

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 40, 60], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        <Stars
          radius={100}
          depth={50}
          count={8000}
          factor={5}
          saturation={0.5}
          fade
          speed={1}
        />
        <Sun />
        {PLANETS.map((planet) => (
          <Planet key={planet.name} data={planet} onSelect={setSelectedPlanet} />
        ))}
        <OrbitControls
          enablePan={false}
          minDistance={15}
          maxDistance={90}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>

      {/* Interactive Info Panel */}
      <div className="absolute bottom-4 left-4 text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm max-w-md">
        <h2 className="text-2xl font-bold mb-2">Space Explorer 🚀</h2>
        {selectedPlanet && planet ? (
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-yellow-300">{planet.name}</h3>
            <p className="text-lg">{planet.description}</p>
            <div className="bg-blue-500/20 p-3 rounded-lg mt-2">
              <h4 className="text-lg font-bold text-blue-300">Fun Fact! 🌟</h4>
              <p>{planet.funFact}</p>
            </div>
            <button
              onClick={() => window.open(planet.nasaUrl, '_blank')}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Learn More on NASA's Website! 🔭
            </button>
            <button
              onClick={() => setSelectedPlanet(null)}
              className="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Back to Space 🌌
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg mb-2">Welcome young space explorer! 👋</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">🖱️</span>
                Click and drag to explore space
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">🔍</span>
                Scroll to zoom in and out
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">👆</span>
                Click on any planet to learn more
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✨</span>
                Hover over planets for quick info
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}