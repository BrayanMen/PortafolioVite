import React, { useState } from 'react';
import styles from './Projects.module.scss';
import { projectsData, filterTech } from '../Data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterT, setFilterT] = useState('Todos');
  const [pages, setPages] = useState(1);
  const projectPerPage = 3;

  const hanldlerFilter = (fill) => {
    setFilterT(fill);
    setPages(1);
  };

  const filteredProjects =
    filterT !== 'Todos'
      ? projectsData.filter((project) =>
          project.technologies.some((tech) => tech.name === filterT)
        )
      : projectsData;

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const lastPage = pages * projectPerPage;
  const firstPage = lastPage - projectPerPage;
  const currentProjects = filteredProjects.slice(firstPage, lastPage);
  const paginate = (pageNumber) => setPages(pageNumber);

  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h1>Proyectos</h1>
        <ul className={styles.ulFilter}>
          {filterTech.map(({ name, image }) => (
            <li key={name} className={styles.liFilter}>
              <button
                onClick={() => {
                  hanldlerFilter(name);
                }}
              >
                {name}
                {image ? <img src={image} alt="" width={'15px'} /> : ''}
              </button>
            </li>
          ))}
        </ul>

        <div>
          {currentProjects?.map((p, index) => (
            <div key={index}>
              <img src={p.image} alt="" width={'200px'} />
              <h3>{p.title}</h3>
              <button onClick={() => openModal(p)}>Info</button>
              <h4>
                Tecnologias:
                {p.technologies.map((t) => (
                  <img src={t.image} alt="" width={'20px'} />
                ))}
              </h4>
              <a href={p.deployLink}>
                <h4>Link Aqui</h4>
              </a>
            </div>
          ))}
          <div>
            <ul className={styles.pagination}>
              {Array.from({
                length: Math.ceil(filteredProjects.length / projectPerPage),
              }).map((_, index) => (
                <li key={index}>
                  <button onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isModalOpen && (
          <div onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal}>x</button>
              {selectedProject && (
                <div>
                  <h2>{selectedProject.title}</h2>
                  <img src={selectedProject.image} alt="" width={'400px'} />
                  <p>{selectedProject.summary}</p>
                  <p>
                    Tecnologías:
                    {selectedProject.technologies.map((t) => (
                      <img src={t.image} alt="" width={'50px'} />
                    ))}
                  </p>
                  <a href={selectedProject.deployLink}>Enlace al despliegue</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
