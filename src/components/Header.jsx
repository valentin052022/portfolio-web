import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import './style/header.css'






export default function Header() {
  const [isBarsVisible, setIsBarsVisible] = useState(true);
  const [isCloseVisible, setIsCloseVisible] = useState(false);

  const handleClick = () => {
    setIsBarsVisible(!isBarsVisible);
    setIsCloseVisible(!isCloseVisible);
  };

  const objImages = {
    img: logo,
    description: "logo de la marca",
  };

  return (
    <Navbar expand="md" className="gm-header">
      <Container>
        <Navbar.Brand href="#inicio">
          <img
            className="logo"
            src={objImages.img}
            alt={objImages.description}
          />
        </Navbar.Brand>

        <FontAwesomeIcon
          icon={faBars}
          className={`bars ${isBarsVisible ? "mostrar" : "ocultar"}`}
          onClick={handleClick}
        />
        <FontAwesomeIcon
          icon={faClose}
          className={`close ${isCloseVisible ? "mostrar" : "ocultar"}`}
          onClick={handleClick}
        />

        <Navbar className={`cont-nav ${isBarsVisible ? "" : "isOpen"}`}>
          <a className="nav-link" href="#sobremi">
            Sobre Mi
          </a>
          <a className="nav-link" href="#proyectos">
            Proyectos
          </a>
          <a className="nav-link" href="#contacto">
            Contacto
          </a>
        </Navbar>
      </Container>
    </Navbar>
  );
}
