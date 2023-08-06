import { useState } from 'react';
import cl from './Sert_card.module.scss';

const SertCard = ({ title, subtitle, price, id, addToBasket }) => {
  const [plus, setPlus] = useState(false);

  const onClickPlus = () => {
    addToBasket({ title, subtitle, price, id })
    setPlus((plus) => {
      return !plus;
    });
  };

  return (
    <div key={id} className={cl.sertificat}>
      <h2 className={cl.sertificat__title}>{title}</h2>
      <p className={cl.sertificat__subtitle}>{subtitle}  <span>
        {price}
      </span></p>
      <img onClick={onClickPlus} src={plus ? '/images/btn_card/btn-cheked.svg' : '/images/btn_card/btn-plus.svg'} alt='button' />
    </div>
  )
}
export default SertCard