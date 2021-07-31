import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body{
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper{
    position: relative; 
    z-index: 3;
  }
  
  .swiper-container {
    width: 100%;
    z-index: 1;
    height: 100vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .menu {
    min-width: 100px;
    width: 70%;
    max-width: 320px;
    background-color: #2c8dfb;
    color: #fff;
  }

  .content {
    width: 100%;
    -moz-transform: none;
    -webkit-transform: none;
    -o-transform: none;
    -ms-transform: none;
    transform: none;
    
  }

  .menu-button {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 15px;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-color: #2c8dfb;
  }

  .bar {
    position: relative;
    display: block;

    width: 50px;
    height: 5px;

    margin: 10px auto;
    background-color: white;

    border-radius: 10px;

    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  
`;
