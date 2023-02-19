import React from "react";
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    );
};
export default ErrorPage;