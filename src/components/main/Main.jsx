import React, { useEffect, useState } from 'react'
import cl from "./Main.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import axios from 'axios';
const Main = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    try {
      axios.get("http://localhost:3001/swiper").then((res) => {
        setImages(res.data)
      })
    } catch (error) {
      alert(error)
    }
  }, [])
  return (
    <div className={cl.main}>
      <div className='container'>
        <div className={cl.swiper__wrapper}>
          <div className={cl.swiper}>
            <Swiper
              modules={[Autoplay,]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                waitForTransition: true,
              }}
              spaceBetween={50}
              slidesPerView={1}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>{<img src={image.imgSwip} alt='swiper_images' />}</SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={cl.swiper__text}>
            <h2>Услуги депиляции и шугаринга </h2>
            <h3> В городе Харьков</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main