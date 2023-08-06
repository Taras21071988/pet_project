import React from 'react'
import cl from './footer.module.scss'
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaViber, FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className='container'>
        <div className={cl.footer__wrapper}>
          <div className={cl.footer__logo}>
            <Link to="/">
              <div className={cl.logo}>
                <img width={125} height={125} src='/images/logo.svg' alt='logo' />
                <div className={cl.logo_text}>
                  <h3>Мастер эпиляции и депиляции</h3>
                  <h3>Cамойлова Алена</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className={cl.footer__list_wrapper}>
            <ul className={cl.footer__list}>
              <li className={cl.footer__list_item}>
                <a href='https://instagram.com/depil_alena.samoilova?igshid=MzRlODBiNWFlZA==' target="_blank" rel="noopener noreferrer"> <AiFillInstagram className={cl.icon} /></a>
              </li>
              <li className={cl.footer__list_item}>
                <a href='#'> <AiFillFacebook className={cl.icon} /></a>
              </li>
              <li className={cl.footer__list_item}>
                <a href='viber://chat?number=+380954686264'> <FaViber className={cl.icon} /></a>
              </li>
              <li className={cl.footer__list_item}>
                <a href='https://t.me/+380954686264' target="_blank" rel="noopener noreferrer"> <FaTelegram className={cl.icon} /></a>
              </li>
            </ul>
          </div>
          <div className={cl.footer__contact}>
            <h2 className={cl.footer_contact_title}>Контакты</h2>
            <ul className={cl.contact__list}>
              <li className={cl.contact__list_item}>Телефон:<br />
                <a href='tel:380954686264'>+380954686264</a>
              </li>
              <li className={cl.contact__list_item}>
                Адрес:<p>г.Харьков ул.Свободы 24</p>
              </li>
              <li className={cl.contact__list_item}>
                <a href='mailto:'>Электронная почта</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer