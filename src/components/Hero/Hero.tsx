import './styles.module.css';
import styles from './styles.module.css';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Elemento decorativo de fundo */}
        <div className={styles.backgroundGradient}></div>

        <div className={styles.content}>
          {/* Imagem do perfil */}
          <div className={styles.profileImageWrapper}>
            <img
              src="image.png"
              alt="Victor Emanuel - Photo"
              className={styles.profileImage}
            />
            <div className={styles.glowEffect}></div>
          </div>

          {/* Conteúdo principal */}
          <div className={styles.textContent}>
            <h2 className={styles.greeting}>Hi, i am</h2>
            <h1 className={styles.name}>Victor Emanuel</h1>

            <p className={styles.title}>Software Developer</p>

            <p className={styles.description}>
              Full-Stack Developer passionate about crafting modern, scalable web applications and turning ideas into meaningful digital experiences.
            </p>

            {/* Tags de especialidades */}
            <div className={styles.specialties}>
              <span className={styles.tag}>Full-Stack</span>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>React</span>
            </div>

            {/* Botões de ação */}
            <div className={styles.actions}>
              <a
                href="https://github.com/Vituinho"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <span>See my work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                </svg>
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className={styles.secondaryButton}
              >
                <span>Explore Projects</span>
              </button>
              <a
                href="resume.pdf"
                download
                className={styles.resumeButton}
              >
                <span>Download Resume</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>

            {/* Indicador de scroll */}
            <div className={styles.scrollIndicator}>
              <div className={styles.scrollDot}></div>
              <p>Scroll for more...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}