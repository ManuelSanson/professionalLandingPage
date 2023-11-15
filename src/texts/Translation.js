import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Home: "Home",
          "About me": "About Me",
          Services: "Services",
          Contact: "Contact",
          BannerLink:
            "https://res.cloudinary.com/dvnpsisg9/image/upload/v1699478633/ProfessionalLandingPage/ENGProfessionalBanner_erfyq8.png",
          Welcome: "Welcome!",
          IntroductionText:
            "My name is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          ReadMore: "Read more",
          ServicesIntroductionText:
            "I offer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          SeeServices: "See my services",
          MyClients: "Some of the firms I work with...",
          ClientName: "Client Name",
          ClientPosition: "Client Position",
          ClientOpinion: "Client Opinion",
          LinkedInMessage: "FIND ME ON",
          LinkedInURL:
            "https://www.linkedin.com/in/manuel-sanson-trans-dev/?locale=en_US",
          ReservedRights: "COMPANY NAME - ALL RIGHTS RESERVED",
          DownloadResume: "Download resume",
          Degree: "Title / Occupation",
          BriefPresentation:
            "My name is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel. ",
          LearnAboutServices: "You can learn more about my services here:",
          FreelanceExperience:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          Experience:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          OfferService:
            "As you can observe, I have significant experience in lorem ipsum dolor sit amet, consectetur adipiscing elit. If you need my help, please get in touch with me.",
          ContactMe: "Contact me",
          WAppText: "Talk to me on WhatsApp",
          TelegramText: "Talk to me on Telegram",
          ServiceName: "Service name",
          ServiceDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Advantages: "What you will receive purchasing my services",
          Advantage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend.",
          GetInTouch:
            "If you need my help to lorem ipsum dolor sit amet, consectetur adipiscing elit, please get in touch with me.",
          Question: "Lorem ipsum dolor sit amet?",
          Answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex.",
          Help: "How can I help you?",
          SendMessage: "Send me a message",
          Name: "Name",
          EmailAddress: "Email address",
          ConfirmationEmailAddress: "Reenter you email address",
          EmailMatch: "Your email does not match",
          Subject: "Subject",
          Message: "Message",
          MessageSent: "Your message has been sent",
          FillAll: "Please fill out all fields",
          Submit: "Submit",
          Development: "Developed by ",
          OR: "OR",
        },
      },
      esp: {
        translations: {
          Home: "Inicio",
          "About me": "Sobre mí",
          Services: "Servicios",
          Contact: "Contacto",
          BannerLink:
            "https://res.cloudinary.com/dvnpsisg9/image/upload/v1699478634/ProfessionalLandingPage/ESProfessionalBanner_vtg50w.png",
          Welcome: "Bienvenidos!",
          IntroductionText:
            "Mi nombre es Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          ReadMore: "Leer más",
          ServicesIntroductionText:
            "Realizo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          SeeServices: "Ver mis servicios",
          MyClients: "Algunas de las firmas con las que trabajo...",
          ClientName: "Nombre del cliente",
          ClientPosition: "Cargo del Cliente",
          ClientOpinion: "Opinión del Cliente",
          LinkedInMessage: "ENCUÉNTRAME EN",
          LinkedInURL: "https://www.linkedin.com/in/manuel-sanson-trans-dev/",
          ReservedRights: "COMPANY NAME - TODOS LOS DERECHOS RESERVADOS",
          DownloadResume: "Descargar CV",
          Degree: "Título / Ocupación",
          BriefPresentation:
            "Mi nombre es Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          LearnAboutServices: "Puedes ver más sobre mis servicios aquí:",
          FreelanceExperience:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          Experience:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel.",
          OfferService:
            "Como podrás observar cuento con vasta experiencia en lorem ipsum dolor sit amet, consectetur adipiscing elit. Si precisas mi ayuda, no dudes en consultarme.",
          ContactMe: "Contáctame",
          WAppText: "Háblame por WhatsApp",
          TelegramText: "Háblame por Telegram",
          ServiceName: "Nombre del servicio",
          ServiceDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend. Mauris ultrices, lorem eu fermentum cursus, ex nisl consectetur velit, in placerat mauris nunc ut tellus. Proin a rutrum tortor, vitae tristique ex. Nullam neque diam, aliquet sit amet mollis ac, volutpat ut ante. Ut volutpat erat sem, sed tempus ante viverra vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          Advantages: "Lo que obtenes contratando mis servicios",
          Advantage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex. Aliquam condimentum lacus id urna bibendum, sit amet efficitur lectus eleifend.",
          GetInTouch:
            "Si precisas mi ayuda para lorem ipsum dolor sit amet, consectetur adipiscing elit, no dudes en consultarme.",
          Question: "¿Lorem ipsum dolor sit amet?",
          Answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor metus, pellentesque ut justo sed, vehicula lacinia ex.",
          Help: "¿Cómo puedo ayudarte?",
          SendMessage: "Envíame un mensaje",
          Name: "Nombre",
          EmailAddress: "Correo electrónico",
          ConfirmationEmailAddress: "Reingresa tu correo electrónico",
          EmailMatch: "Tu correo electrónico no coincide",
          Subject: "Asunto",
          Message: "Mensaje",
          MessageSent: "Tu mensaje fue enviado",
          FillAll: "Por favor, llena todos los campos",
          Submit: "Enviar",
          Development: "Desarrollado por ",
          OR: "O",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
