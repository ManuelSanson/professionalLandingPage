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
    if (i18n.language === "esp") {
      setResumeURL(
        "https://s3.resume.io/cdn-cgi/image/width=544,height=480,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/92/persistent-resource/new-york-plantillas-de-curriculum.jpg"
      );
      setResumeName("CV - Nombre profesional");
    }
    if (i18n.language === "en") {
      setResumeURL(
        "https://s3.resume.io/cdn-cgi/image/width=544,height=480,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg"
      );
      setResumeName("Resume - Professional's name");
    }
  }, [i18n.language]);

  const saveFile = () => {
    saveAs(`${resumeURL}`, `${resumeName}`);
  };

  return (
    <main>
      <Resume />
      <div className="text-center">
        <Button
          className="button border m-5"
          variant="light"
          onClick={saveFile}
        >
          {" "}
          <img
            src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667433028/TranslatorLandingPage/icons8-downloading-updates-16_ghyg8j.png"
            alt="Download"
          />{" "}
          {t("DownloadResume")}{" "}
        </Button>
      </div>
    </main>
  );
};

export default AboutMe;
