import styles from './RedirectBoxComp.module.css';
function RedirectBoxComp(props) {
    return (
        <div className={styles.redirect_box}>
            <p>Você está prestes a ser redirecionado para:</p>
            <p>{props.link}</p>
            <div>
                <button>Cancelar</button>
                <button>Ir</button>
            </div>
        </div>
    )
}

//TODO Header bugs: border bottom desapears when you click on the icons
//TODO Header bugs: the border bottom must be shown when you load the page
export default RedirectBoxComp;