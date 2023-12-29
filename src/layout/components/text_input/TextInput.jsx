import PropTypes from 'prop-types';
import styles from './TextInput.module.css';
function TextInput({ inputType, placeHolder, value, handleOnChange }) {
    return (
        <div className={styles.text_input_container}>
            <input type={inputType} placeholder={placeHolder} value={value} />
        </div>
    )
}

TextInput.propTypes = {
    inputType: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    handleOnChange: PropTypes.string
}


export default TextInput;