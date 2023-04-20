import styles from './Task_Modal.module.css';

import React from "react";

import ReactDOM from "react-dom";
import { uiActions } from '../../../../store/ui_slice';
import { useDispatch,useSelector } from 'react-redux';
const Backdrop = (props) => {
    const dispatch = useDispatch();
    const isAssigningTruckVisible = useSelector(state => state.ui.isAssigningTruckVisible)

    const clickHandler = () =>{
        if(isAssigningTruckVisible === true){
            dispatch(uiActions.toggleAssigningTruckUI())
        }
        else {
            dispatch(uiActions.toggleAssigningEmployeeUI())
        }
    }
    return <div className={styles.backdrop} onClick={clickHandler} />;
}

const Modal = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.data.user)

    const isAssigningTruckVisible = useSelector(state => state.ui.isAssigningTruckVisible)
    const isAssigningEmployeeVisible = useSelector(state => state.ui.isAssigningEmployeeVisible)

    const clickHandler1 = () =>{
        dispatch(uiActions.toggleAssigningTruckUI())
    }
    const clickHandler2 = () =>{
        dispatch(uiActions.toggleAssigningEmployeeUI())
    }
    return (
        <div className={styles.modal__wrapper}>
            {isAssigningTruckVisible  && <form className={styles.modal__form} onSubmit={props.onSubmit}>
                <h2 className={styles.modal__form__header}>Assign Truck</h2>
                <select className={styles.modal__form__control}>
                    <option value="" selected disabled hidden>Choose MCPs</option>
                    <option value={"MCP1"}>MCP 1</option>
                    <option value={"MCP2"}>MCP 2</option>
                    <option value={"MCP3"}>MCP 3</option>
                    <option value={"MCP4"}>MCP 4</option>
                    <option value={"MCP5"}>MCP 5</option>
                    <option value={"MCP6"}>MCP 6</option>
                    <option value={"MCP7"}>MCP 7</option>
                    <option value={"MCP8"}>MCP 8</option>
                    <option value={"MCP9"}>MCP 9</option>
                </select>
                <input type="text" className={styles.modal__form__control} name="description" placeholder="Task Description?" required="" autofocus="" />
                <input type="date" className={`${styles.modal__form__control} ${styles.modal__form__date}`} name="deadline" placeholder="Deadline?..." required="" autofocus="" />
                <input type="text" className={styles.modal__form__control} name="assignee" placeholder="Assignee?" required="" autofocus="" value={user.userName} readOnly/>
                <select className={styles.modal__form__control}>
                    <option value="" selected disabled hidden>Choose Staff</option>
                    <option value={"e1"}>Nguyen Van A - Janitor</option>
                    <option value={"e2"}>Nguyen Van B - Collector</option>
                    <option value={"e3"}>Nguyen Van C - Janitor</option>
                    <option value={"e4"}>Nguyen Van D - Janitor</option>
                    <option value={"e5"}>Nguyen Van E - Janitor</option>
                    <option value={"e6"}>Nguyen Van F - Collector</option>
                    <option value={"e7"}>Nguyen Van G - Collector</option>
                    <option value={"e8"}>Nguyen Van H - Janitor</option>
                    <option value={"e9"}>Nguyen Van I - Collector</option>
                </select>
                <div className={styles.btns}>
                    <button className={styles.modal__form__button} type="submit" onClick={clickHandler1}>Cancel</button>
                    <button className={styles.modal__form__button} type="submit" onClick={clickHandler1}>Assign Truck</button>
                </div>
            </form>
            }
            {
                isAssigningEmployeeVisible && <form className={styles.modal__form} onSubmit={props.onSubmit}>
                <h2 className={styles.modal__form__header}>Assign Employee</h2>
                <select className={styles.modal__form__control}>
                    <option value="" selected disabled hidden>Choose MCPs</option>
                    <option value={"MCP1"}>MCP 1</option>
                    <option value={"MCP2"}>MCP 2</option>
                    <option value={"MCP3"}>MCP 3</option>
                    <option value={"MCP4"}>MCP 4</option>
                    <option value={"MCP5"}>MCP 5</option>
                    <option value={"MCP6"}>MCP 6</option>
                    <option value={"MCP7"}>MCP 7</option>
                    <option value={"MCP8"}>MCP 8</option>
                    <option value={"MCP9"}>MCP 9</option>
                </select>
                <input type="text" className={styles.modal__form__control} name="description" placeholder="Task Description?" required="" autofocus="" />
                <input type="date" className={`${styles.modal__form__control} ${styles.modal__form__date}`} name="deadline" placeholder="Deadline?..." required="" autofocus="" />
                <input type="text" className={styles.modal__form__control} name="assignee" placeholder="Assignee?" required="" autofocus="" value={user.userName} readOnly/>
                <select className={styles.modal__form__control}>
                    <option value="" selected disabled hidden>Choose Truck</option>
                    <option value={"McNeilus"}>McNeilus</option>
                </select>
                <div className={styles.btns}>
                    <button className={styles.modal__form__button} type="submit" onClick={clickHandler2}>Cancel</button>
                    <button className={styles.modal__form__button} type="submit" onClick={clickHandler2}>Assign Employee</button>
                </div>
            </form>
            }
        </div>
    );
}



const TaskModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal />, document.getElementById('overlay-root'))}
        </React.Fragment>
    );

}
export default TaskModal;