
// Import React to resolve React namespace issues in TypeScript
import React from 'react';

export interface Platform {
  id: string;
  name: string;
  description: string;
  tagline: string;
  icon: React.ReactNode;
  link: string;
  status: 'Live' | 'Ongoing' | 'Experimental' | 'Internal';
  year: string;
  category: string;
}

export interface UseCase {
  title: string;
  description: string;
  category: string;
}

// Added BlogPost interface definition
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
}
