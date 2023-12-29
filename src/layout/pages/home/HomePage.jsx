import savingsImg from '../../../images/savings.svg';
import styles from './HomePage.module.css';
import LinkButton from '../../components/link_button/LinkButton';
function HomePage() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projectos agora mesmo!</p>
            <LinkButton className={styles.link_button} to="/newproject" text="Criar Projeto"/>
            <img src={savingsImg} alt="Imagem de poupança" />
        </section>
    );
}
export default HomePage;