import styles from './modal.module.scss';
import {RingLoader} from 'react-spinners'

export default function ModalLoading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingView}>
                <RingLoader
                    color="#1f3493"
                    cssOverride={{}}
                    loading
                    size={200}
                    speedMultiplier={1}
                />
            </div>
        </div>
    )
}