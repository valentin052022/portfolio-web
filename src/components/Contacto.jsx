import React from 'react'
import './style/contacto.css'


export default function Contacto() {
  return (
    <section id="contacto">
    <h1 class="titulo-section">Contacto</h1>
    <p class="parrafo-secction text-center">Si estás interesado en contactarme, puedes hacerlo a través de estas vías:</p>
    <div class="cont-contacto">
        <a href="https://www.linkedin.com/in/valentin-peralta-b55287222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI3SQhw42TD2kaPk9DaTDYA%3D%3D" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
        </a>
        <a href="mailto:peraltaariel512@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
            peraltaariel512@gmail.com
        </a>
        <a href="https://wa.me/+543573466033" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
            Whatsapp
        </a>
    </div>
</section>
  )
}
