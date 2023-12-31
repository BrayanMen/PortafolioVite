import React, { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import { projectsData, filterTech } from '../Data/projects';
import ModalDetail from './ModalDetail/ModalDetail';

const props = {
  autoPlay: Boolean,
  showButtons: Boolean,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterT, setFilterT] = useState('Todos');
  const [pages, setPages] = useState(1);
  const projectPerPage = 4;


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

        <div className={styles.divCards}>
          {currentProjects?.map((p, index) => (
            <>
            { p.image !== "" && (           
            <div key={index} className={styles.divCard}>
              <img className={styles.imgCard} src={p.image} alt="" />
              <h3 className={styles.titleCard}>
                {p.title}
                <button className={styles.btnCard} onClick={() => openModal(p)}>
                  Detalles
                </button>
              </h3>
              </div>
              )}
              </>
          ))}
        </div>
        <div>
          <ul className={styles.pagination}>
            {Array.from({
              length: Math.ceil(filteredProjects.length / projectPerPage),
            }).map((_, index) => (
              <li key={index}>
                <button
                  className={styles.btnPagination}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isModalOpen && (
          <ModalDetail
            title="Detalles del Proyecto"
            selectedProject={selectedProject}
            closeModal={closeModal}
            isOpen={isModalOpen}
          />
        )}
      </div>
    </section>
  );
}
