import { Container, Row, Col } from "react-bootstrap"


const Galeri = () => {
    return(
        <div className="bg-home min-vh-100">
            <Container >
                <Row>
                    <Col className=" text-dark p-5">
                        <div className="text-center text-white row justify-content-center d-flex">
                            <img style={{width: "800px", height: "500px"}} src="https://indo-global.co.id/wp-content/uploads/2013/02/hotel-domestic.png
                            " alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Galeri