import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Introduction.css";
import { useScrollToTop } from "../../../context/ScrollToTopContext";

const Introduction = () => {
  const { t } = useTranslation();
  const { scrollToTop } = useScrollToTop();
  AOS.init();

  return (
    <section className="introductionSection">
      <Container className="pt-2">
        <article className="introductionArticles">
          <h2> {t("Welcome")} </h2>
          <p> {t("IntroductionText")} </p>
          <div className="text-center">
            <Button
              variant="light"
              className="border button"
              as={Link}
              to="aboutme"
              onClick={scrollToTop}
            >
              {" "}
              {t("ReadMore")}{" "}
            </Button>
          </div>
        </article>
        <article className="introductionArticles">
          <h3> {t("Services")} </h3>
          <p> {t("ServicesIntroductionText")} </p>
          <div className="text-center">
            <Button
              variant="light"
              className="border button"
              as={Link}
              to="services"
              onClick={scrollToTop}
            >
              {" "}
              {t("SeeServices")}{" "}
            </Button>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default Introduction;
