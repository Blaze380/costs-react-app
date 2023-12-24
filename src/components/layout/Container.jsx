import styles from "./Container.module.css";
//import styled, { css } from "styled-components";
function Container(props) {
    return ( 
        <div className={`${styles.container}  ${styles[props.customClass]}`}> {props.children}</div>
    );//styles.minHeight
}
export default Container;