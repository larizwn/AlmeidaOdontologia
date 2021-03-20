import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Convenios = () => {
    return(
        <EstruturaPagina>
            <div className="convenios-container">
                    <h2 className="titulo-sessao"><b>Planos odontológicos</b></h2>
                    <p>Cuidar da saúde bucal da mesma forma que cuidamos da saúde do corpo é muito importante e ter um plano odontológico pode ajudar você a criar esse hábito.</p>
                    <p>Um plano com a <b>Almeida Odontologia</b>, você tem a certeza que está sendo tratado pelos melhores profissionais da área.</p>
                    <p>Você tem a vantagem de conseguir fazer exames específicos em bons laboratórios em um curto prazo de tempo.</p><br/>
                    <ul className="lista-planos limitar-container">
                    <li>
                        <h3>Individual</h3>
                        <p>Plano anual a partir de R$508,00 por pessoa.</p>
                    </li>
                    <li>
                        <h3>Familiar</h3>
                        <p>Plano anual a partir de R$420,00 por pessoa.</p>
                    </li>
                    <li>
                        <h3>Empresarial</h3>
                        <p>Plano anual a partir de R$380,90 por pessoa.</p><br></br>
                    </li>
                    </ul>
                    <br/>
                    <img className="img-familia" src="assets/familia.png" alt="Foto Família" title="Foto Família" />
                        <p><b>Contratação 100% Online e sem burocracia.</b></p>
                        <p><b>Para mais informações sobre parcelamentos, preços e promoções ligue: (11) 4002-8922</b></p>
                </div>
        </EstruturaPagina>
    );
}

export default Convenios;