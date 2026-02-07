export type PostType = 'design' | 'development' | 'writing' | 'photography';

export interface PostImage {
  src: string;
  alt: string;
  aspectRatio?: string;
}

export interface PostImages {
  hero: string;
  heroAspectRatio?: string;
  gallery?: PostImage[];
}

export interface PostLink {
  url: string;
  label: string;
}

export interface Collaborator {
  name: string;
  role: string;
}

export interface PostDetails {
  description: string;
  role?: string;
  client?: string;
  year?: string;
  collaborators?: Collaborator[];
  link?: PostLink;
}

export interface Post {
  id: string;
  title: string;
  caption: string;
  type: PostType;
  tags: string[];
  date: string;
  images: PostImages;
  details: PostDetails;
}

export interface PostsData {
  posts: Post[];
}

export interface AboutData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  links: {
    label: string;
    url: string;
  }[];
}

export type FilterType = 'all' | PostType;

export interface Client {
  name: string;
  logo?: string;
  url?: string;
  industry?: string;
}

export interface ClientsData {
  title: string;
  clients: Client[];
}

export interface ExperiencePosition {
  id: string;
  company: string;
  logo?: string;
  role: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  startDate: string;
  endDate: string | null;
  description?: string;
  url?: string;
}

export interface ExperienceData {
  title: string;
  positions: ExperiencePosition[];
}
