export interface PlanetData {
    name: string;
    color: string;
    size: number;
    orbitRadius: number;
    orbitSpeed: number;
    rotationSpeed: number;
    nasaUrl: string;
    description: string;
    funFact: string;
    emissive?: string;
    roughness?: number;
    metalness?: number;
    atmosphereColor?: string;
    hasRings?: boolean;
    modelFile: string; 
    modelScale?: number;
  }
  
  export const PLANETS: PlanetData[] = [
    {
      name: "Mercury",
      color: "#A5A5A5",
      size: 0.8,
      orbitRadius: 6,
      orbitSpeed: 0.0008,
      rotationSpeed: 0.02,
      nasaUrl: "https://solarsystem.nasa.gov/planets/mercury/overview/",
      description: "The smallest and fastest planet!",
      funFact: "A year on Mercury is just 88 Earth days!",
      roughness: 0.9,
      metalness: 0.4,
      emissive: "#1a1a1a",
      modelFile: "planet_mercury.glb",
      modelScale: 5
    },
    {
      name: "Venus",
      color: "#FFA07A",
      size: 1.8,
      orbitRadius: 10,
      orbitSpeed: 0.0006,
      rotationSpeed: -0.015,
      nasaUrl: "https://solarsystem.nasa.gov/planets/venus/overview/",
      description: "The hottest planet in our solar system!",
      funFact: "Venus spins backwards compared to other planets!",
      roughness: 0.7,
      metalness: 0.3,
      atmosphereColor: "#ffccaa",
      modelFile: "venus.glb",
      modelScale: 1
    },
    {
      name: "Earth",
      color: "#4B9CD3",
      size: 2.0,
      orbitRadius: 14,
      orbitSpeed: 0.0005,
      rotationSpeed: 0.025,
      nasaUrl: "https://solarsystem.nasa.gov/planets/earth/overview/",
      description: "Our beautiful home planet!",
      funFact: "Earth is the only planet known to have life!",
      roughness: 0.6,
      metalness: 0.4,
      atmosphereColor: "#add8e6",
      modelFile: "planet_earth.glb",
      modelScale: 1
    },
    {
      name: "Mars",
      color: "#CD5C5C",
      size: 1.0,
      orbitRadius: 18,
      orbitSpeed: 0.0004,
      rotationSpeed: 0.02,
      nasaUrl: "https://solarsystem.nasa.gov/planets/mars/overview/",
      description: "The Red Planet!",
      funFact: "Mars has the largest volcano in the solar system!",
      roughness: 0.8,
      metalness: 0.2,
      emissive: "#2b1410",
      modelFile: "mars.glb",
      modelScale: 1
    },
    {
      name: "Jupiter",
      color: "#DEB887",
      size: 5.0,
      orbitRadius: 24,
      orbitSpeed: 0.0003,
      rotationSpeed: 0.04,
      nasaUrl: "https://solarsystem.nasa.gov/planets/jupiter/overview/",
      description: "The biggest planet!",
      funFact: "Jupiter's Great Red Spot is a giant storm that's been going for 400 years!",
      roughness: 0.5,
      metalness: 0.5,
      atmosphereColor: "#c4a484",
      modelFile: "jupiter2.glb",
      modelScale: 1
    },
   
    {
      name: "Uranus",
      color: "#ADD8E6",
      size: 3.6,
      orbitRadius: 36,
      orbitSpeed: 0.0002,
      rotationSpeed: -0.03,
      nasaUrl: "https://solarsystem.nasa.gov/planets/uranus/overview/",
      description: "The sideways planet!",
      funFact: "Uranus rolls around the Sun like a ball!",
      roughness: 0.3,
      metalness: 0.7,
      atmosphereColor: "#e6f3ff",
      modelFile: "realistic_uranus_4k.glb",
      modelScale: 1
    },
    
  ];