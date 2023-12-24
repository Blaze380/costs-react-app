import { Link } from "react-router-dom";
import styles from  './Header.module.css'
function Header() {
    return (
        <nav className={styles.nav_bar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/novo-projeto">Novo Projeto</Link></li>
                <li><Link to="/company">Empresa</Link></li>
            </ul>
        </nav>
    );
}
export default Header;