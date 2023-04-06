import { Link } from 'react-router-dom';
import styles from './Profile_Route.module.css';
import { IoMdArrowBack } from "react-icons/io";
import SearchBar from '../../components/UI/Bar_Collections/searchbar/searchbar';
import Switch from '../../components/UI/Others/switch/switch';
import UserModal from '../../components/UI/Modal/User_Modal/User_Modal';

const ProfileRoute = () => {
    return (
        <div className={styles.Profile__container}>
            <header className={styles.Profile__header}>
                <div className={styles.logo_section}>
                    <Link to={"/dashboards"} className={styles.logo} >
                        <IoMdArrowBack size={40} color="#3944BC" />
                    </Link>
                </div>
                <div className={styles.Profile__header__center}>
                    <SearchBar />
                </div>
                <div className={styles.Profile__header__user}>
                    <Switch />
                    <div className={styles.avatar}>

                    </div>
                </div>
            </header>
            <main className={styles.Profile__main}>
                <UserModal />
            </main>
        </div>
    );
}
export default ProfileRoute;