import { useTranslation } from "react-i18next";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useScrollToTop } from "../../context/ScrollToTopContext";

const Footer = () => {
  const { t } = useTranslation();
  const { scrollToTop } = useScrollToTop();

  return (
    <footer className="footerContainer">
      <div className="footerInfoContainer">
        <div className="logoFollowMeContainer">
          <div className="footerTextLogoContainer">
            <img
              src="https://res.cloudinary.com/dvnpsisg9/image/upload/v1699478074/ProfessionalLandingPage/companylogo-modified_vmmotb.png"
              alt="Company Logo"
              onClick={scrollToTop}
            />
            <h2> Company Name </h2>
          </div>
          <div className="linkedIn">
            <h5> {t("LinkedInMessage")} </h5>
            <span>
              <a href="https://www.linkedin.com" target="blank">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"
                  alt="Linkedin logo"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="contactDataContainer">
          <div className="contactContainer">
            <GoLocation className="locationPin" />
            <div className="domicile">
              <h5>Lorem ipsum</h5>
              <h5>Lorem ipsum</h5>
            </div>
          </div>
          <div className="contactContainer">
            <BsPhone className="cellphone" />
            <h5>123456789</h5>
          </div>
          <div className="contactContainer">
            <AiOutlineMail className="email" />
            <h5>ejemplo@mail.com</h5>
          </div>
        </div>
      </div>
      <Nav className="footerNavBar">
        <Nav.Link as={Link} to="/" className="navLink" onClick={scrollToTop}>
          {" "}
          {t("Home")}{" "}
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="aboutme"
          className="navLink"
          onClick={scrollToTop}
        >
          {" "}
          {t("About me")}{" "}
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="services"
          className="navLink"
          onClick={scrollToTop}
        >
          {" "}
          {t("Services")}{" "}
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="contact"
          className="navLink"
          onClick={scrollToTop}
        >
          {" "}
          {t("Contact")}{" "}
        </Nav.Link>
      </Nav>
      <div className="pt-5 pb-2 text-center">
        <h6> {t("ReservedRights")} </h6>
      </div>
      <div className="development pt-2 pb-1 text-center">
        <h6> Omnified by </h6>
        <a
          href="https://www.linkedin.com/company/omni-softwaresolutions/"
          target="blank"
        >
          <img
            src="https://res.cloudinary.com/dvnpsisg9/image/upload/v1699479376/ProfessionalLandingPage/OmniLogo_mjkua7.svg"
            alt="Omni Logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
