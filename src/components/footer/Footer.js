import { useTranslation } from "react-i18next";
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';
import { useScrollToTop } from "../../context/ScrollToTopContext";

const Footer = () => {
    const { t } = useTranslation();
    const { scrollToTop } = useScrollToTop();
    
    return (
        <footer className="footerContainer">
            <div className="footerInfoContainer">
                <div className='logoFollowMeContainer'>
                    <div className='footerTextLogoContainer'>
                        <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667418506/TranslatorLandingPage/MSTraducciones_Logo_daheut.png" alt='MS Traducciones Logo' onClick={scrollToTop}/>
                        <h2> MS Traducciones </h2>
                    </div>
                    <div className="linkedIn">
                        <h5> {t('LinkedInMessage')} </h5><span><a href={t('LinkedInURL')} target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="Linkedin logo"/></a></span>
                    </div>
                </div>
                <div className="contactDataContainer">
                    <div className="contactContainer">
                        <GoLocation className="locationPin"/>
                        <div className='domicile'>
                            <h5>Camino Castro 540</h5>
                            <h5>Montevideo, Uruguay</h5>
                        </div>
                    </div>
                    <div className="contactContainer">
                        <BsPhone className="cellphone"/>
                        <h5>(+598)99377561</h5>
                    </div>
                    <div className="contactContainer">
                        <AiOutlineMail className="email"/>
                        <h5>manuel@ms-traducciones.com</h5>
                    </div>
                </div>
            </div>
            <Nav className="footerNavBar">
                <Nav.Link as={Link} to='/' className="navLink" onClick={scrollToTop}> {t('Home')}  </Nav.Link>
                <Nav.Link as={Link} to='aboutme' className="navLink" onClick={scrollToTop}> {t('About me')} </Nav.Link>
                <Nav.Link as={Link} to='services' className="navLink" onClick={scrollToTop}> {t('Services')} </Nav.Link>
                <Nav.Link as={Link} to='contact' className="navLink" onClick={scrollToTop}> {t('Contact')} </Nav.Link>
            </Nav>
            <div className="pt-5 pb-2 text-center">
                <h6> {t('ReservedRights')} </h6>
            </div>
            <div className="development pt-2 pb-1 text-center">
                <h6> {t('Development')} </h6>
                <a href="https://manuelsanson.github.io/ManuelSanson-ProjectsPortfolio/" target="blank">
                    <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1669564167/DevPortfolio/MSFrontendLogo_kuoxx6.png" alt="Manuel Sanson - Frontend Developer Logo"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;