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
        {filterTech.map(({ name,image }) => (
          <li key={name} className={styles.liFilter}>
            <button>{name}{image?<img src={image} alt="" width={'15px'} />:''}</button>
          </li>
        ))}
      </ul>

    </section>
  )
}
