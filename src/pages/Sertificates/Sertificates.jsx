import React from 'react'
import cl from './Sertificates.module.scss'
import SertCard from '../../components/Sert_Card/SertCard'

const Sertificates = ({ items, addToBasket }) => {
  return (
    <div className={cl.sertificates}>
      <div className='container'>
        <h1 className={cl.sertificates__title}>Сертификаты на продцедуры</h1>
        <div className={cl.sertificates__wrapper}>
          {items.map((item) => (
            <SertCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              addToBasket={(obj) => addToBasket(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sertificates