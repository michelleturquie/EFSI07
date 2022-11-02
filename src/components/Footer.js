import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css'

function footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <h6>Links rápidos</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/Products">Todos los productos</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <a href="#">Michelle Turquie 5IA</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer