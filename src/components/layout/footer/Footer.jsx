import styles from './Footer.module.css';
import { FaFacebook, FaWhatsapp, FaGithub } from 'react-icons/fa';
function Footer() {
    const socialIconsSize = 25;
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={`${styles.social_list}  ${styles.facebook_logo}`} ><FaFacebook size={socialIconsSize}/></li>
                <li className={`${styles.social_list}  ${styles.whatsapp_logo}`}><FaWhatsapp size={socialIconsSize}/></li>
                <li className={`${styles.social_list}  ${styles.github_logo}`}><FaGithub size={socialIconsSize}/></li>
            </ul>
            <p className={styles.copy_right}><span className={styles.copy_right_span}>Blazeland</span> &copy; 2023</p>
        </footer>
    );
}
export default Footer;