export interface TechnologyGroup {
  category: 'Languages' | 'Backend' | 'Frontend' | 'Database' | 'Tools';
  items: string[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'CSS Modules', 'Tailwind CSS']
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
