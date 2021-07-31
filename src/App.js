import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

import * as S from './App.styled';
import BackgroundCircles from './pages/components/atoms/BackgroundCircles/index';
import BurgerMenu from './pages/components/atoms/BurgerMenu';
import { useMemo, useRef } from 'react';
import Swipe from 'react-easy-swipe';
import { useSwipe } from './hooks/useSwipe';
import { map } from './utils/utils';
import { OpacityContext } from './context/OpacityContext';

const SIZE = 200;
const TRANSITION_MS = 300;
const MIN_OPACITY = 0.5;

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
    normalizedProgress,
  } = useSwipe({
    size: SIZE,
    transitionMs: TRANSITION_MS,
    areaFromAllowed: SIZE * 1.1,
    fromLeftToRightBorder: SIZE * 0.4,
    fromRightToLeftBorder: SIZE * 0.4,
  });

  const opacity = useMemo(
    () => map(normalizedProgress, 1, 0, 1, MIN_OPACITY),
    [normalizedProgress],
  );

  return (
    <div
      className="App"
      style={{
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.3)',
      }}
    >
      <OpacityContext.Provider value={{ opacity }}>
        <Swipe
          style={{ height: '100%' }}
          onSwipeStart={onSwipeStart}
          onSwipeEnd={onSwipeEnd}
          onSwipeMove={onSwipeMove}
        >
          <S.Menu
            ref={menuRef}
            size={SIZE}
            transition={transition}
            progress={progress}
          />
          <S.GlobalStyles />
          <BackgroundCircles transitionMs={transition} opacity={opacity} />
          <BurgerMenu
            progress={normalizedProgress}
            transitionDuration={transition}
            onClick={openMenu}
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
      </OpacityContext.Provider>
    </div>
  );
}

export default App;
