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
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'placeholder-1',
    title: 'Placeholder Project Alpha',
    problem: 'This is where the core problem this software solves will be clearly described in one or two sentences.',
    description: 'This section serves as a micro case study. Here, you will detail how the project was built, the architecture chosen, and the specific technical challenges overcome during development.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    status: 'Completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'placeholder-2',
    title: 'Placeholder Project Beta',
    problem: 'A secondary placeholder illustrating a different kind of problem statement.',
    description: 'A more concise description for a secondary project. Case study details will populate here once actual projects are provided.',
    technologies: ['Python', 'PostgreSQL', 'Docker'],
    status: 'In Progress',
    githubUrl: 'https://github.com',
    featured: false,
  }
];
