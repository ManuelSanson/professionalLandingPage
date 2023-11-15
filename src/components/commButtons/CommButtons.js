import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./CommButtons.css";

const CommButton = () => {
  const { t, i18n } = useTranslation();
  const [WPMessage, setWPMessage] = useState("");

  useEffect(() => {
    if (i18n.language === "en") {
      setWPMessage("https://web.whatsapp.com/");
    }
    if (i18n.language === "esp") {
      setWPMessage("https://web.whatsapp.com/");
    }
  }, [i18n.language]);

  return (
    <div className="CommContainer">
      <div className="commLogosContainer">
        <div className="commLogoContainer">
          <a
            href={WPMessage}
            data-action="box"
            className="logoFloat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667423165/TranslatorLandingPage/WAPP_Logo_khcqnx.png"
              alt="WhatsApp Logo"
              className="logo"
            />
          </a>
          <h6 className="talkToMe"> {t("WAppText")} </h6>
        </div>
        <div className="commLogoContainer">
          <a
            href="https://web.telegram.org/k/"
            data-action="box"
            className="logoFloat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1676573588/TranslatorLandingPage/Telegram-logo_bxw6mc.png"
              alt="Telegram Logo"
              className="logo"
            />
          </a>
          <h6 className="talkToMe"> {t("TelegramText")} </h6>
        </div>
      </div>
    </div>
  );
};

export default CommButton;
