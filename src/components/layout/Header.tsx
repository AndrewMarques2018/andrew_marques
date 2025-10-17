import styles from './Header.module.scss';

import { useState, useEffect } from 'react';
import logo from '/Logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se o scroll vertical for maior que 10 pixels, ativa o estado "scrolled"
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adiciona o listener de evento quando o componente monta
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente desmonta (boa prática para evitar memory leaks)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio garante que o efeito rode apenas uma vez (na montagem)

  // A classe 'scrolled' será adicionada condicionalmente
  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo}>
          <img src={logo} alt="Logo Andrew Marques" />
        </a>
        <nav className={styles.nav}>
          <ul>
            {/* Adicionaremos links para as seções aqui no futuro */}
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
          <a 
            href="/Curriculo2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
          >
            Currículo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;