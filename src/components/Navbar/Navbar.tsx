import './styles.module.css';
import styles from './styles.module.css';

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Recomendations', id: 'recomendations' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.name}>VICTOR</span>
          <span className={styles.bracket}>/&gt;</span>
        </div>

        {/* Nav Items */}
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={styles.navLink}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className={styles.contactButton}
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
}