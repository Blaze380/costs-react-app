import styles from './Select.module.css';
import PropTypes from 'prop-types';
function Select({name}) {
    return (
        <div className={styles.select_container}>
            <select name={name} id={name}>
                <option>Selecione a Categoria</option>    
            </select>
        </div>
    );
}

Select.propTypes = {
    name: PropTypes.string
}
export default Select;