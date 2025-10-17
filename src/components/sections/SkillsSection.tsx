import styles from './SkillsSection.module.scss';
import { GraduationCap } from 'lucide-react';

// 1. Importando os dados dos novos arquivos
import { skillsData } from '../../data/skills';
import { coursesData } from '../../data/courses';

interface SkillsSectionProps {
  id: string;
}

const SkillsSection = ({ id }: SkillsSectionProps) => {
  return (
    <section id={id} className={`${styles.skills} section-target`}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Habilidades & Competências</h2>

        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>Ferramentas & Tecnologias</h3>
          <div className={styles.techGrid}>
            {skillsData.map((skill) => {
              // 2. Renderizando o ícone como um componente
              const IconComponent = skill.icon; 
              return (
                <div key={skill.name} className={styles.techItem}>
                  <IconComponent size={48} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>Cursos & Educação</h3>
          <div className={styles.coursesList}>
            {coursesData.map((course) => (
              <div key={course.title} className={styles.courseItem}>
                <GraduationCap size={24} className={styles.courseIcon} />
                <div className={styles.courseDetails}>
                  <h4>{course.title}</h4>
                  <p>{course.institution} - {course.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;