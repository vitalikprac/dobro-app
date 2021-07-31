import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`;

export const Menu = styled.div`
  z-index: 2;
  position: relative;
  height: 100%;
  width: ${(props) => props.size}px;
  transition-duration: ${(props) => props.transition}ms;
  transform: translate(${(props) => props.progress}px);
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
