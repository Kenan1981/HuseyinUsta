"use client";
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../components/slider/style.scss";

export const Slider = () => {
  return (
    <Carousel className='custom-carousel' interval={4000}> {/* Geçiş süresini artırıyoruz */}
      <Carousel.Item className="item-spacing">
        <Image
          className="d-block w-100 mx-auto" // Resmi tam genişlikte ve ortalanmış olarak ayarladık
          src="/img/2021-10-29.webp" 
          alt="First slide"
         />
        <Carousel.Caption>
          <h3>Birinci Slide</h3>
          <p>Bu birinci slide açıklamasıdır.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item-spacing">
        <Image
          className="d-block w-100 mx-auto" // Resmi tam genişlikte ve ortalanmış olarak ayarladık
          src="/img/2023-03-25.webp" 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>İkinci Slide</h3>
          <p>Bu ikinci slide açıklamasıdır.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item-spacing">
        <Image
          className="d-block w-100 mx-auto" // Resmi tam genişlikte ve ortalanmış olarak ayarladık
          src="/img/2024-06-09.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Üçüncü Slide</h3>
          <p>Bu üçüncü slide açıklamasıdır.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
