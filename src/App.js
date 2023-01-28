import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import logo from "./logo.svg";
import ReportsTable from "./components/ReportsTable/ReportsTable";
import Menu from "./components/Menu/Menu";

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="130"
                            height="35"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container fluid>
                <Row className="text-white">
                    <Col className="bg-body column-full-height menubar" lg="2">
                        <Menu />
                    </Col>
                    <Col className="bg-body text-black m-auto h-100" lg="10">
                        <ReportsTable/>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default App;
