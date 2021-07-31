import React from 'react';
import * as S from './BackgroundCircles.styled';
import LogoImg from '../../../../imgs/Logo.png';

const BackgroundCircles = () => {
  return (
    <div>
      <S.Logo
        style={{
          top: '-70px',
          right: '-30px',
        }}
        src={LogoImg}
      />

      <S.Logo
        style={{
          top: '35vh',
          left: '-50px',
        }}
        src={LogoImg}
      />
      <S.Logo
        style={{
          right: '40px',
          bottom: '30px',
        }}
        src={LogoImg}
      />
    </div>
  );
};

export default BackgroundCircles;
