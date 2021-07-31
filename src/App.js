import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

import * as S from './App.styled';
import BackgroundCircles from './pages/components/atoms/BackgroundCircles/index';
import BurgerMenu from './pages/components/atoms/BurgerMenu';
import { useRef } from 'react';
import Swipe from 'react-easy-swipe';
import { map } from './pages/components/atoms/BurgerMenu/BurgerMenu.styled';
import { useSwipe } from './hooks/useSwipe';

const SIZE = 200;

function App() {
  const menuButton = useRef(null);

  const {
    onSwipeStart,
    onSwipeMove,
    onSwipeEnd,
    progress,
    menuRef,
    openMenu,
    transition,
  } = useSwipe(SIZE);

  const burgerProgress = map(progress, -200, 0, 1, 0);

  return (
    <div
      className="App"
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}
    >
      <Swipe
        style={{ height: '100%' }}
        onSwipeStart={onSwipeStart}
        onSwipeEnd={onSwipeEnd}
        onSwipeMove={onSwipeMove}
      >
        <div
          ref={menuRef}
          style={{
            zIndex: 2,
            position: 'relative',
            height: '100%',
            width: `${SIZE}px`,
            transitionDuration: `${transition}ms`,
            transform: `translate(${progress}px)`,
            backgroundColor: 'red',
          }}
        />
        <S.GlobalStyles />
        <BackgroundCircles />
        <BurgerMenu
          progress={burgerProgress}
          transitionDuration={transition}
          onClick={() => {
            openMenu();
          }}
          ref={menuButton}
        />

        <Router>
          <Switch>
            <Route>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Swipe>
    </div>
  );
}

export default App;
