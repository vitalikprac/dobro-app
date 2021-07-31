import { useCallback, useMemo, useRef, useState } from 'react';
import { map } from '../utils/utils';

export const useSwipe = ({
  size: SIZE,
  transitionMs: TRANSITION_MS,
  areaFromAllowed: AREA_FROM_ALLOWED,
  fromLeftToRightBorder: FROM_LEFT_TO_RIGHT_BORDER,
  fromRightToLeftBorder: FROM_RIGHT_TO_LEFT_BORDER,
}) => {
  const MENU_LEFT = 1;
  const MENU_RIGHT = 2;

  const [progress, setProgress] = useState(-SIZE);
  const [menuStatus, setMenuState] = useState(MENU_LEFT);
  const [allowChangeMenu, setAllowChangeMenu] = useState(true);

  const menuRef = useRef(null);

  const [transition, setTransition] = useState(0);

  const openMenu = useCallback(() => {
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
  }, [SIZE]);

  const onSwipeStart = useCallback(
    (event) => {
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
    },
    [AREA_FROM_ALLOWED, menuStatus],
  );

  const onSwipeMove = useCallback(
    (position) => {
      if (!allowChangeMenu) {
        return;
      }
      setTransition(0);
      setProgress(position.x);
    },
    [allowChangeMenu],
  );

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
  }, [SIZE, menuStatus, progress]);

  const onSwipeEnd = useCallback(
    (event) => {
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
    },
    [
      FROM_LEFT_TO_RIGHT_BORDER,
      FROM_RIGHT_TO_LEFT_BORDER,
      SIZE,
      TRANSITION_MS,
      allowChangeMenu,
      menuStatus,
      normalProgress,
      progress,
    ],
  );

  const normalizedProgress = useMemo(
    () => map(normalProgress, -SIZE, 0, 1, 0),
    [SIZE, normalProgress],
  );

  return {
    onSwipeStart,
    onSwipeEnd,
    onSwipeMove,
    openMenu,
    progress: normalProgress,
    menuRef,
    transition,
    normalizedProgress,
  };
};
