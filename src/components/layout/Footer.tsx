// src/components/layout/Footer.tsx

import styles from './Footer.module.scss';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  id: string;
}

const Footer = ({ id }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id={id} className={`${styles.footer} section-target`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Coluna 1: Sobre Mim */}
          <div className={styles.about}>
            <h3>Sobre Mim</h3>
            <p className={styles.name}>Andrew Marques</p>
            <p className={styles.role}>Desenvolvedor Full Stack</p>
          </div>

          {/* Coluna 2: Contato */}
          <div className={styles.contact}>
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="https://github.com/AndrewMarques2018" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/andrew-marques-de-oliveira-9b7875222/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="mailto:andrewmarques2018@gmail.com">
                  <Mail size={18} />
                  <span>andrewmarques2018@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Sobre este Site */}
          <div className={styles.siteInfo}>
            <h3>Sobre este Site</h3>
            <p>
              Este portfólio foi construído com React, TypeScript, Vite e SCSS, 
              com deploy contínuo na plataforma Netlify.
            </p>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {currentYear} Andrew Marques. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;