import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { particlesState } from '../../atoms';

export interface TempButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClickCallback?: () => void;
}

export const TempButton: FC<TempButtonProps> = (props) => {
  const { onClickCallback, ...rest } = props;
  const [, setParticles] = useRecoilState(particlesState);

  const onClick = () => {
    setParticles((prev) => ({ ...prev, isShow: !prev.isShow }));
    onClickCallback && onClickCallback();
  };

  return (
    <button onClick={onClick} {...rest}>
      click
    </button>
  );
};
