import { Container, Row, Col, Button } from "react-bootstrap"
import { useState  } from "react"
import { useSelector, useDispatch } from "react-redux";


function Home () {
    const [count, setCount] = useState(0);
    const {count: Number, wording} = useSelector((state) => state.counter)
    const dispacth = useDispatch()

    function positiv() {
        setCount(count + 10)
        dispacth({
            type: 'ACTION_INC',
            value: 1000
        })
    }

    function negatif() {
        setCount(count - 10)
        dispacth({
            type: 'ACTION_DEC',
            value: - 100
        })
    }
    
    

    return(
        <div className="bg-home min-vh-100">
            <Container >
                <Row>
                    <Col className=" text-dark p-5 mt-5">
                        <div className="text-center text-white justify-content-center">
                            <h1>REDUX {count}</h1>
                            <p>{Number} {wording}</p>

                            <Button className="me-4" onClick={positiv}>
                            +
                            </Button>
                            <Button onClick={negatif}>
                                -
                            </Button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Home