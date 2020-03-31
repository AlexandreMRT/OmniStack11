import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg';


export default function NewIncident() {
  return(
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastrar Novo Caso</h1>
          <p>Descreve o caso detalhadamente para encontrar um héroi para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
            </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em Reais" />

          <button className="button" type="submit" >Cadastrar</button>


        </form>
      </div>
    </div>
  );
}