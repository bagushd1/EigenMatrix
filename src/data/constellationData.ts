export interface ConstellationNode {
  id: string;
  type: 'CORE_DOMAIN' | 'SKILL' | 'PROJECT';
  position: [number, number, number];
  color: string;
  size: number;
  category?: string;
  connections: string[];
}

export const CONSTELLATION_NODES: ConstellationNode[] = [
  // 4 Core Domains
  {
    id: 'core-backend',
    type: 'CORE_DOMAIN',
    position: [-3.2, 1.8, 0],
    color: '#00F0FF',
    size: 0.85,
    category: 'Backend',
    connections: ['skill-go', 'skill-mysql', 'skill-docker', 'proj-cbs-sync', 'proj-transfer-verify'],
  },
  {
    id: 'core-fintech',
    type: 'CORE_DOMAIN',
    position: [3.2, 1.8, 0],
    color: '#00FF9D',
    size: 0.85,
    category: 'FinTech',
    connections: ['proj-cbs-sync', 'proj-transfer-verify', 'proj-keuanganman', 'skill-transactions'],
  },
  {
    id: 'core-mobile',
    type: 'CORE_DOMAIN',
    position: [-2.4, -2.2, 0],
    color: '#B026FF',
    size: 0.85,
    category: 'Mobile',
    connections: ['skill-flutter', 'skill-dart', 'proj-mobile-exam'],
  },
  {
    id: 'core-web',
    type: 'CORE_DOMAIN',
    position: [2.6, -2.2, 0],
    color: '#FFB800',
    size: 0.85,
    category: 'Fullstack',
    connections: ['skill-laravel', 'skill-react', 'skill-tailwind', 'proj-admin-engine', 'proj-keuanganman'],
  },

  // Skills
  {
    id: 'skill-go',
    type: 'SKILL',
    position: [-4.8, 2.8, 0.4],
    color: '#00F0FF',
    size: 0.45,
    category: 'Backend',
    connections: ['core-backend', 'proj-cbs-sync', 'proj-transfer-verify'],
  },
  {
    id: 'skill-mysql',
    type: 'SKILL',
    position: [-2.0, 3.2, -0.3],
    color: '#00F0FF',
    size: 0.45,
    category: 'Backend',
    connections: ['core-backend', 'proj-cbs-sync', 'proj-keuanganman'],
  },
  {
    id: 'skill-docker',
    type: 'SKILL',
    position: [-4.2, 0.4, 0.2],
    color: '#00F0FF',
    size: 0.42,
    category: 'Backend',
    connections: ['core-backend', 'proj-cbs-sync', 'proj-transfer-verify'],
  },
  {
    id: 'skill-transactions',
    type: 'SKILL',
    position: [4.6, 2.9, 0.3],
    color: '#00FF9D',
    size: 0.46,
    category: 'FinTech',
    connections: ['core-fintech', 'proj-cbs-sync', 'proj-keuanganman'],
  },
  {
    id: 'skill-flutter',
    type: 'SKILL',
    position: [-3.8, -3.2, 0.2],
    color: '#B026FF',
    size: 0.45,
    category: 'Mobile',
    connections: ['core-mobile', 'proj-mobile-exam'],
  },
  {
    id: 'skill-dart',
    type: 'SKILL',
    position: [-1.2, -3.2, -0.3],
    color: '#B026FF',
    size: 0.42,
    category: 'Mobile',
    connections: ['core-mobile', 'proj-mobile-exam'],
  },
  {
    id: 'skill-laravel',
    type: 'SKILL',
    position: [1.6, -3.4, 0.2],
    color: '#FFB800',
    size: 0.44,
    category: 'Fullstack',
    connections: ['core-web', 'proj-admin-engine', 'proj-keuanganman'],
  },
  {
    id: 'skill-react',
    type: 'SKILL',
    position: [4.2, -1.8, -0.3],
    color: '#FFB800',
    size: 0.45,
    category: 'Fullstack',
    connections: ['core-web', 'proj-admin-engine'],
  },
  {
    id: 'skill-tailwind',
    type: 'SKILL',
    position: [3.8, -3.4, 0.3],
    color: '#FFB800',
    size: 0.42,
    category: 'Fullstack',
    connections: ['core-web', 'proj-admin-engine'],
  },

  // Satellite Nodes
  {
    id: 'node-satellite-1',
    type: 'PROJECT',
    position: [-4.2, 3.8, 0.5],
    color: '#00F0FF',
    size: 0.55,
    category: 'Backend',
    connections: ['core-backend', 'core-fintech', 'skill-go', 'skill-mysql'],
  },
  {
    id: 'node-satellite-2',
    type: 'PROJECT',
    position: [-2.2, 4.2, -0.2],
    color: '#00FF9D',
    size: 0.55,
    category: 'FinTech',
    connections: ['core-backend', 'core-fintech', 'skill-go', 'skill-docker'],
  },
  {
    id: 'node-satellite-3',
    type: 'PROJECT',
    position: [2.2, -4.2, 0.4],
    color: '#FFB800',
    size: 0.55,
    category: 'Fullstack',
    connections: ['core-web', 'skill-laravel', 'skill-react', 'skill-tailwind'],
  },
  {
    id: 'node-satellite-4',
    type: 'PROJECT',
    position: [-3.2, -4.2, 0.4],
    color: '#B026FF',
    size: 0.55,
    category: 'Mobile',
    connections: ['core-mobile', 'skill-flutter', 'skill-dart'],
  },
  {
    id: 'node-satellite-5',
    type: 'PROJECT',
    position: [3.8, 3.9, -0.4],
    color: '#FF2A85',
    size: 0.55,
    category: 'FinTech',
    connections: ['core-fintech', 'core-web', 'skill-laravel', 'skill-mysql', 'skill-transactions'],
  },
];
