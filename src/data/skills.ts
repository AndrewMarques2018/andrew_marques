import type { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import {
  SiReact, SiTypescript, SiNodedotjs, SiNextdotjs, SiNestjs, SiPostgresql,
  SiMysql, SiDocker, SiAmazon, SiFirebase, SiGit, SiFigma,
  SiKotlin, SiUnity, SiPhp, SiLaravel
} from 'react-icons/si'; // Importando os ícones

// Definimos um tipo para nossas habilidades para ter autocompletar e segurança
export interface Skill {
  name: string;
  icon: IconType; // O tipo para um componente React
}

export const skillsData: Skill[] = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'React Native', icon: SiReact }, // Reutilizando o ícone do React
  { name: 'PHP', icon: SiPhp },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: SiAmazon },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Git', icon: SiGit },
  { name: 'Figma', icon: SiFigma },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Unity', icon: SiUnity },
  { name: 'Java', icon: FaJava },
];