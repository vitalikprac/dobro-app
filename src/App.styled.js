import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`;

export const Menu = styled.div`
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 3;
  position: relative;
  height: 100%;
  width: ${(props) => props.size}px;
  transition-duration: ${(props) => props.transition}ms;
  transform: translateX(${(props) => props.progress}px);
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
