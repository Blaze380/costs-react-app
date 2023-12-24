import savings from '../../../images/savings.svg';
function Home() {
    return (
        <section>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projectos agora mesmo!</p>
            <a href="/">Criar Projeto</a>
            <img src={savings} alt="" />
        </section>
    );
}
export default Home;