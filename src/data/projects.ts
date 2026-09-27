export interface Project {
  id: string;
  title: string;
  problem: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;      
  imageUrls?: string[];  
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'nomeagle',
    title: 'NomEagle',
    problem: 'Conventional methods of learning about worldwide traditions and customs often lack engagement. NomEagle provides a gamified, interactive web experience to make cultural education efficient and enjoyable.',
    description: 'The system was built with a decoupled architecture using React for the front-end and Laravel for the back-end, connected via REST API. Performance was optimized to maintain response times under 80ms. The platform features a modular design, an interactive world map, scenario-based etiquette questions, and a structured learning roadmap. To maximize user retention, we integrated gamification elements (XP, achievements, global leaderboards) and custom mini-games like Culture Match Rush, Street Food Sprint, Festival Timeline, and Guess the Landmark.',
    technologies: ['React', 'Laravel', 'REST API', 'TypeScript'],
    status: 'Completed',
    githubUrl: 'https://github.com/Nurlybek1-cpu/nomeagle.git',
    liveUrl: 'https://nomeagle-web.web.app/app/dashboard',
    imageUrls: [
      `${import.meta.env.BASE_URL}nomeagle/a.png`,
      `${import.meta.env.BASE_URL}nomeagle/b.png`,
      `${import.meta.env.BASE_URL}nomeagle/c.png`,
      `${import.meta.env.BASE_URL}nomeagle/d.png`,
      `${import.meta.env.BASE_URL}nomeagle/e.png`,
      `${import.meta.env.BASE_URL}nomeagle/f.png`,
      `${import.meta.env.BASE_URL}nomeagle/g.png`,
      `${import.meta.env.BASE_URL}nomeagle/h.png`,
      `${import.meta.env.BASE_URL}nomeagle/m.png`,
      `${import.meta.env.BASE_URL}nomeagle/n.png`
    ],
    featured: true,
  },
  {
    id: 'smart-parking',
    title: 'Smart Parking System',
    problem: 'Inefficient parking usage in large cities, where drivers spend significant time searching for available parking spaces and often park incorrectly. This leads to traffic congestion, time loss, and increased CO₂ emissions.',
    description: 'Smart Parking System is an educational project and MVP developed as part of a semester assessment and final project defense. The system helps users quickly find, reserve, and manage parking spots. Target users include drivers in urban areas, students and employees, residents of residential complexes, and city parking operators.',
    technologies: ['React', 'FastAPI', 'Python', 'OpenCV'],
    status: 'Completed',
    githubUrl: 'https://github.com/supertankerlol/Parking-system.git',
    imageUrls: [
      `${import.meta.env.BASE_URL}parking/a.jpg`,
      `${import.meta.env.BASE_URL}parking/b.jpg`,
      `${import.meta.env.BASE_URL}parking/c.jpg`,
      `${import.meta.env.BASE_URL}parking/d.jpg`,
      `${import.meta.env.BASE_URL}parking/e.jpg`
    ],
    featured: false,
  }
];