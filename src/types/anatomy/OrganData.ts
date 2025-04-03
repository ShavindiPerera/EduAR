export interface OrganData {
    name: string;
    color: string;
    size: number;
    position: [number, number, number]; // [x, y, z] coordinates
    rotation: [number, number, number]; // [x, y, z] rotation
    rotationSpeed: number;
    medicalUrl: string;
    description: string;
    funFact: string;
    roughness?: number;
    metalness?: number;
    opacity?: number;
    isHighlighted?: boolean;
    systems: string[]; // Which body systems this organ belongs to (cardiovascular, digestive, etc.)
  }
  
  export const ORGANS: OrganData[] = [
    {
      name: "Heart",
      color: "#B22222", // Dark red
      size: 1.2,
      position: [0, 3, 0], // Centered in chest
      rotation: [0, 0, 0],
      rotationSpeed: 0.1, // Beating effect
      medicalUrl: "https://medlineplus.gov/heartdiseases.html",
      description: "The muscular organ that pumps blood through the body",
      funFact: "Your heart beats about 100,000 times every day!",
      roughness: 0.7,
      metalness: 0.2,
      systems: ["Cardiovascular"]
    },
    {
      name: "Brain",
      color: "#E0D0D0", // Pinkish gray
      size: 1.5,
      position: [0, 8, 0], // In head
      rotation: [0, 0, 0],
      rotationSpeed: 0.01,
      medicalUrl: "https://medlineplus.gov/braindiseases.html",
      description: "The control center of the nervous system",
      funFact: "Your brain uses 20% of your body's total oxygen and energy!",
      roughness: 0.5,
      metalness: 0.1,
      systems: ["Nervous"]
    },
    {
      name: "Lungs",
      color: "#FFC0CB", // Pink
      size: 1.4,
      position: [1.2, 3, 0.5], // On either side of heart
      rotation: [0, 0, 0],
      rotationSpeed: 0.05, // Breathing effect
      medicalUrl: "https://medlineplus.gov/lungdiseases.html",
      description: "The pair of organs responsible for breathing",
      funFact: "Your lungs contain almost 1,500 miles of airways!",
      roughness: 0.6,
      metalness: 0.1,
      opacity: 0.9,
      systems: ["Respiratory"]
    },
    {
      name: "Liver",
      color: "#8B4513", // Brown
      size: 1.6,
      position: [1, 0, 0.5], // Upper abdomen
      rotation: [0, 0, 0],
      rotationSpeed: 0.02,
      medicalUrl: "https://medlineplus.gov/liverdiseases.html",
      description: "The largest internal organ that filters blood",
      funFact: "Your liver performs over 500 different functions!",
      roughness: 0.7,
      metalness: 0.3,
      systems: ["Digestive"]
    },
    {
      name: "Stomach",
      color: "#F08080", // Light coral
      size: 1.3,
      position: [0, -1, 0], // Mid abdomen
      rotation: [0, 0, 0],
      rotationSpeed: 0.03,
      medicalUrl: "https://medlineplus.gov/stomachdisorders.html",
      description: "The digestive organ that breaks down food",
      funFact: "Your stomach acid is strong enough to dissolve metal!",
      roughness: 0.6,
      metalness: 0.2,
      opacity: 0.85,
      systems: ["Digestive"]
    },
    {
      name: "Kidneys",
      color: "#A52A2A", // Brown
      size: 0.9,
      position: [2, -1, -1], // Lower back
      rotation: [0, 0, 0],
      rotationSpeed: 0.02,
      medicalUrl: "https://medlineplus.gov/kidneydiseases.html",
      description: "The pair of organs that filter waste from blood",
      funFact: "Your kidneys filter about 45 gallons of blood each day!",
      roughness: 0.7,
      metalness: 0.3,
      systems: ["Urinary"]
    },
    {
      name: "Intestines",
      color: "#FFA07A", // Light salmon
      size: 1.8,
      position: [0, -3, 0], // Lower abdomen
      rotation: [0, 0, 0],
      rotationSpeed: 0.04, // Peristalsis effect
      medicalUrl: "https://medlineplus.gov/intestinaldiseases.html",
      description: "The long, coiled tube where nutrients are absorbed",
      funFact: "Your small intestine is about 20 feet long!",
      roughness: 0.5,
      metalness: 0.1,
      opacity: 0.8,
      systems: ["Digestive"]
    },
    {
      name: "Spleen",
      color: "#800080", // Purple
      size: 0.8,
      position: [-1.5, 0, 0.5], // Upper left abdomen
      rotation: [0, 0, 0],
      rotationSpeed: 0.01,
      medicalUrl: "https://medlineplus.gov/spleendiseases.html",
      description: "The organ that filters blood and helps fight infections",
      funFact: "Your spleen can store platelets and blood cells for emergencies!",
      roughness: 0.6,
      metalness: 0.2,
      systems: ["Lymphatic", "Immune"]
    }
  ];
  
  // Body systems for filtering
  export const BODY_SYSTEMS = [
    "Cardiovascular",
    "Nervous",
    "Respiratory",
    "Digestive",
    "Urinary",
    "Lymphatic",
    "Immune",
    "Musculoskeletal",
    "Endocrine",
    "Reproductive"
  ];