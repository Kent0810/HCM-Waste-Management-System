import EmployeeCard from '../../UI/employee_ui/employee_card/employee_card'
import styles from './employee_centerboard.module.css'


const EmployeeCenterboard = ({ DUMMY_DATA }) => {
    return (
        <div className={styles.centerboard_grid}>
            <div className={styles.centerboard_grid__header}>
                <h2 className={styles.centerboard_grid__title}>Janitor</h2>
                <div className={styles.search}>
                    <input type="text" className={styles.search__input} placeholder="Search..." />
                </div>
            </div>
            <div className={styles.centerboard_grid__item}>
                {DUMMY_DATA.map((item, index) => {
                    if (item.title === 'Janitor') {
                        return (
                            <EmployeeCard name={item.name} title={item.title} workTime={item.workTime} situation={item.situation} />
                        )
                    }
                })}
            </div>
            <div className={styles.centerboard_grid__header}>
                <h2 className={styles.centerboard_grid__title}>Collector</h2>
                <div className={styles.search}>
                    <input type="text" className={styles.search__input} placeholder="Search..." />
                </div>
            </div>
            <div className={styles.centerboard_grid__item}>
                {DUMMY_DATA.map((item, index) => {
                    if (item.title === 'Collector') {
                        return (
                            <EmployeeCard name={item.name} title={item.title} workTime={item.workTime} situation={item.situation} />
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default EmployeeCenterboard;