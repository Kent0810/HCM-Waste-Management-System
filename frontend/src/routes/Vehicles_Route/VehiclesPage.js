
import EmployeeLeftboard from '../../components/Side_Board/Side_Board';
import VehicleCenterBoard from '../../routes/Vehicles_Route/Vehile_Components/vehicle_centerboard/vehicle_centerboard';
import styles from './VehiclesPage.module.css';
import Truck from '../../assests/trucks.png'

const DUMMY_DATA = [
    {
        id: 1,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: '20%',
        fuelValue: '40%',
        capacityValue: '10%',
        currentLocation: 'Lagos'
    },
    {
        id: 2,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: '20%',
        fuelValue: '40%',
        capacityValue: '10%',
        currentLocation: 'Lagos'
    },
    {
        id: 3,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: '20%',
        fuelValue: '90%',
        capacityValue: '10%',
        currentLocation: 'Lagos'
    },
    {
        id: 5,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: '20%',
        fuelValue: '40%',
        capacityValue: '10%',
        currentLocation: 'Lagos'
    },
    {
        id: 6,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: '20%',
        fuelValue: '40%',
        capacityValue: '10%',
        currentLocation: 'Lagos'
    },
    {
        id: 7,
        image: Truck,
        alt: 'car',
        title: 'McNeilus',
        oilValue: '100%',
        fuelValue: '10%',
        capacityValue: '10%',
        currentLocation: 'Lagos'
    },

]

const VehiclesPage = (props) => {
    return (
        <main className={styles.VehiclesPage__main}>
            <EmployeeLeftboard />
            <VehicleCenterBoard DUMMY_DATA={DUMMY_DATA} />
        </main>
    )
}

export default VehiclesPage;