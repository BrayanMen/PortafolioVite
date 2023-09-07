import React from 'react';
import styles from './Projects.module.scss';
import { projectsData, filterTech } from '../Data/projects'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h1>
        Proyectos
        </h1>
      </div>
      <ul className={styles.ulFilter}>
        {filterTech.map(({ name }) => (
          <li key={name} className={styles.liFilter}>
            <button>{name}</button>
          </li>
        ))}
      </ul>

    </section>
  )
}
