import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Agenda = () => {
    return(
        <EstruturaPagina>
                <div className="agenda-container">
                    <h2 className="titulo-sessao"><b>Agende seu horário gratuitamente!</b></h2>
                    <b><p>Agende sua avaliação conosco. É rápido e fácil, seja online ou presencial.</p></b>
                    <b><p>Fique por dentro de nossas promoções e descontos!</p></b>
                    <ul className="agendamento-planos limitar-container">
                    <img className="img-Odontologia" src="assets/Odontologia.png" alt="Foto Odontologia" title="Foto Odontologia" />
                    </ul><br/>
                    <b><p>Aproveite, aniversariante do mês tem 80% de desconto!</p></b><br/>
                    <div>
                    <Link to="/contato" className="btn-contato">Entrar em contato</Link>
                </div><br/>
                </div>
        </EstruturaPagina>
    );
}

export default Agenda;