import React from "react";
import valeImg from "../assets/images/vale.jpg";
import "./style/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function Hero() {
  return (
    <section className="hero container-fluid">
      <article className="cont-hero">
        <span>¡Hola!</span>
        <h1>
          Soy Valentín Peralta <b>Desarrollador Web</b>
        </h1>
        <p>
          Me especializo en crear interfaces web dinámicas. Mi objetivo es crear
          sitios web visualmente atractivos y funcionales.
        </p>
        <div className="cont-hero-icons">
          <a
            href="https://drive.google.com/file/d/1UVL8mTCHivTTKSdwKfAwd2Woa6XsM7iv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
          <a href="https://github.com/valentin052022" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icons" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/valentín-ariel-peralta-b55287222" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
          </a>
        </div>
      </article> 
    </section>
  );
}
