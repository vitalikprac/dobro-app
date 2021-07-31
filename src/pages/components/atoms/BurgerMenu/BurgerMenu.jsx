import React from 'react';

import * as S from './BurgerMenu.styled';

const BurgerMenu = React.forwardRef(({ progress, onClick }, ref) => {
  return (
    <S.Wrapper progress={progress} onClick={onClick} ref={ref}>
      <S.LineWrapper className="burger-wrapper-line">
        <S.Line first />
        <S.Line />
        <S.Line />
      </S.LineWrapper>
    </S.Wrapper>
  );
});

export default BurgerMenu;
