import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css'

export default function NewIncident() {
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Heroe" />
                    <h1> Cadastrar no caso </h1>
                    <p> Descreva o caso detalhadamente para encontrar um heroi para resolver isso. </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#E02041' />
                        voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Descrição" name="" cols="" rows=""/>
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit"> Cadatrar</button>
                </form>

            </div>
        </div>
    );
}
