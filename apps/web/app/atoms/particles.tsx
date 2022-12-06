import { atom } from 'recoil';

export interface ParticlesState {
  isTransition: boolean;
}

export const particlesState = atom<ParticlesState>({
  key: 'particlesState',
  default: {
    isTransition: true,
  },
});
