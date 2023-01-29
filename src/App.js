import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import logo from "./logo.svg";
import ReportsTable from "./components/ReportsTable/ReportsTable";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container className="m-auto">
                    <Navbar.Brand href="#home" className="m-auto">
                        <img
                            alt=""
                            src={logo}
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container fluid>
                <Row className="text-white">
                    <Col className="bg-body column-full-height menubar position-relative" lg="2">
                        <Menu />
                    </Col>
                    <Col className="bg-body text-black m-auto h-100" lg="10">
                        <ReportsTable/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
