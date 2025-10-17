import styles from './Header.module.scss';

import logo from '/Logo.png'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  }, []);

  // A classe 'scrolled' será adicionada condicionalmente
  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;
  const navClasses = `${styles.nav} ${isMenuOpen ? styles.open : ''}`;

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={headerClasses}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo}>
          <img src={logo} alt="Logo Andrew Marques" />
        </a>

        <nav className={navClasses}>
          <ul>
            {/* Adicionaremos links para as seções aqui no futuro */}
            <li><a onClick={closeMenu} href="#projetos">Projetos</a></li>
            <li><a onClick={closeMenu} href="#habilidades">Habilidades</a></li>
            <li><a onClick={closeMenu} href="#contato">Contato</a></li>
          </ul>
          <a
            href="/Curriculo2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
            onClick={closeMenu}
          >
            Currículo
          </a>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Abrir menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;