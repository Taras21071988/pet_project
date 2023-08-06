import React, { useState } from 'react'
import cl from './Card.module.scss'
import Modal from '../modal/Modal'
import Button from '../../ui/button/Button'

const Card = (props) => {
  const [modal, setModal] = useState(false)

  return (
    
    <div key={props.foto.id} className={cl.inst__block} onClick={() => setModal(true)}>
      <img width={380} height={380} src={props.foto.foto__inst} alt='inst_foto' />
      <p className={cl.inst__text}>{props.foto.title}</p>

      <Modal visible={modal} setActive={setModal} >
        <div className={cl.modal__block} onClick={() => setModal(false)}>
          <img width={560} height={560} src={props.foto.foto__inst} alt='inst_foto' />
          <h2 className={cl.modal__title} >{props.foto.title} </h2>
          <p className={cl.modal__text}  >{props.foto.subtitle}</p>
          <Button onClick={() => setModal(false)}>Зaкрыть</Button>
        </div>
        
      </Modal >
    </div>
  )
}

export default Card