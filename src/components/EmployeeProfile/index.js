import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function EmployeeProfile(props) {
    return (
        <>
            <Modal show={props.modalShow} onHide={props.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.firstName} {props.data.lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col>
                                <img src={props.data.photo} alt="Employee Photo"></img>
                            </Col>
                            <Col>
                                <p>
                                    <strong>Email: </strong>{props.data.email}
                                </p>
                                <p>
                                    <strong>Phone: </strong>{props.data.phone}
                                </p>
                                <p>
                                    <strong>Cell: </strong>{props.data.cell}
                                </p>
                                <p>
                                    <strong>Age: </strong>{props.data.age}
                                </p>
                                <p>
                                    <strong>DOB: </strong>
                                    {
                                        new Date(props.data.dob)
                                            .toLocaleDateString(
                                                {
                                                    weekday: "long", 
                                                    year: "numeric", 
                                                    month: "long", 
                                                    day: "numeric"
                                                }
                                            )
                                    }
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h3><strong>Address:</strong></h3>
                                {props.data.streetnumber} {props.data.streetname}
                                <br/>
                                {props.data.city}, {props.data.state} {props.data.postcode}
                                <br/>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmployeeProfile;