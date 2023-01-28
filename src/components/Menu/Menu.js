import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faHome} from "@fortawesome/fontawesome-free-solid";

const Menu = () => {
    return (
        <div>
            <Button variant="dark" className="w-100"><FontAwesomeIcon icon={faHome}/> Dashboard</Button>
            <Button variant="dark" className="w-100"><FontAwesomeIcon
                icon={faAddressBook}/> Reports</Button>
        </div>
    );
};

export default Menu;