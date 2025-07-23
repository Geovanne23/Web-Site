import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-opions">
          <p>Baixe o nosso Aplicativo</p>
          <p>Baixe nosso aplicativo para Android e ios</p>
          <div>
            <img src="/images/app-store.png" alt="App Store Download" />
            <img src="/images/play-store.png" alt="Play Store Download" />
          </div>
        </div>
        <div className="logo-footer">
          <h1 className="logo">
            TECH<span>TUDO</span>
          </h1>
          <p>
            Obrigado por visitar a TechTudo! Estamos aqui para oferecer os
            melhores produtos eletrônicos com qualidade, segurança e atendimento
            de confiança. Volte sempre!
          </p>
        </div>
        <div className="links">
          <h3>Links úteis</h3>
          <ul>
            <li>
              <Link to="/">Cumpons</Link>
            </li>
            <li>
              <Link to="/">Blog post</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
            <li>
              <Link to="/">Torne-se afiliado</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />
        <p className="copyright">
          Copyright 2025 TechTudo - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
