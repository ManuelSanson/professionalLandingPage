import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { useScrollToTop } from "../../context/ScrollToTopContext";

const Services = () => {
  const { t } = useTranslation();
  const { scrollToTop } = useScrollToTop();
  AOS.init();

  return (
    <main>
      <h2 className="m-5"> {t("Services")} </h2>
      <Container>
        <section className="specializedServices">
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="serviceCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://www.tsia.com/tsia.public.dev/media/blog/core-banners/blog-jun-29-21-what-is-PS-quick-guide-img.png?ext=.png"
              className="serviceCardImage"
            />
            <Card.Body>
              <Card.Title className="serviceCardTitle">
                {" "}
                <h3> {t("ServiceName")} </h3>{" "}
              </Card.Title>
              <Card.Text className="serviceCardText">
                {" "}
                {t("ServiceDescription")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="serviceCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://www.tsia.com/tsia.public.dev/media/blog/core-banners/blog-jun-29-21-what-is-PS-quick-guide-img.png?ext=.png"
              className="serviceCardImage"
            />
            <Card.Body>
              <Card.Title className="serviceCardTitle">
                {" "}
                <h3> {t("ServiceName")} </h3>{" "}
              </Card.Title>
              <Card.Text className="serviceCardText">
                {" "}
                {t("ServiceDescription")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="serviceCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://www.tsia.com/tsia.public.dev/media/blog/core-banners/blog-jun-29-21-what-is-PS-quick-guide-img.png?ext=.png"
              className="serviceCardImage"
            />
            <Card.Body>
              <Card.Title className="serviceCardTitle">
                {" "}
                <h3> {t("ServiceName")} </h3>{" "}
              </Card.Title>
              <Card.Text className="serviceCardText">
                {" "}
                {t("ServiceDescription")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
      <Container>
        <article className="introductionArticles">
          <h2> {t("Advantages")} </h2>
          <ul className="pt-3">
            <li>
              {" "}
              <p> {t("Advantage")} </p>{" "}
            </li>
            <li>
              {" "}
              <p> {t("Advantage")} </p>{" "}
            </li>
            <li>
              {" "}
              <p> {t("Advantage")} </p>{" "}
            </li>
            <li>
              {" "}
              <p> {t("Advantage")} </p>{" "}
            </li>
          </ul>
        </article>
      </Container>
      <div className="m-5 text-center">
        <p className="getInTouch"> {t("GetInTouch")} </p>
        <Button
          variant="light"
          className="getInTouchButton m-3 border button"
          as={Link}
          to="/contact"
          onClick={scrollToTop}
        >
          {" "}
          {t("ContactMe")}{" "}
        </Button>
      </div>
      <Container className="p-3 mb-5 questionsContainer">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header> {t("Question")} </Accordion.Header>
            <Accordion.Body> {t("Answer")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> {t("Question")} </Accordion.Header>
            <Accordion.Body> {t("Answer")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> {t("Question")} </Accordion.Header>
            <Accordion.Body> {t("Answer")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header> {t("Question")} </Accordion.Header>
            <Accordion.Body> {t("Answer")} </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </main>
  );
};

export default Services;
