import React from 'react'
import cl from './Btn_card.module.scss'

const Btn_card = ({children}) => {
  return (
    <button className={cl.button}>{children}</button>
  )
}

export default Btn_card