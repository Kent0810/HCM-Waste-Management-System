import styles from './Dashboards.module.css';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui_slice';
//end redux



//components
import CenterDashboard from '../../components/dashboards/center_dashboard/center_dashboard';
import LeftDashboard from '../../components/dashboards/left_dashboard/left_dashboard';
import RightDashboard from '../../components/dashboards/right_dashboard/right_dashboard';
import Notification from '../../components/UI/notification/Notification';
import LoadingModal from '../../components/UI/loading/loading';

//end components

const Dashboards = () => {
    const dispatch = useDispatch()

    const isNotificationVisible = useSelector(state => state.ui.notificationVisible);
    const notification = useSelector(state => state.ui.notification);
    const isLoadingVisible = useSelector(state => state.ui.isLoadingVisible)

    const toggleNotificationHandler = () => {
        dispatch(uiActions.toggleNotification())
    }

    return (
        <main className={styles.main}>
            {isLoadingVisible && <LoadingModal />}
            {isNotificationVisible && <Notification onClick={toggleNotificationHandler} title={notification.title} message={notification.message} />}

            <LeftDashboard />
            <CenterDashboard />
            <RightDashboard />
        </main>
    )
}
export default Dashboards;