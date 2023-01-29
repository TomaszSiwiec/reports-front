import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faHome} from "@fortawesome/fontawesome-free-solid";
import ProfilePreview from "../ProfilePreview/ProfilePreview";
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <Button variant="dark" className="w-100"><FontAwesomeIcon icon={faHome}/> Dashboard</Button>
            <Button variant="dark" className="w-100"><FontAwesomeIcon
                icon={faAddressBook}/> Reports</Button>
            <div className={styles.profilePreviewContainer}>
                <ProfilePreview />
            </div>

        </div>
    );
};

export default Menu;