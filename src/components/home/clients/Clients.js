import React from "react";
import { Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Clients.css";

const Clients = () => {
  const { t } = useTranslation();

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <section className="clientsSection">
      <Container className="pt-4 mb-4">
        <h2> {t("MyClients")} </h2>
      </Container>

      <Container className="carouselContainer text-center">
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={1200}>
          <div>
            <img
              src="https://res.cloudinary.com/dvnpsisg9/image/upload/v1699478074/ProfessionalLandingPage/companylogo-modified_vmmotb.png"
              alt="Client Logo"
            />
            <h3> {t("ClientName")} </h3>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvnpsisg9/image/upload/v1699478074/ProfessionalLandingPage/companylogo-modified_vmmotb.png"
              alt="Client Logo"
            />
            <h3> {t("ClientName")} </h3>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvnpsisg9/image/upload/v1699478074/ProfessionalLandingPage/companylogo-modified_vmmotb.png"
              alt="Client Logo"
            />
            <h3> {t("ClientName")} </h3>
          </div>
        </AutoplaySlider>
      </Container>

      <Container className="pt-4 mb-4">
        <h2> {t("Opinions")} </h2>
      </Container>

      <Container className="pt-4 mb-4">
        <section className="opinions">
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="clientCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-photo/portrait-cheerful-young-man-white-tshirt-white-background-guy-is-standing-looking-camera-smiling_168410-2324.jpg"
              className="clientCardImage"
            />
            <Card.Body>
              <Card.Title className="clientCardTitle">
                {" "}
                <h3> {t("ClientPosition")} </h3>{" "}
              </Card.Title>
              <Card.Text className="clientCardText">
                {" "}
                {t("ClientOpinion")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="clientCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-photo/portrait-cheerful-young-man-white-tshirt-white-background-guy-is-standing-looking-camera-smiling_168410-2324.jpg"
              className="clientCardImage"
            />
            <Card.Body>
              <Card.Title className="clientCardTitle">
                {" "}
                <h3> {t("ClientPosition")} </h3>{" "}
              </Card.Title>
              <Card.Text className="clientCardText">
                {" "}
                {t("ClientOpinion")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="clientCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-photo/portrait-cheerful-young-man-white-tshirt-white-background-guy-is-standing-looking-camera-smiling_168410-2324.jpg"
              className="clientCardImage"
            />
            <Card.Body>
              <Card.Title className="clientCardTitle">
                {" "}
                <h3> {t("ClientPosition")} </h3>{" "}
              </Card.Title>
              <Card.Text className="clientCardText">
                {" "}
                {t("ClientOpinion")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </section>
  );
};

export default Clients;
