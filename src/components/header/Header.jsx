import React from 'react'
import cl from './Header.module.scss'
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = (total) => {

  return (

    <div className={cl.header}>
      <div className='container'>
        <div className={cl.wrapper}>
          <Link to="/">
            <div className={cl.logo}>
              <img width={125} height={125} src='/images/logo.svg' alt='logo' />
              <div className={cl.logo_text}>
                <h3>Мастер эпиляции и депиляции</h3>
                <h3>Cамойлова Алена</h3>
              </div>
            </div>
          </Link>

          <ul className={cl.menu}>
            <li className={cl.menu__item}>
              <a href='/#'> Информация</a>
            </li>
            <li className={cl.menu__item}>
              <a href='/#'> Отзывы</a>
            </li>
            <li className={cl.menu__item}>
              <Link to="/Contact"> Контакты</Link>
            </li>
            <li className={cl.menu__item}>
              <Link to='/Sertificates'> Сертификаты</Link>
            </li>
            <li className={cl.menu__item}>
              <a href='/#'> Прайс услуг</a>
            </li>
          </ul>
          <ul className={cl.control_panel}>
            <li className={cl.item}>
              <Link to="/Basket">
                <AiOutlineShoppingCart className={cl.icon} />
              </Link>
              <span>Общая сумма:{total.total}</span>

            </li>
            {/* <li className={cl.item}>
              <AiOutlineHeart className={cl.icon} />
            </li> */}
            <li className={cl.item}>
              <Link to="/Login">
                <AiOutlineUser className={cl.icon} />
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Header