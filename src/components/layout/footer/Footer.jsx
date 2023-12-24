import styles from './Footer.module.css';
import { FaFacebook, FaWhatsapp, FaGithub } from 'react-icons/fa';
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={`${styles.social_list}  ${styles.facebook_logo}`} ><FaFacebook/></li>
                <li className={`${styles.social_list}  ${styles.whatsapp_logo}`}><FaWhatsapp/></li>
                <li className={`${styles.social_list}  ${styles.github_logo}`}><FaGithub/></li>
            </ul>
            <p><span>Blazeland</span> &copy; 2023</p>
        </footer>
    );
}
export default Footer;