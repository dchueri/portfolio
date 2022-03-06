import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessage} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [botaoAtivo, setBotaoAtivo] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setBotaoAtivo('#')} className={botaoAtivo === '#' ? 'active' : ''}><TiHomeOutline/></a>
      <a href='#sobre' onClick={() => setBotaoAtivo('#sobre')} className={botaoAtivo === '#sobre' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experiencia' onClick={() => setBotaoAtivo('#experiencia')} className={botaoAtivo === '#experiencia' ? 'active' : ''}><BiBook/></a>
      <a href='#portifolio' onClick={() => setBotaoAtivo('#portifolio')} className={botaoAtivo === '#portifolio' ? 'active' : ''}><MdOutlineDesignServices/></a>
      <a href='#contato' onClick={() => setBotaoAtivo('#contato')} className={botaoAtivo === '#contato' ? 'active' : ''}><BiMessage/></a>
    </nav>
  )
}

export default Nav