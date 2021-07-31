import { useContext } from 'react';
import { OpacityContext } from '../../context/OpacityContext';

const Home = ({ d }) => {
  const { opacity } = useContext(OpacityContext);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: `rgba(0,0,0,${1 - opacity})`,
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div>{d}</div>
      <div>X</div>
      <div>X</div>
    </div>
  );
};

export default Home;
