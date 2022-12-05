import { FC, Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { particlesState } from '../../atoms';

export const Debug: FC = () => {
  if (process.env.NODE_ENV === 'development') {
    const [, setParticles] = useRecoilState(particlesState);

    useControls('Particle', {
      isShow: {
        value: true,
        onChange: (value) => {
          setParticles((prev) => ({ ...prev, isShow: value }));
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
