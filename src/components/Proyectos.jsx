import React from "react";
import imgP1 from "../assets/images/tres-en-raya.png";
import imgP2 from "../assets/images/giftApp.png";
import imgP3 from "../assets/images/galeria-grid.png";
import imgP4 from "../assets/images/primer-proyecto.png";
import "./style/proyecto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faInstagram,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons/faJava";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";

export default function Proyectos() {
  return (
    <section id="proyectos" className="container">
      <h1>Proyectos</h1>
      <p>Algunos de mis proyectos más destacados:</p>
      <main className="cont-card-proyectos row">
        <div className="col-lg-6 p-1">
          <article className="card-proyecto">
            <div className="cont-img-proyecto">
              <img src={imgP1} alt="" />
            </div>
            <div className="cont-info-proyecto">
              <h2>Tres en raya</h2>
              <p>
                Creacion de un juego donde para aplicar conocimiento antes
                adquiridos como Hooks, Logica, Estilos, Components, etc.
              </p>
              <div>
                <FontAwesomeIcon className="icono-proyecto" icon={faHtml5} />
                
                <FontAwesomeIcon className="icono-proyecto" icon={faCss3} />
                <FontAwesomeIcon className="icono-proyecto" icon={faReact} />
                <FontAwesomeIcon className="icono-proyecto" icon={faJs} />
                <a href="">IR AL PROYECTO</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-lg-6 p-1">
          <article className="card-proyecto">
            <div className="cont-img-proyecto">
              <img src={imgP2} alt="" />
            </div>
            <div className="cont-info-proyecto">
              <h2>Gif App</h2>
              <p>
                Aplicación web donde aplico conocimiento de CustomHooks, fetch
                de datos, estados de react y más.
              </p>
              <div>
                <FontAwesomeIcon className="icono-proyecto" icon={faHtml5} />
                <FontAwesomeIcon className="icono-proyecto" icon={faReact} />
                <FontAwesomeIcon className="icono-proyecto" icon={faCss3} />
                <FontAwesomeIcon
                  className="icono-proyecto"
                  icon={faBootstrap}
                />
                <a href="">IR AL PROYECTO</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-lg-6 p-1">
          <article className="card-proyecto">
            <div className="cont-img-proyecto">
              <img src={imgP4} alt="Miniatura proyecto web dinamica" />
            </div>
            <div className="cont-info-proyecto">
              <h2>Web Dinamica</h2>
              <p>
                Web dinamica, donde se destaca el uso de JavaScript donde
                trabajo un poco LocalStorage, Creamos un relog y más.
              </p>
              <div>
                <FontAwesomeIcon className="icono-proyecto" icon={faHtml5} />
                <FontAwesomeIcon className="icono-proyecto" icon={faReact} />
                <FontAwesomeIcon className="icono-proyecto" icon={faCss3} />
                <a href="">IR AL PROYECTO</a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </section>
  );
}
