import React from 'react'
//import CardImage from '../CardImage'
import Main from '../template/Main'
import compras from "./compras.jpg"
// <img src={compras} />  <CardImage/>
export default props =>
    <Main icon="home" title="Início"
        subtitle="Crud React.">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema de Filtragem XD</p>
        <img src={compras} />
    </Main>