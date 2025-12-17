export enum AppRoute {
  HOME = '/',
  BENEFITS = '/benefits',
  SOLUTIONS = '/solutions',
  BLOG = '/blog',
  CONTACT = '/contact',
}

export interface NavItem {
  label: string;
  path: AppRoute;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export interface UseCase {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  icon?: React.ReactNode;
}
