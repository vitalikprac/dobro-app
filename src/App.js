import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

import * as S from './App.styled';
import BackgroundCircles from './pages/components/atoms/BackgroundCircles/index';
import BurgerMenu from './pages/components/atoms/BurgerMenu';
import { useMemo, useRef, useState } from 'react';
import Swipe from 'react-easy-swipe';
import { map } from './pages/components/atoms/BurgerMenu/BurgerMenu.styled';

const MENU_LEFT = 1;
const MENU_RIGHT = 2;
const SIZE = 200;
const FROM_LEFT_TO_RIGHT_BORDER = SIZE * 0.4;
const FROM_RIGHT_TO_LEFT_BORDER = SIZE * 0.4;
const AREA_FROM_ALLOWED = SIZE * 0.9;
const TRANSITION_MS = 300;

function App() {
  const menuButton = useRef(null);
  const [progress, setProgress] = useState(-SIZE);
  const [menuStatus, setMenuState] = useState(MENU_LEFT);
  const [allowChangeMenu, setAllowChangeMenu] = useState(true);
  const menuRef = useRef(null);

  const [transition, setTransition] = useState(0);
  const openMenu = () => {
    setMenuState((prev) => {
      if (prev === MENU_LEFT) {
        setProgress(SIZE);
        return MENU_RIGHT;
      }
      if (prev === MENU_RIGHT) {
        setProgress(0);
        return MENU_LEFT;
      }
    });
  };

  const onSwipeStart = (event) => {
    const clientX = event.changedTouches?.[0]?.clientX;
    if (menuStatus === MENU_LEFT) {
      if (clientX > AREA_FROM_ALLOWED) {
        setAllowChangeMenu(false);
      } else {
        setAllowChangeMenu(true);
      }
    } else {
      setAllowChangeMenu(true);
    }
  };

  const onSwipeMove = (position, event) => {
    if (!allowChangeMenu) {
      return;
    }
    setTransition(0);
    setProgress(position.x);
  };

  const normalProgress = useMemo(() => {
    if (menuStatus === MENU_LEFT) {
      let value = progress - SIZE;
      if (value > 0) {
        value = 0;
      }
      if (value < -SIZE) {
        value = -SIZE;
      }
      return value;
    } else if (menuStatus === MENU_RIGHT) {
      let value = progress;
      if (value < -SIZE) {
        value = -SIZE;
      }
      if (value > 0) {
        value = 0;
      }
      return value;
    }
    return progress;
  }, [menuStatus, progress]);

  const onSwipeEnd = (event) => {
    if (!allowChangeMenu) {
      return;
    }
    setTransition(TRANSITION_MS);
    const clientX = event.changedTouches?.[0]?.clientX;

    if (menuStatus === MENU_LEFT) {
      if (progress < FROM_LEFT_TO_RIGHT_BORDER) {
        setProgress(0);
      } else {
        setProgress(SIZE);
        setMenuState(MENU_RIGHT);
      }
    } else if (menuStatus === MENU_RIGHT) {
      if (clientX > SIZE && progress === SIZE) {
        setProgress(0);
        setMenuState(MENU_LEFT);
      } else if (Math.abs(normalProgress) < FROM_RIGHT_TO_LEFT_BORDER) {
        setProgress(SIZE);
      } else {
        setProgress(0);
        setMenuState(MENU_LEFT);
      }
    }
  };

  const burgerProgress = map(normalProgress, -200, 0, 1, 0);

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
            transform: `translate(${normalProgress}px)`,
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
