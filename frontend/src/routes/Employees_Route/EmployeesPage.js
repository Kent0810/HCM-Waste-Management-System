import EmployeeCenterboard from './Employee_Components/employee_centerboard/employee_centerboard';
import SideBar from '../../components/Side_Board/Side_Board';

import styles from './EmployeesPage.module.css';
const DUMMY_DATA = [
    {
        name: 'Tôn Minh',
        title: 'Janitor',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'Janitor',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'CEO',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'Janitor',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'Janitor',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'Collector',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'Collector',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'Collector',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
    {
        name: 'Tôn Minh',
        title: 'Janitor',
        workTime: '8:00 - 17:00',
        situation: 'On Time'
    },
]

const EmployeesPage = (props) => {
    return (
        <main className={styles.employee__main}>
            <SideBar />
            <EmployeeCenterboard DUMMY_DATA={DUMMY_DATA} />
        </main>
    )
}

export default EmployeesPage;