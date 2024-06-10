import React from "react";
import "./style/sobremi.css";
import Git from "../assets/icons/git";
import HTML5 from "../assets/icons/IconHtml";
import GitHub from "../assets/icons/GitHub";
import Bootstrap from "../assets/icons/Bootstrap";
import Css from "../assets/icons/Css";
import Express from "../assets/icons/Express";
import JavaScript from "../assets/icons/JavaScript";
import Netlify from "../assets/icons/Netlify";
import Node from "../assets/icons/Node";
import IconR from "../assets/icons/React";
import ImgVale from '../assets/images/vale.jpg'

export default function SobreMi() {
  return (
    <section id="sobremi" className="container">
      <h1>Sobre Mi</h1>
      <p>Conoce mis Aficiones, Skills y más</p>
      <main className="row">
        <article className="col-md-7 cont-conoceme">
          <h3>Conóceme</h3>
          <div className="cont-imagen-sobremi">
            <img src={ImgVale} alt="" />
            <p>
              Soy un apasionado/a de la tecnología y las finanzas, con una gran
              curiosidad por el mundo que me rodea. Actualmente vivo en Calchín,
              Córdoba, Argentina. Poseo una sólida formación en programación,
              con un dominio profundo de HTML, CSS, JavaScript, Bootstrap 5 y
              React. Me encanta la versatilidad de estas tecnologías y la
              posibilidad de crear sitios web dinámicos e interactivos. El mundo
              de las finanzas me fascina desde hace tiempo. Me interesa
              especialmente el análisis técnico y fundamental de empresas, el
              mercado bursátil y las inversiones. Me considero una persona
              analítica y con un gran interés por comprender el comportamiento
              del mercado.
            </p>
          </div>
        </article>
        <article className="col-md-5">
          <h3>Mis Skills</h3>
          <div className="cont-icons-skills">
            <div className="icons-skills">
              <HTML5 />
              <b>HTML5</b>
            </div>
            <div className="icons-skills">
              <Css />
              <b>CSS3</b>
            </div>
            <div className="icons-skills">
              <Bootstrap />
              <b>BOOTSTRAP</b>
            </div>
            <div className="icons-skills">
              <Express />
              <b>EXPRESS</b>
            </div>
            <div className="icons-skills">
              <Git />
              <b>GIT</b>
            </div>
            <div className="icons-skills">
              <GitHub />
              <b>GITHUB</b>
            </div>
            <div className="icons-skills">
              <JavaScript />
              <b>JAVASCRIPT</b>
            </div>
            <div className="icons-skills">
              <Netlify />
              <b>NETLIFY</b>
            </div>
            <div className="icons-skills">
              <Node />
              <b>NODE</b>
            </div>
            <div className="icons-skills">
              <IconR />
              <b>REACT</b>
            </div>

          </div>
        </article>
      </main>
    </section>
  );
}
