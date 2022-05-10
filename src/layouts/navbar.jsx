import { Navbar, Nav, Container} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/img/bikesshoplogo.png';
import CartWidget from "../components/CartWidget/CartWidget";

const NavBarExample = () => {
    return(
        <>


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand>BIKESSHOP</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/tienda">tienda</Nav.Link>
    <Nav.Link as={Link} to="/nosotros">nosotros</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <CartWidget/>
  </Container>
</Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>
    )
}
export default NavBarExample