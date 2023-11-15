import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../../context/ScrollToTopContext";
import "./Resume.css";

const Resume = () => {
  const { t } = useTranslation();
  const { scrollToTop } = useScrollToTop();

  return (
    <section>
      <article className="text-center p-5">
        <div className="picture mb-3">
          <img
            src="https://res.cloudinary.com/dvnpsisg9/image/upload/v1700059489/ProfessionalLandingPage/Aleem_Business_Headshot_for_LinkedIn_Profile_rvh9ai.jpg"
            alt="Professional"
          />
        </div>
        <div className="nameDegree">
          <h2> {t("Name")} </h2>
          <h3> {t("Degree")} </h3>
        </div>
        <div className="description">
          <p className="mt-4"> {t("BriefPresentation")} </p>
          <p className="mt-4"> {t("LearnAboutServices")} </p>
          <Button
            variant="light"
            className="descriptionButton border button"
            as={Link}
            to="/services"
            onClick={scrollToTop}
          >
            {" "}
            {t("Services")}{" "}
          </Button>
          <p className="mt-4"> {t("FreelanceExperience")} </p>
          <p className="mt-4"> {t("Experience")} </p>
          <p className="mt-4"> {t("OfferService")} </p>
          <Button
            variant="light"
            className="descriptionButton border button"
            as={Link}
            to="/contact"
            onClick={scrollToTop}
          >
            {" "}
            {t("ContactMe")}{" "}
          </Button>
        </div>
      </article>
    </section>
  );
};

export default Resume;
