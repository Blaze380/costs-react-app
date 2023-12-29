import styles from './NewProjectPage.module.css';
import ProjectFrom from '../../components/project_form/ProjectFrom';
function NewProjectPage() {
    return (
        <div className={styles.new_project_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviço</p>
            <ProjectFrom/>
       </div>
    );
}
export default NewProjectPage;