import React, { useEffect, useState } from 'react';
import IsScrolling from 'react-is-scrolling';

import * as S from './BurgerMenu.styled';
import { map } from '../../../../utils/utils';

const HEIGHT = 2;

const BurgerMenu = React.forwardRef(
  ({ isScrolling, transitionDuration, progress, onClick }, ref) => {
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
      if (!ref) {
        return () => {};
      }

      let lastScrollTop = 0;
      const listener = () => {
        const scrollTop = window.scrollY;

        if (scrollTop < lastScrollTop) {
          setScroll('up');
        } else if (scrollTop > HEIGHT) {
          setScroll('down');
        }
        lastScrollTop = scrollTop;
      };

      window.addEventListener('scroll', listener);
      return () => {
        window.removeEventListener('scroll', listener);
      };
    }, [ref]);

    useEffect(() => {}, [isScrolling]);
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
