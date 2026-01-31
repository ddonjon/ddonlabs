import React from 'react';
import { Globe, Layout, BarChart3, Layers, Code, Cpu, Terminal, Zap } from 'lucide-react';
import { Platform, UseCase, BlogPost } from './types';

export const PLATFORMS: Platform[] = [
  {
    id: 'ddonlabs-studio',
    name: 'ddonlabs Studio',
    tagline: 'Premium Web & Software Engineering',
    description: 'Elite engineering team for high-performance digital products and software.',
    icon: <Code className="w-5 h-5 text-purple-400" strokeWidth={1.5} />,
    link: '#/ventures',
    status: 'Live',
    year: '2025',
    category: 'Venture Studio'
  },
  {
    id: 'phoenix',
    name: 'Phoenix Exports',
    tagline: 'Logistics Tech Ecosystem',
    description: 'Digitizing global trade logistics through specialized supply chain automation.',
    icon: <Globe className="w-5 h-5 text-purple-300" strokeWidth={1.5} />,
    link: '#/ventures',
    status: 'Ongoing',
    year: '2024',
    category: 'Logistics'
  },
  {
    id: 'citytwin',
    name: 'CityTwin',
    tagline: 'Smart Infrastructure Simulation',
    description: 'Advanced digital twin technology for municipal and private infrastructure management.',
    icon: <Layers className="w-5 h-5 text-purple-200" strokeWidth={1.5} />,
    link: '#/ventures',
    status: 'Experimental',
    year: '2025',
    category: 'Simulation'
  }
];

export const USE_CASES: UseCase[] = [
  {
    category: 'Product Engineering',
    title: 'Scalable Web Architectures',
    description: 'Building high-traffic, low-latency web ecosystems for rapidly growing technology ventures.'
  },
  {
    category: 'AI Integration',
    title: 'Autonomous Data Workflows',
    description: 'Seamlessly embedding machine learning and LLM capabilities into existing business processes and digital products.'
  },
  {
    category: 'Venture Building',
    title: 'Incubating Future Tech',
    description: 'Providing the technical foundation and strategic advisory for emerging tech sub-brands and startups.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Spatial Intelligence',
    date: 'March 15, 2024',
    readTime: '8 min read',
    excerpt: 'Exploring how digital twins and smart infrastructure are reshaping urban management and industrial efficiency.',
    author: 'ddonlabs Engineering'
  },
  {
    id: 2,
    title: 'Scaling Venture Ecosystems',
    date: 'February 28, 2024',
    readTime: '6 min read',
    excerpt: 'A deep dive into our studio model and how we provide technical stewardship for emerging technology ventures.',
    author: 'Strategy Team'
  },
  {
    id: 3,
    title: 'AI in Supply Chain Logistics',
    date: 'February 10, 2024',
    readTime: '5 min read',
    excerpt: 'How machine learning is optimizing global trade routes and reducing overhead for maritime logistics.',
    author: 'ddonlabs Research'
  }
];