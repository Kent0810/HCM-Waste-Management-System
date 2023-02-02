import React from "react";
import Table from "../../../UI/table/table";
import styles from "./bottom_box.module.css";

const Bottombox = () => {
    return (
        <div className={styles.bottombox__container}>
            <div className={styles.bottombox__content}>
                <p>Latest Transaction</p>
                <Table />
            </div>
        </div>
    )
}
export default Bottombox;