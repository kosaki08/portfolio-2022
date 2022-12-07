import { atom } from 'recoil';

export interface GlobalState {
  isTransition: boolean;
  isMenuOpen: boolean;
}

export const GlobalState = atom<GlobalState>({
  key: 'globalState',
  default: {
    isTransition: true,
    isMenuOpen: false,
  },
});
