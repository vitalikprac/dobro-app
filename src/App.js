import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Swiper from 'swiper';

import './App.css';
import Home from './pages/Home';

import * as S from './App.styled';
import BackgroundCircles from './pages/components/atoms/BackgroundCircles/index';
import BurgerMenu from './pages/components/atoms/BurgerMenu';
import { useEffect, useMemo, useRef, useState } from 'react';
import Swipe from 'react-easy-swipe';
import { no } from 'tailwindcss/lib/cli/emoji';

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

const MENU_LEFT = 1;
const MENU_RIGHT = 2;
const SIZE = 200;
const FROM_LEFT_TO_RIGHT_BORDER = SIZE * 0.4;
const FROM_RIGHT_TO_LEFT_BORDER = SIZE * 0.4;

function App() {
  const swiperRef = useRef(null);
  const menuButton = useRef(null);
  const [progress, setProgress] = useState(-SIZE);
  const [menuStatus, setMenuState] = useState(MENU_LEFT);
  const menuRef = useRef(null);

  const [transition, setTransition] = useState(0);
  const openMenu = () => {
    //swiperRef.current.slidePrev();
    //menuButton.current.classList.toggle('clicked');
  };

  useEffect(() => {
    // console.log(swiperRef.current?.progress);
    //console.log(debouncedProgress);
  }, [swiperRef.current?.progress]);

  useEffect(() => {
    /* swiperRef.current = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        reachBeginning: (s) => {
          console.log('A');
        },
        slideResetTransitionEnd: (s) => {
          console.log('B');
        },
        progress: (_, p) => {},
        setTranslate: (swiper, t) => {
          const size = swiper.slidesSizesGrid?.[0];
          setProgress(t);
          console.log(size, -t);
        },
      },
    });*/
  }, []);

  const onSwipeStart = (event) => {
    //console.log('Start swiping...', event);
  };

  const onSwipeMove = (position, event) => {
    setTransition(0);
    setProgress(position.x);
  };

  const normalProgress = useMemo(() => {
    if (menuStatus === MENU_LEFT) {
      let value = progress - SIZE;
      if (value > 0) {
        value = 0;
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
    setTransition(300);
    //console.log({ menuStatus });
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
        console.log(event);
      } else if (Math.abs(normalProgress) < FROM_RIGHT_TO_LEFT_BORDER) {
        setProgress(SIZE);
      } else {
        setProgress(0);
        setMenuState(MENU_LEFT);
      }
    }
    // console.log('End swiping...', event);
  };

  // console.log(normalProgress);

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

        {/*<div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide menu">
            <button onClick={() => alert(2)}>CL</button>Menu slide
          </div>
          <div className="swiper-slide content">asdasdasd</div>
        </div>
      </div>*/}
        <S.GlobalStyles />
        <BackgroundCircles />
        <BurgerMenu
          progress={1}
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
