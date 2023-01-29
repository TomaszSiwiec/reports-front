import image from './images.png'
import styles from './ProfilePreview.module.scss';
import Button from "react-bootstrap/Button";
import {faUser} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfilePreview = () => {
    return(
        <div className={styles.container}>
            <div className={styles.photo}>
                <img src={image} alt={"Profile"}/>
            </div>
            <div className={styles.name}>
                Tomasz Siwiec
            </div>
            <Button><FontAwesomeIcon icon={faUser}/> Profile</Button>
        </div>
    );
};

export default ProfilePreview;