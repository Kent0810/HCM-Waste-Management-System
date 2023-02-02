import React from "react";

import styles from './center_box.module.css';
import { FcRating } from "react-icons/fc";
import Card from '../../../UI/card/card'
const Centerbox = () => {
    return (
        <div className={styles.centerbox__container}>
            <div className={styles.centerbox__content}>
                <div className={styles.centerbox__content__upper}>
                    <p>Dashboard Overview</p>
                    <h1>Hello User <span><FcRating /></span></h1>
                </div>
                <div className={styles.centerbox__content__description}>
                    <Card title="Current Location" description="Ho Chi Minh City" />
                    <Card title="Destination" description="Da Nang" />
                </div>
            </div>
        </div>
    )
}
export default Centerbox;