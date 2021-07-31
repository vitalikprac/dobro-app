import React from 'react';

import * as S from './BurgerMenu.styled';

const BurgerMenu = React.forwardRef(
  ({ transitionDuration, progress, onClick }, ref) => {
    return (
      <S.Wrapper
        transitionDuration={transitionDuration}
        progress={progress}
        onClick={onClick}
        ref={ref}
      >
        <S.LineWrapper className="burger-wrapper-line">
          <S.Line first />
          <S.Line />
          <S.Line />
        </S.LineWrapper>
      </S.Wrapper>
    );
  },
);

export default BurgerMenu;
