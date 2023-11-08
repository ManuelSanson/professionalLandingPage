import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Resume from "./resume/Resume";

const AboutMe = () => {
    const { i18n, t } = useTranslation();
    const [resumeURL, setResumeURL] = useState("");
    const [resumeName, setResumeName] = useState("");
    useEffect(() => {
        if (i18n.language === 'esp') {
            setResumeURL("https://res.cloudinary.com/diqry3ihg/image/upload/v1677710442/TranslatorLandingPage/CV_Traductor_Manuel_Sanson.esp_kr0mk7.jpg")
            setResumeName('CV Traductor Manuel Sanson Prado')
        }
        if (i18n.language === 'en') {
            setResumeURL("https://res.cloudinary.com/diqry3ihg/image/upload/v1677710448/TranslatorLandingPage/Resume_Translator_Manuel_Sanson.eng_rll8bd.jpg")
            setResumeName('Resume Translator Manuel Sanson Prado')
        }
    }, [i18n.language])

    const saveFile = () => {
        saveAs(`${resumeURL}`, `${resumeName}`);
    };
    
    return (
        <main>
            <Resume/>
            <div className="text-center">
                <Button className="button border m-5" variant='light' onClick={saveFile}> <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667433028/TranslatorLandingPage/icons8-downloading-updates-16_ghyg8j.png" alt="Download"/> {t('DownloadResume')} </Button>
            </div>
        </main>
    )
}

export default AboutMe;