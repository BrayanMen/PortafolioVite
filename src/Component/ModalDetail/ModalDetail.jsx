import Modal from './Modal'
import styles from './ModalDetail.module.scss';
import PropTypes from 'prop-types';

export default function ModalDetail({selectedProject,closeModal, isOpen}) {
    ModalDetail.propTypes = {
        isOpen: PropTypes.bool.isRequired,    
        selectedProject: PropTypes.array.isRequired,
        closeModal: PropTypes.func.isRequired
    };
  return (
    <Modal closeModal={closeModal} isOpen={isOpen} selectedProject={selectedProject}>
         {selectedProject && (
                <div className={styles.detailContainer}>
                  <img className={styles.detailImg} src={selectedProject.image} alt="" />
                  <p className={styles.pdetail}>{selectedProject.summary}</p>
                  <p className={styles.detailPT}>
                    Tecnologías:
                    </p>
                    <p>
                    {selectedProject.technologies.map((t , index) => (
                      <img className={styles.ptimg} key={index} src={t.image} alt="" width={'50px'} />
                    ))}</p>
                  <a href={selectedProject.deployLink}>Enlace al despliegue</a>
                </div>
              )}
    </Modal>
  )
}