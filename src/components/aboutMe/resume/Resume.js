import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../../../context/ScrollToTopContext';
import './Resume.css';

const Resume = () => {
    const { t } = useTranslation();
    const { scrollToTop } = useScrollToTop();

    return (
        <section>
            <article className="text-center p-5">
                <div className="picture mb-3">
                    <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1665774401/TranslatorLandingPage/AboutMePicture-black_ob0uxd.png" alt="Manuel Sanson Prado"/>
                </div>
                <div className="nameDegree">
                    <h2>Manuel Sanson Prado</h2>
                    <h3> {t('Degree')} </h3>
                </div>
                <div className='description'>
                    <p className='mt-4'> {t('BriefPresentation')} </p>
                    <p className='mt-4'> {t('LearnAboutServices')} </p>
                    <Button variant='light' className="descriptionButton border button" as={Link} to='/services' onClick={scrollToTop}> {t('Services')} </Button>
                    <p className='mt-4'> {t('FreelanceExperience')} </p>
                    <p className='mt-4'> {t('TPAExperience')} </p>
                    <p className='mt-4'> {t('OfferService')} </p>
                    <Button variant='light' className="descriptionButton border button" as={Link} to='/contact' onClick={scrollToTop}> {t('ContactMe')} </Button>
                </div>
            </article>

        </section>
    )
}

export default Resume;