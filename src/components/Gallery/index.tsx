import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode } from 'swiper'

import { Container } from './styles'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

import { sneaker } from '../../data/sneaker'
import { useModal } from '../../hooks/useModal'

const Gallery: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const { openModal, isModalOpen } = useModal()

  return (
    <Container modalPreview={isModalOpen}>
      <Swiper
        modules={[Navigation, Thumbs, FreeMode]}
        className="sneakerSlide"
        slidesPerView={1}
        navigation
        loop
        thumbs={{ swiper: thumbsSwiper }}
        onClick={(swiper: any) => {
          if (!isModalOpen) {
            setThumbsSwiper(swiper)
            openModal()
          }
        }}
      >
        {sneaker.images.map((image, index) => (
          <SwiperSlide key={index} className="itemSlide">
            <img src={image} alt={sneaker.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
        loop={false}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbSlide"
      >
        {sneaker.images.map((image, index) => (
          <SwiperSlide key={index} className="itemSlide">
            <img src={image} alt={sneaker.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Gallery
