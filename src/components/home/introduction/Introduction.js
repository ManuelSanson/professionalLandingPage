import { Button, Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Introduction.css';
import { useScrollToTop } from "../../../context/ScrollToTopContext";

const Introduction = () => {
    const { t } = useTranslation();
    const { scrollToTop } = useScrollToTop();
    AOS.init()

    return (
        <section className="introductionSection">
            <Container className="pt-2">
                <article className="introductionArticles">
                    <h2> {t('Welcome')} </h2>
                    <p> {t('IntroductionText')} </p>
                    <div className='text-center'>
                        <Button variant='light' className="border button" as={Link} to='aboutme' onClick={scrollToTop}> {t('ReadMore')} </Button>
                    </div>
                </article>
                <article className="introductionArticles">
                    <h3> {t('Services')} </h3>
                    <p> {t('ServicesIntroductionText')} </p>
                    <div className='text-center'>
                        <Button variant='light' className="border button" as={Link} to='services' onClick={scrollToTop}> {t('SeeServices')} </Button>
                    </div>
                </article>
                <article className="guarantees">
                    <Card data-aos={"flip-up"} data-aos-duration={"800"} className='guaranteeCard bg-light align-items-center text-center m-1 mb-3'>
                        <Card.Img variant="top" src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667425554/TranslatorLandingPage/verlogo_wg5qxu.png" className="cardImage"/>
                        <Card.Body>
                            <Card.Title className="cardTitle"> <h3> {t('Quality')} </h3> </Card.Title>
                            <Card.Text className="cardText"> {t('QualityText')} </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card data-aos={"flip-up"} data-aos-duration={"800"} className='guaranteeCard bg-light align-items-center text-center m-1 mb-3'>
                        <Card.Img variant="top" src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667426131/TranslatorLandingPage/clockLogo_wfwn8k.png" className="cardImage"/>
                        <Card.Body className="justify-content-center">
                            <Card.Title className="cardTitle"> <h3> {t('Speed')} </h3> </Card.Title>
                            <Card.Text className="cardText"> {t('SpeedText')} </Card.Text>
                        </Card.Body>
                    </Card>
                </article>
            </Container>
        </section>
    )
}

export default Introduction;