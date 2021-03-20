import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Missao = () => {
    return(
        <EstruturaPagina>
            <div className="missao-container">
                <h2 className="titulo-sessao"><b>Cuidar dos nossos pacientes!</b></h2>
                <ul className="lista-missao limitar-container">
                <p>A nossa maior missão é proporcionar para os nossos clientes melhor qualidade de vida, e bem-estar, trazendo mais facilidade ao seu cotidiano e também preservar a saúde, o sorriso e a qualidade de vida das pessoas, a partir de um atendimento profissional, ético e personalizado.</p>
                <p>Você consegue fazer um acompanhamento adequado com o dentista e criar uma rotina de cuidados com os seus dentes. Ajudaremos a deixar o seu sorriso mais bonito e saudável, melhorando ainda mais a sua seguraça e conforto.</p>
                <p>Disponibilizar aos nossos clientes os melhores, e mais tecnológicos tratamentos dentários para garantir saúde e satisfação ao sorrir. Atenderemos as necessidades da população no que diz respeito a saúde odontológica, aproximando dentistas e clientes com excelência de atendimento e atenção a ambos.
                </p>
                </ul>
                <h3>Estamos à sua disposição!</h3><br/>
                <img className="img-missao" src="assets/missao.png" alt="Foto Dentista" title="Foto Dentista" />
            </div>

        </EstruturaPagina>
    );
}

export default Missao;