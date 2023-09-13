import Modal from './Modal';
import styles from './ModalDetail.module.scss';
// import git from '../../assets/Images/Icons/github-fill.png';
// import deploy from '../../assets/Images/Icons/deploy.png';
import PropTypes from 'prop-types';

export default function ModalDetail({ selectedProject, closeModal, isOpen }) {
  ModalDetail.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    selectedProject: PropTypes.array.isRequired,
    closeModal: PropTypes.func.isRequired,
  };
  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      selectedProject={selectedProject}
    >
      {selectedProject && (
        <div className={styles.detailContainer}>
          <img
            className={styles.detailImg}
            src={selectedProject.image}
            alt=""
          />
          <p className={styles.pdetail}>{selectedProject.summary}</p>
          <p className={styles.detailPT}>Tecnologías:</p>
          <p>
            {selectedProject.technologies.map((t, index) => (
              <img
                className={styles.ptimg}
                key={index}
                src={t.image}
                alt=""
                width={'50px'}
              />
            ))}
          </p>
          <div className={styles.divLink}>
            <a href={selectedProject.deployLink.url} className={styles.deployLink}>
              <img src={selectedProject.deployLink.image} alt="deploy" width={'30px'}/> Deploy
            </a>
            <a href={selectedProject.githubLink.url} className={styles.deployLink}>
              <img src={selectedProject.githubLink.image} alt="github" width={'30px'} /> Github
            </a>
          </div>
        </div>
      )}
    </Modal>
  );
}
