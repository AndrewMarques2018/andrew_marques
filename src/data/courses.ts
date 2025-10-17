export interface Course {
  title: string;
  institution: string;
  year: string;
}

export const coursesData: Course[] = [
  { title: 'Engenharia de Plataformas DevOps', institution: 'Cesar School (72h)', year: '2023' },
  { title: 'Web Moderno com JavaScript 2024', institution: 'Udemy (85h)', year: '2024' },
  { title: 'Desenvolvimento de Apps Android', institution: 'Udemy (108h)', year: '2023' },
  { title: 'Python 3 do Básico ao Avançado', institution: 'Udemy (109h)', year: 'Atual' },
  { title: 'Bootcamp Santander Backend Java', institution: 'DIO (87h)', year: '2022' },
  { title: 'Prompts de Comandos para IAs', institution: 'Estudo Contínuo', year: '2025' }
];