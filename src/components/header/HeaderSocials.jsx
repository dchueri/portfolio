import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a className='icons' href='https://www.linkedin.com/in/diego-chueri-arag%C3%A3o-48186b119/' target="_blank"><FaLinkedin/></a>
        <a className='icons' href='https://github.com/dchueri' target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials