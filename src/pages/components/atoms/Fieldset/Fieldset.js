import React, { useContext, useEffect, useRef, useState } from 'react';

import * as S from './Fieldset.styled';
import { ItemContext } from '../../../../context/ItemContext';

const Fieldset = ({ items, title, id }) => {
  const { select, setSelect, wrapperRef } = useContext(ItemContext);
  const elemRef = useRef(null);
  const contentRef = useRef(null);
  const maxHeight = items.length * 25 + 40;
  const handleClick = (e, close) => {
    e.stopPropagation();

    setSelect((prev) => {
      if ((prev === null || prev !== id) && !close) {
        return id;
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    if (select === id && elemRef.current) {
      const y = elemRef.current.getBoundingClientRect().top;
      setTimeout(() => {
        //console.log(elemRef.current);
        // wrapperRef.current.scrollTo({ top: y - 100, behavior: 'smooth' });
        elemRef.current.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }, 300);
    }
  }, [id, select, wrapperRef]);

  useEffect(() => {
    //setMaxH(contentRef.current?.clientHeight + 50);
  }, [contentRef.current]);

  const show = select !== id;

  return (
    <S.Main
      onClick={(e) => handleClick(e, true)}
      ref={elemRef}
      style={{
        height: '100%',
        maxHeight: select === id ? '60%' : `${maxHeight}px`,
      }}
    >
      <S.Legend>{title}</S.Legend>
      {show ? (
        <div ref={contentRef}>
          {items.map(({ name, price }) => (
            <S.Item>
              <div onClick={(e) => handleClick(e, false)}>{name}</div>
              <div>{price}</div>
            </S.Item>
          ))}
        </div>
      ) : (
        <div>
          <div>Тут буде картинка)</div>
          <button
            style={{ backgroundColor: 'green' }}
            onClick={(e) => {
              e.stopPropagation();
              alert(1);
            }}
          >
            Шо)
          </button>
        </div>
      )}

      {/*  <button style={{ backgroundColor: 'green' }} onClick={handleClick}>
        asd
      </button>*/}
    </S.Main>
  );
};

export default Fieldset;
