import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CommButtons.css';

const CommButton = () => {
    const { t, i18n } = useTranslation();
    const [WPMessage, setWPMessage] = useState("");
    
    useEffect(() => {
        if (i18n.language === 'en') {
            setWPMessage('https://wa.me/59899377561?text=Hi%2C%20I%20was%20browsing%20your%20website%20and%20I%20have%20a%20question')
        }
        if (i18n.language === 'esp') {
            setWPMessage('https://wa.me/59899377561?text=Hola%2C%20estaba%20mirando%20tu%20sitio%20web%20y%20tengo%20una%20consulta')
        } 
    }, [i18n.language])

    return (
        <div className='CommContainer'>
            <div className='commLogosContainer'>
                <div className='commLogoContainer'>
                    <a href={WPMessage} data-action='box' className="logoFloat" target="_blank" rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1667423165/TranslatorLandingPage/WAPP_Logo_khcqnx.png' alt='WhatsApp Logo' className='logo'/>
                    </a>
                    <h6 className='talkToMe'> {t('WAppText')} </h6>
                </div>
                <div className='commLogoContainer'>
                    <a href="https://t.me/MSTraducciones" data-action='box' className="logoFloat" target="_blank" rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1676573588/TranslatorLandingPage/Telegram-logo_bxw6mc.png' alt='Telegram Logo' className='logo'/>
                    </a>
                    <h6 className='talkToMe'> {t('TelegramText')} </h6>
                </div>
            </div>
        </div>
    )
}

export default CommButton;