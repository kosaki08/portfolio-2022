import { atom } from 'recoil';

export interface ParticlesState {
  isShow: boolean;
}

export const particlesState = atom<ParticlesState>({
  key: 'particlesState',
  default: {
    isShow: true,
  },
});
