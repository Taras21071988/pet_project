import React from 'react'
import cl from './Basket.module.scss'
import Button from '../../ui/button/Button'

function Basket({ items, total, onRemoveItem, addToCheckout }) {


  return (
    <div className={cl.basket}>
      {items.length > 0 ? <h1 className={cl.basket__title}>Ваши покупки</h1>
        : <h1 className={cl.basket__title}>Корзина пуста</h1>
      }

      <div className='container'>
        <div className={cl.basket__wrapper}>
          {items.map((item) => (
            <div key={item.id} className={cl.basket__item}>
              <h3 className={cl.item__title}>{item.title}</h3>
              <p className={cl.item__subtitle}> {item.subtitle} <span>{item.price}</span></p>
              <Button onClick={() => onRemoveItem(item.id)}> Удалить </Button>
            </div>
          ))}
        </div>
        <div className={cl.basket__checkout}>
          <Button onClick={addToCheckout}>
            Совершить покупку
          </Button>
        </div>
        <div className={cl.total}>
          {items.length > 0 ? <h1>
            Общая стоимость:<span>{total}</span>
          </h1> : <h1>
            Совершите покупку
          </h1>}


        </div>
      </div>
    </div>
  )
}
export default Basket