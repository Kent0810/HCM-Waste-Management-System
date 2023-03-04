import styles from './vehicle_card.module.css';
import Skillbar from '../../vehile_page/Skill_bar/skill_bar';
const VehicleCard = (props) => {
    return (
        <div className={styles.vehicle_card}>
            <div className={styles.vehicle_card__img}>
                <img className={styles.vehicle_card__img_preview} src={props.image} alt="Image name" />
            </div>
            <div className={styles.vehicle_card__header}>
                <h2 className={styles.vehicle_card__title}>{props.title}</h2>
            </div>
            <div className={styles.vehicle_card_stats}>
                <Skillbar label="Fuel" value={props.fuelValue} />
                <Skillbar label="Capacity" value={props.capacityValue} />
                <Skillbar label="Oil" value={props.oilValue} />
            </div>
            <div className={styles.vehicle_card__info}>
                <p>Current Location:{props.currentLocation}</p>
                <p className={styles.btn}>Assign !!</p>
            </div>
        </div>
    );
};
export default VehicleCard;