import { useTranslation } from 'react-i18next';
import './Banner.css'

const Banner = () => {
    const { t } = useTranslation();
    
    return (
        <div className="bannerContainer">            
            <img id='banner' src={t('BannerLink')} alt='Banner'/>
        </div>    
    )
}

export default Banner;