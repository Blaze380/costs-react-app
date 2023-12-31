import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../../images/costs_logo.png';
import * as events from "./HeaderEventHandler";
function HeaderComp() {
    //const elements = document.getElementsByClassName("links");
const elements = {
    links:document.getElementsByClassName("links"),
    homeLogo: document.getElementsByClassName(styles.home_logo),
    navBar: document.getElementsByClassName(styles.nav_bar),
    homeLink:null
}
    return (
        <nav className={styles.nav_bar} id="nav_bar" onClick={(e)=>events.clickLink(e,elements)}>
                    <li className={styles.link}>
                        <Link to="/"><img className={styles.home_logo} src={logo} id="home_logo" alt="Cost logo" /></Link>
                    </li>
                <ul className={styles.list}>
                    <li className={styles.link}>
                        <Link id="home" className="links " to="/" >Home</Link>
                    </li>
                    <li className={styles.link}>
                        <Link id="contact" className="links" to="/contato">Contato</Link>
                    </li>
                    <li className={styles.link}>
                        <Link id="project" className="links" to="/novo-projeto">Novo Projeto</Link>
                    </li>
                    <li className={styles.link}>
                        <Link id="company" className="links" to="/company">Empresa</Link>
                    </li>
                </ul>
        </nav>
    );
}
export default HeaderComp;