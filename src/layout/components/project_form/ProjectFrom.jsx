import TextInput from "../text_input/TextInput";
import styles from './ProjectFrom.module.css';
import Select from "../select/Select";
function ProjectFrom() {
    return (
        <form className={styles.form}>
            <TextInput inputType="text" placeHolder="Insira o nome do projeto" />
            <TextInput inputType="number" placeHolder="Insira o orçamento total" />
            <div>
                <Select name="category_id">

                </Select>
            </div>
            <TextInput inputType="submit" value="Criar projeto"/>
        </form>
    );
}
export default ProjectFrom;