import EmployeeCenterboard from '../../components/employee_page/employee_centerboard/employee_centerboard';
import EmployeeLeftboard from '../../components/employee_page/employee_leftboard/employee_leftboard';

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
            <EmployeeLeftboard />
            <EmployeeCenterboard DUMMY_DATA={DUMMY_DATA} />
        </main>
    )
}

export default EmployeesPage;