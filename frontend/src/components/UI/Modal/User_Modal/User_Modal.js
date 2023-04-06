import { Link } from 'react-router-dom';
import Modal from '../Modal';
import styles from './User_Modal.module.css';

import { useDispatch, useSelector } from 'react-redux';

const UserModal = (props) => {
    const user = useSelector(state => state.data.user)
    const userName = useSelector(state => state.data.user.userName)
    console.log(user);
    return ( 
        <Modal>
            <div className={styles.User_Profile}>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png'></img>
            </div>
            <h3 className={styles.User_Name}>{userName}</h3>
            <form className={styles.User_Profile_Information}>
                <input type="text" placeholder="Full Name" className={styles.input} value={user.userName} readOnly />
                <input type="date" placeholder="Day of Birth" className={styles.input} value={user.birth} />
                <input type="email" placeholder="Email" className={styles.input} value={user.email}  />
                <input type="phone" placeholder="Phone No." className={styles.input} value={user.phone}/>
                <div className={styles.User_Profile_Information__btn__bottom}>
                    <button class={styles.btn}><Link to='/dashboards'>Cancel</Link></button>
                    <button type='submit' class={styles.btn}>Update</button>
                </div>
            </form>
        </Modal>

    );

}
export default UserModal;