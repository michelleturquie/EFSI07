import React from 'react';
import './Footer.css'

function footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
            <h6>Links rápidos</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/Products">Todos los productos</a></li>
              <li><a href="/QuienesSomos">Quienes Somos</a></li>
              <li><a href="/Contacto">Contacto</a></li>
            </ul>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <a href="#">Michelle Turquie 5IA</a>.
            </p>
          </div>
        </div>
    </footer>
  );
}

export default footer