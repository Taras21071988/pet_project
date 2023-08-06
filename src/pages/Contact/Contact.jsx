import React from 'react'
import cl from './Contact.module.scss'
const Contact = () => {
  return (
    <div className={cl.contact}>
      <div className='container'>
        <div className={cl.contact__wrapper}>
          <div className={cl.contact__list_wrapper}>
            <h1 className={cl.contact_list_title}>Контакты</h1>
            <ul className={cl.contact_list}>
              <li className={cl.contact__list_item}><p>Телефон:</p> 
                <a href='tel:380954686264'>+380954686264</a>
              </li>
              <li className={cl.contact__list_item}><p>Электронная почта</p>
                <a href='mailto:'>Тут указан адрес электронной почты</a>
              </li>
              <li className={cl.contact__list_item}>
               <p>Адрес:</p> <p>г.Харьков ул.Свободы 24</p>
              </li>
            </ul>
          </div>
          <div className={cl.contact__map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.469478724285!2d36.238945276850885!3d50.00255511951168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0dd609aab23%3A0x9ae53e863059766c!2z0YPQuy4g0KHQstC-0LHQvtC00YssIDI0LCDQpdCw0YDRjNC60L7Qsiwg0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjEwMDA!5e0!3m2!1sru!2sua!4v1689601304300!5m2!1sru!2sua" width={1200} height={600} style={{ border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='maps'></iframe>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Contact