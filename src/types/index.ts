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

export interface PostDetails {
  description: string;
  role?: string;
  client?: string;
  year?: string;
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
