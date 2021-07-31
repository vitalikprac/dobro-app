import styled from 'styled-components';

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const map = function (n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

export const Line = styled.div`
  border-radius: 4px;
  background-color: rgb(163, 205, 204);
  height: 15%;
  width: 7vw;
  margin-top: ${(props) => (props.first ? 0 : '0.3rem')};
`;

// 1 - 90
// 0.5 - 45
// 0 - 0

export const Wrapper = styled.div`
  z-index: 0;
  &:hover {
    /*  transform: scale(0);
    .burger-wrapper-line {
      transform: rotateZ(90deg);
    }*/
  }
  transform: ${(props) => `scale(${props.progress})`};
  .burger-wrapper-line {
    transform: ${(props) => `rotateZ(${map(props.progress, 1, 0, 0, 90)}deg)`};
  }
  transition-duration: 0ms;

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
