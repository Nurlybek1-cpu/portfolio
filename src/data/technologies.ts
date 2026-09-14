export interface TechnologyGroup {
  category: 'Languages' | 'Backend' | 'Frontend' | 'Database' | 'Tools';
  items: string[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL']
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'CSS Modules']
  },
  {
    category: 'Backend',
    items: ['Java', 'REST APIs', 'Node.js']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'SQLite', 'Redis', 'Prisma ORM']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'Linux / Bash', 'Postman', 'VS Code']
  }
];
