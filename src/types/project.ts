export interface ProjectMedia {
  type: 'image' | 'video';
  path: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string; // Imagem principal para o card
  gallery: ProjectMedia[]; // Galeria para a página de detalhes
  stack: string[];
  period: string;
  myRole: string;
  challenges: string;
  links: {
    live?: string;
    github?: string;
  };
}