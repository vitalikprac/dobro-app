import React from 'react';

import * as S from './BurgerMenu.styled';
import { map } from '../../../../utils/utils';

const BurgerMenu = React.forwardRef(
  ({ transitionDuration, progress, onClick }, ref) => {
    return (
      <S.Wrapper
        style={{
          transform: `scale(${progress})`,
          transitionDuration: `${transitionDuration}ms`,
        }}
        onClick={onClick}
        ref={ref}
      >
        <S.LineWrapper
          style={{
            transitionDuration: `${transitionDuration}ms`,
            transform: `rotateZ(${map(progress, 1, 0, 0, 90)}deg)`,
          }}
        >
          <S.Line first />
          <S.Line />
          <S.Line />
        </S.LineWrapper>
      </S.Wrapper>
    );
  },
);

export default BurgerMenu;
