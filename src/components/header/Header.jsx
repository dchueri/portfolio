import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/perfil.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá! Eu sou</h5>
        <h1>Diego Chueri</h1>
        <div className="h5 text-ligth">Desenvolvedor Fullstack</div>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} className="me__img" alt="me" />
        </div>
        <a href="#contato" className='scroll__down'>Role para baixo</a>
      </div>
    </header>
  )
}

export default Header