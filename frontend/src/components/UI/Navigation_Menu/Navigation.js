import { useEffect, useState } from 'react';
import { auth } from '../../../services/config';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

import storage from '../../../store/redux';
import { uiActions } from '../../../store/ui_slice';

const Navigation = () => {
    const [destination, setDestination] = useState("/");
    const clickHandler = (e) => {
        if (!auth.currentUser) {
            e.preventDefault();
            storage.dispatch(uiActions.toggleNotification({ title: "Please sign in", message: "You need to sign in to access this page" }))
        }
    }

    useEffect(() => {
        if (auth.currentUser) setDestination("/dashboards");
        else setDestination("/");
    }, [auth.currentUser])
    return (
        <nav className={styles.nav_menu}>
            <section className={styles.flex_content}>
                <strong className={styles.logo}><em className={styles.stroke}>U</em><em>WC 2.0</em> </strong>
            </section>
            <section className={`${styles.flex_content} ${styles.nav_content}`} id="nav_content">
                <a href="#" className={styles.active}>Home</a>
                <Link to={destination} onClick={clickHandler}>Dashboards</Link>
                <a href="#">Contact us</a>
                <a href="#">About us</a>
            </section>
        </nav>
    )
}
export default Navigation;