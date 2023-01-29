import Modal from 'react-bootstrap/Modal';
import styles from './ReportModal.module.scss';
import {Col, Form, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ReportModal = props => {

    const getCalculatedBF = () => {
        return 12;
    };


    return (
        <Form>
            <Modal
                show={props.show}
                onHide={() => props.setShow(false)}
                dialogClassName={styles.reportModal}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.reportModalBody}>
                    <div>
                        <Row>
                            <Col lg="6" className="m-auto d-inline-block">
                                <h4>{props.subtitle}</h4>
                                <div className={styles.inputsDiv}>
                                    <label htmlFor="insertedBodyFat">Body fat[%]: </label>
                                    <input className={styles.inputs} type="text" id="insertedBodyFat"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="calculatedBF">Calculated BF[%]: </label>
                                    <input disabled className={styles.inputs} value={getCalculatedBF()} type="text" id="calculatedBF"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="weight">Weight[kg]: </label>
                                    <input className={styles.inputs} type="text" id="weight"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="chest">Chest[cm]: </label>
                                    <input className={styles.inputs} type="text" id="chest"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="biceps">Biceps[cm]: </label>
                                    <input className={styles.inputs} type="text" id="biceps"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="waist">Waist[cm]: </label>
                                    <input className={styles.inputs} type="text" id="waist"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="hip">Hip[cm]: </label>
                                    <input className={styles.inputs} type="text" id="hip"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="thigh">Thigh[cm]: </label>
                                    <input className={styles.inputs} type="text" id="thigh"/>
                                </div>

                                <div className={styles.inputsDiv}>
                                    <label htmlFor="calf">Calf[cm]: </label>
                                    <input className={styles.inputs} type="text" id="calf"/>
                                </div>
                                <span className={styles.line}></span>
                                <div className={styles.inputGroups}>
                                    <Form.Group controlId="formFileMultiple">
                                        <Form.Label>Add attachments:</Form.Label>
                                        <Form.Control type="file" multiple/>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col className={styles.modelColumn} lg="6">
                                <img alt="Human" src="human_body_model.jpg" className={styles.humanModel}/>
                            </Col>

                        </Row>
                        <Row>
                            <div>
                                <InputGroup className={styles.inputGroups}>
                                    <InputGroup.Text>Additional informations: </InputGroup.Text>
                                    <Form.Control className={styles.textArea} as="textarea" aria-label="Additional informations" />
                                </InputGroup>
                            </div>
                        </Row>
                    </div>
                    <div className={styles.buttonsGroup}>
                        <Button className="m-2 btn-info">Save</Button>
                        <Button className="m-2 btn-danger" onClick={() => props.setShow(false)}>Close</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Form>
    );
};

export default ReportModal;