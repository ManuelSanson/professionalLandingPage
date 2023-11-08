import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Clients.css';

const Clients = () => {
    const { t } = useTranslation();

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <section className='clientsSection'>
            <Container className='pt-4 mb-4'>
                <h2> {t('MyClients')} </h2>
            </Container>
            
            <Container className='carouselContainer text-center'>
                <AutoplaySlider 
                play={true}
                cancelOnInteraction={false}
                interval={1200}>
                    <div>
                        <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1668535940/TranslatorLandingPage/mvs-logo_hmpr6i.jpg' alt="MVS Abogados Logo" />
                        <h3> MVS Abogados </h3>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1668536015/TranslatorLandingPage/moove-it-logo_xln47s.jpg' alt="Moove It Logo"/>
                        <h3> Moove It </h3>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1668536018/TranslatorLandingPage/bonaudi-logo_cdccho.jpg' alt="Bonaudi Abogados Logo"/>
                        <h3> Bonaudi Abogados </h3>
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1668536012/TranslatorLandingPage/tpa-logo_zq0pbf.jpg' alt="TPA Logo"/>
                        <h3> Traductores Públicos Asociados </h3>
                    </div>
                </AutoplaySlider>
            </Container>
        </section>
    )
}

export default Clients;