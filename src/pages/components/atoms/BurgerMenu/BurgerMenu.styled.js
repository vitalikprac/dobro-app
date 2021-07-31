import styled from 'styled-components';

export const Line = styled.div`
  border-radius: 4px;
  background-color: rgb(163, 205, 204);
  height: 15%;
  width: 7vw;
  margin-top: ${(props) => (props.first ? 0 : '0.3rem')};
`;

export const Wrapper = styled.div`
  z-index: 2;

  position: fixed;
  left: 30px;
  top: 30px;
  background-color: white;
  border-radius: 50%;
  height: 15vw;
  width: 15vw;
  border-color: grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineWrapper = styled.div`
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
