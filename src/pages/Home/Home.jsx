import { useContext } from 'react';
import { OpacityContext } from '../../context/OpacityContext';

const Home = () => {
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
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default Home;
