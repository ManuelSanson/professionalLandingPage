import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';
import { useScrollToTop } from '../../context/ScrollToTopContext';

const Services = () => {
    const { t } = useTranslation();
    const { scrollToTop } = useScrollToTop();
    AOS.init()

    return (
        <main>
            <h2 className='m-5'> {t('Services')} </h2>
            <section>
                <article data-aos={"zoom-in-right"} className='serviceContainer'>
                    <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1677705336/TranslatorLandingPage/OfficialTranslations_mlxvyc.png' alt='Official Translation' className='servicePicture'/>
                    <div className='serviceDescription'>
                        <h3> {t('OfficialTranslations')} </h3>
                        <p> {t('OfficialTranslations1')} </p>
                        <p> {t('OfficialTranslations2')} </p>
                        <p> {t('OfficialTranslations3')} </p>
                    </div>
                </article>
                <article data-aos={"zoom-in-right"} className='serviceContainer'>
                    <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1677705588/TranslatorLandingPage/NonOfficialTranslations_kksa7k.png' alt='Non-Official Translation' className='servicePicture'/>
                    <div className='serviceDescription'>
                        <h3> {t('NonOfficialTranslations')} </h3>
                        <p> {t('NonOfficialTranslations1')} </p>
                        <p> {t('NonOfficialTranslations2')} </p>
                    </div>
                </article>
                <article data-aos={"zoom-in-right"} className='serviceContainer'>
                    <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1677705260/TranslatorLandingPage/AudiovisualTranslations_egyocq.png' alt='Audiovisual Translation' className='servicePicture'/>
                    <div className='serviceDescription'>
                        <h3> {t('AudiovisualTranslations')} </h3>
                        <p> {t('AudiovisualTranslations1')} </p>
                        <p> {t('AudiovisualTranslations2')} </p>
                    </div>
                </article>
            </section>
            <div className="m-5 text-center">
                <p className="getInTouch"> {t('GetInTouch')} </p>
                <Button variant='light' className="getInTouchButton m-3 border button" as={Link} to='/contact' onClick={scrollToTop}> {t('ContactMe')} </Button>
            </div>
        </main>
    )
}

export default Services;