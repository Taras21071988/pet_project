import React from 'react'
import cl from "./Info.module.scss"
import Button from '../../ui/button/Button'
const Info = () => {
  return (
    <div className={cl.info__wrapper}>
      <div className='container'>
        <div className={cl.info__text}>
          <h1 className={cl.info__text_title}>
            Описание продцедур
          </h1>
          <div className={cl.info__text_items}>
            <div className={cl.info__text_item}>
              <h2 className={cl.item__title}>Шугаринг</h2>
              <p className={cl.item__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos inventore perspiciatis error maiores nisi. Rerum, dignissimos aut cupiditate aliquid nisi voluptatibus temporibus optio veritatis excepturi, iusto, quibusdam at ut! Placeat.</p>
            </div>
            <div className={cl.info__text_item}>
              <h2 className={cl.item__title}>Эпиляция</h2>
              <p className={cl.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem delectus nisi qui commodi nesciunt error maxime accusamus. Omnis laborum eligendi fuga consequatur quae voluptas, molestias tenetur dolorum eaque magnam?</p>
            </div>
            <div className={cl.info__text_item}>
              <h2 className={cl.item__title}>Депиляция</h2>
              <p className={cl.item__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta eius odio accusamus, ratione quis laudantium iste at quaerat expedita! Voluptatem quae molestias dolore sequi ipsa delectus, quod fugiat quasi!</p>
            </div>
          </div>
          <Button><a href='/#'>Показать больше</a></Button>
        </div>
      </div>
    </div>
  )
}
export default Info