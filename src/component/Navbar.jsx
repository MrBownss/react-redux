import {Navbar, Container, Nav} from "react-bootstrap"
import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";


const BasicNavbar = () => {
    const { count } = useSelector((state) => state.counter)
    const TITLE = useSelector((state) => state.title)

    return (
        <>
        <Navbar className="bg-navbar" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="d-flex">
                        <h2 className="dark fw-bold">Hospitality </h2>
                        <h6 className="ms-5 mt-3">Redux = {count}</h6>
                        <h6 className="ms-5 mt-3"> header = {TITLE}</h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="fw-bold ms-5 text-white">Home</NavLink>
                        <NavLink to="/biografi" className="fw-bold ms-5 text-white">Biografi</NavLink>
                        <NavLink to="/galeri" className="fw-bold ms-5 text-white">Galeri</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default BasicNavbar;