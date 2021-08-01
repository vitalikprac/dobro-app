import * as S from './Home.styled.js';
import Fieldset from '../components/atoms/Fieldset';
import { ItemContext } from '../../context/ItemContext';
import { useRef, useState } from 'react';

const data = [
  {
    id: 1,
    title: 'Кавові1',
    items: [
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'Test2',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    title: 'Кавові2',
    items: [
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    title: 'Кавові3',
    items: [
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    title: 'Кавові4',
    items: [
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    title: 'Кавові5',
    items: [
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    title: 'Кавові6',
    items: [
      {
        name: 'st',
        price: 50,
      },
      {
        name: 'Test2',
        price: 2,
      },
    ],
  },
];

const Home = () => {
  const [select, setSelect] = useState(null);
  const wrapperRef = useRef(null);
  return (
    <ItemContext.Provider value={{ select, setSelect, wrapperRef }}>
      <S.HomeWrapper ref={wrapperRef}>
        {data
          /*.filter((x) => (select ? x.id === select : true))*/
          .map(({ id, title, items }) => (
            <Fieldset key={id} id={id} title={title} items={items} />
          ))}
      </S.HomeWrapper>
    </ItemContext.Provider>
  );
};

export default Home;
