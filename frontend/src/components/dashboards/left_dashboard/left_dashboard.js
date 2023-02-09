import React, { useEffect } from "react";
import styles from './left_dashboard.module.css';
import logo from '../../../assests/logo.png'
//ICON//
import { MdDashboard, MdOutlineAnalytics, MdOutlineExitToApp } from "react-icons/md";
import { FaChartBar, FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
//ICON END//
import Switch from "../../UI/switch/switch";


//i18next//
import useCustomTranslate from '../../../hooks/useCustomTranslate'
import { useTranslation } from 'react-i18next'


const LeftDashboard = () => {

    useCustomTranslate()

    const { t } = useTranslation()

    return (
        <nav className={styles.leftDashboard__grid}>
            <div className={styles.leftDashboard__content}>
                <div className={styles.leftDashboard__header}>
                    <img src={logo} className={styles.leftDashboard__header__logo}></img>
                    <h1 className={styles.leftDashboard__header__title}>UWC</h1>
                </div>
                <div className={styles.leftDashboard__body}>
                    <p className={styles.leftDashboard__body__title}>{t('Administration')}</p>
                    <div className={styles.leftDashboard__body__item}> <i className={styles.leftDashboard__body__item__icon}><MdDashboard /></i> <span className={styles.leftDashboard__body__item__text}><a href="/#">{t('Dashboard')}</a></span> </div>
                    <div className={styles.leftDashboard__body__item}> <i className={styles.leftDashboard__body__item__icon}><MdOutlineAnalytics /></i> <span className={styles.leftDashboard__body__item__text}><a href="/#">{t("Analytics")}</a></span> </div>
                    <div className={styles.leftDashboard__body__item}> <i className={styles.leftDashboard__body__item__icon}><FaChartBar /></i> <span className={styles.leftDashboard__body__item__text}><a href="/#">{t("Sales")}</a></span> </div>
                    <div className={styles.leftDashboard__body__item}> <i className={styles.leftDashboard__body__item__icon}><BsPeopleFill /></i> <span className={styles.leftDashboard__body__item__text}><a href="/#">{t("Customer")}</a></span> </div>
                    <div className={styles.leftDashboard__body__item}> <i className={styles.leftDashboard__body__item__icon}><MdOutlineExitToApp /></i> <span className={styles.leftDashboard__body__item__text}><a href="/#">{t("Checkout")}</a></span> </div>

                </div>
                <div className={styles.leftDashboard__footer}>
                    <p className={styles.leftDashboard__footer__title}>{t("Settings")}</p>
                    <div className={styles.leftDashboard__footer__item}> <i className={styles.leftDashboard__footer__item__icon}><FaUser /></i> <span className={styles.leftDashboard__footer__item__text}><a href="/#">{t("Profile")}</a></span> </div>
                    <div className={styles.leftDashboard__footer__item}> <i className={styles.leftDashboard__footer__item__icon}><AiOutlineMail /></i> <span className={styles.leftDashboard__footer__item__text}><a href="/#">{t("Inbox")}</a></span> </div>
                    <div className={styles.leftDashboard__footer__item}> <i className={styles.leftDashboard__footer__item__icon}><IoMdSettings /></i> <span className={styles.leftDashboard__footer__item__text}><a href="/#">{t("Settings")}</a></span> </div>
                </div>
                <Switch />
            </div>
        </nav>
    );
};

export default LeftDashboard;