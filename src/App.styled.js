import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  html,body,#root{
    
  }
  body{
    margin: 0;
    padding: 0;
  }
`;

export const Menu = styled.div`
  z-index: 3;
  position: relative;
  height: 100%;
  width: ${(props) => props.size}px;

  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
