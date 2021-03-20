import React from 'react';
import { Link } from 'react-router-dom';
import'./estilo.css';

const Topo = () => {
    return(
        <header className="topo">
            <div className="topo-conteudo">
                <Link className="topo-logo-box" to="/">
                    <img className="topo-logo" src="assets/dente.png" alt="logo dentes saudáveis" title="logo dentes saudáveis" />
                    <p className="topo-nome-empresa">Almeida Odontologia</p>
                </Link>

                <nav className="topo-links">
                    <Link className="topo-link" to="/">Home</Link>
                    <Link className="topo-link" to="/contato">Contato</Link>
                    <Link className="topo-link" to="/convenios">Convênios</Link>
                    <Link className="topo-link" to="/agenda">Agenda</Link>
                    <Link className="topo-link" to="/missao">Missão</Link>
                </nav>
            </div>
        </header>
    );
}

export default Topo;