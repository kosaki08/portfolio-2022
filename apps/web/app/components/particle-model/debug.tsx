import { FC, Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { GlobalState } from '../../atoms';

export const Debug: FC = () => {
  if (process.env.NODE_ENV === 'development') {
    const [, setGlobalState] = useRecoilState(GlobalState);

    useControls('Particle', {
      isTransition: {
        value: true,
        onChange: (value) => {
          setGlobalState((prev) => ({ ...prev, isTransition: value }));
        },
      },
    });
    const control = useControls('Misc', {
      isStats: false,
    });
    return <Fragment>{control.isStats && <Perf position="top-left" />}</Fragment>;
  }
  return null;
};
Debug.displayName = 'Debug';
