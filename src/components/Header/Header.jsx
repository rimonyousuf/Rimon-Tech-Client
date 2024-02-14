import { Container, Image, Nav, Navbar } from "react-bootstrap";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Header.css'
import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container className="d-flex justify-content-between">
                <Image src={logo}></Image>
                <Nav>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/products'>Products</ActiveLink>
                    <ActiveLink to='/items'>Items</ActiveLink>
                    <ActiveLink to='/mycart'>My Cart</ActiveLink>
                    <ActiveLink to='/about'>About</ActiveLink>
                </Nav>
                <Nav>
                    <ActiveLink to='/signin'>Login</ActiveLink>
                    <ActiveLink to='/signup'>Register</ActiveLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;