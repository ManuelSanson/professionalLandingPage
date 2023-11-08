import { Container, Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const { i18n, t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar className="navbar" expand="lg">
            <Container className="navbarContainer">
            <div className='languageButtonsContainer'>
                <button onClick={() => changeLanguage('en')}> <img src='https://res.cloudinary.com/diqry3ihg/image/upload/c_scale,w_81/v1665611223/TranslatorLandingPage/US-UKFlag_msslku.png' alt='US-UK Flag'/> <p>English</p> </button>
                <button onClick={() => changeLanguage('esp')}> <img src='https://res.cloudinary.com/diqry3ihg/image/upload/c_scale,h_56,w_81/v1665611223/TranslatorLandingPage/SpainFlag_bbhqmj.png' alt='Spanish Flag'/> <p>Español</p> </button>
            </div>
                <Navbar.Brand as={Link} to='/' className="navbarLogoContainer">
                    <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667418506/TranslatorLandingPage/MSTraducciones_Logo_daheut.png" alt='MS Traducciones Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className="navLink"> {t('Home').toUpperCase()}  </Nav.Link>
                        <Nav.Link as={Link} to='aboutme' className="navLink"> {t('About me').toUpperCase()} </Nav.Link>
                        <Nav.Link as={Link} to='services' className="navLink"> {t('Services').toUpperCase()} </Nav.Link>
                        <Nav.Link as={Link} to='contact' className="navLink"> {t('Contact').toUpperCase()} </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;