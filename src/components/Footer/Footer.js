import { } from '@fortawesome/fontawesome-free-solid'
import Button from "react-bootstrap/Button";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className="bg-dark h-25 m-auto">
            <div className={styles.buttonsContainer}>
                <Button className={[styles.socialButton, styles.faceebook]}>F</Button>
                <Button className={[styles.socialButton, styles.instagram]}>I</Button>
                <Button className={[styles.socialButton, styles.github]}>G</Button>
            </div>
            <div className={styles.author}>
                <span className="text-white">Coded by Tomasz Siwiec</span>
            </div>
        </footer>
    );
};

export default Footer;