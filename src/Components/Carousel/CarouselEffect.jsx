import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from './images/data'
import styles from './CarouselEffect.module.css'
const CarouselEffect = () => {
  return (
      <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showInndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return < img key= {imageItemLink} src={imageItemLink} />;
        })
        }
      </Carousel>
      
    </div>
  )
}
  


export default CarouselEffect;