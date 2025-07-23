import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Smart Band 9</h2>
            <p>
              Tela AMOLED de 1,62" com resolução de 192×490 px, densidade de
              326 ppi e brilho máximo de 1200 nits, com taxa de atualização de
              60 Hz e ajuste automático de brilho — excelente visibilidade mesmo
              à luz do sol. Conta com mais de 100 modos de treino, monitoramento
              de sono e frequência cardíaca em tempo real, resistência à água de
              até 5 ATM e bateria de longa duração que pode chegar a até 14 dias
              com uso moderado. Compatível com Android e iOS, é uma opção
              completa para quem busca estilo, desempenho e saúde no dia a dia.
            </p>
          </div>
          <div className="right-side">
            <img src="/images/exclusive.png" alt="Smart Bang 9" />
          </div>
        </div>
      </div>
    </div>
  );
}
