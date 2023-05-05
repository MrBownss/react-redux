import { Container, Row, Col, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"

const Biografi = () => {
    const dispacth = useDispatch()

    function title() {
        dispacth({
            type: 'OFF',
            value: 'ReactJS'
        })
    }

    return(
        <div className="bg-home min-vh-100">
            <Container >
                <Row>
                    <Col className=" text-dark p-5 mt-5">
                        <div className="text-center text-white justify-content-center">
                            
                            <Button variant="success" onClick={title}>
                                CHANGE
                            </Button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Biografi
