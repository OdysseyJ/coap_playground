import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Header = styled.div`
  height: 3rem;
  display: flex;
  align-items:center;
  font-weight: 300;
  font-size: 24px;
  padding-left: 1rem;
  color: black;
  background-color: transparent;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
`

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .slick-slider > .slick-arrow {
    display: none !important;
  }
`

const ImageWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  height: 60vh;
  opacity: 0.8;
  max-width: 500px;
  cursor: move;
`

const ImageDescription = styled.div`
  height: 8vh;
  font-size: 20px;
  font-weight: 300;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
`

const Link = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
  display:flex;
  flex-direction: column;
  align-items:center;
`

const Buy = styled.img`
  width:1.5rem;
  height: 1.5rem;
  margin-top: 10px;
` 

const SliderWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
` 


function App() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    centerMode: true,
    speed: 1000,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Layout>
    <Header>{"COAP"}</Header>
    <SliderWrapper >
    <Slider {...settings}>
          <div>
            <ImageWrapper>
              <Image src={process.env.PUBLIC_URL + "/coap_bag_a.jpg"} />
              <Link href="https://tumblbug.com/coapbagaaa">
              <Buy src={process.env.PUBLIC_URL + "/buy.png"}></Buy>
              <ImageDescription>COAP_bag_A</ImageDescription>
            </Link>
            </ImageWrapper>
          </div>
          <div>
            <ImageWrapper>
              <Image src={process.env.PUBLIC_URL + "/coap_bag_mini.jpeg"} />
              <Link href="https://blog.naver.com/coapofficial/222087494194">
              <Buy src={process.env.PUBLIC_URL + "/buy.png"}></Buy>
              <ImageDescription>COAP_bag_MINI</ImageDescription>
              </Link>
            </ImageWrapper>
          </div>
          <div>
            <ImageWrapper>
              <Image src={process.env.PUBLIC_URL + "/coap_bag_w.jpeg"} />
              <Link href="https://www.wadiz.kr/web/wcomingsoon/rwd/102663">
              <Buy src={process.env.PUBLIC_URL + "/buy.png"}></Buy>
              <ImageDescription>COAP_bag_W</ImageDescription>
              </Link>
            </ImageWrapper>
          </div>
    </Slider>
    </SliderWrapper>
    </Layout>
  );
 
}

export default App;
