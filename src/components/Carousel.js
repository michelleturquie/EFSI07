import React from 'react'
import Carousel from 'better-react-carousel'
import '../App.css';

function Gallery() {
  return (
    <Carousel cols={1} rows={1} gap={10} loop autoplay={3000}>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://machive.com.pk/wp-content/uploads/2020/10/iphone-12-pro-banner-islamabad.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://www.applestore.pk/wp-content/uploads/2020/03/iPhone-11-Pro-Inner-Banner-1920-X-710-Website.jpg" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="container">
            <img width="100%" src="https://blog.daraz.com.bd/wp-content/uploads/2019/10/iphone-11-banner.png" />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;