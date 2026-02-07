import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./kontakt.css";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Kontakt = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_posswee", "template_yhucekw", form.current, {
        publicKey: "2EARfKPz1fCUV2Llk",
      })

      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true);
          setIsError(false);

          form.current.reset();

          setTimeout(() => {
            setIsSent(false);
            setIsError(false);
          }, 3000);
        },

        (error) => {
          console.log("FAILED...", error.text);
          setIsError(true);
          setIsSent(false);

          form.current.reset();

          setTimeout(() => {
            setIsError(false);
            setIsSent(false);
          }, 3000);
        },
      );
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row my-4">
            <h1 className="text-center mt-3">Kontakt</h1>
            <p className="text-center">
              Imate li pitanje ili komentar? Pišite nam!
            </p>
            <div className="col-md-4 contact-left">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div>
                <h2>Kontakt informacije</h2>
                <p>Upišite riječ za pokretanje chata!</p>
              </div>
              <div className="contact-info">
                <a href="" className="d-flex gap-4 align-items-start">
                  <FontAwesomeIcon icon={faPhone} className="pt-1" /> +1012 3456
                  789{" "}
                </a>
                <a href="" className="d-flex gap-4 align-items-start">
                  <FontAwesomeIcon icon={faEnvelope} className="pt-1" />{" "}
                  demo@gmail.com{" "}
                </a>
                <a href="" className="d-flex gap-4 align-items-start">
                  <FontAwesomeIcon icon={faLocationDot} className="pt-1" /> 132
                  Dartmouth Street Boston, Massachusetts 02156 United
                  States{" "}
                </a>
              </div>
              <div className="socials">
                <a href="www.x.com">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="www.linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>

            <div className="col-md-8 contact-right">
              <div className="d-flex flex-column contact-inputs">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="d-flex flex-column"
                >
                  <label>Ime i prezime</label>
                  <input type="text" name="user_name" className="inputform" />
                  <label>Email</label>
                  <input type="email" name="user_email" className="inputform" />
                  <label>Poruka</label>
                  <textarea rows={2} name="message" className="inputform" />
                  <button
                    type="submit"
                    className={`contact-button mt-5 ${isSent ? "sent" : ""} ${isError ? "error" : ""}`}
                    disabled={isSent}
                  >
                    {isSent
                      ? "Poruka poslana"
                      : isError
                        ? "Poruka nije poslana"
                        : "Pošalji poruku"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
