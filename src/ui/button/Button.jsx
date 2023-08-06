import React from 'react'
import cl from './Button.module.scss'
const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.info__btn}> { children }</button >
  )
}
export default Button