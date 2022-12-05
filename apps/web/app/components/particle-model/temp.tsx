import { FC } from 'react';

export interface TempButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClickCallback?: () => void;
}

export const TempButton: FC<TempButtonProps> = (props) => {
  const { onClickCallback, ...rest } = props;
  return (
    <button onClick={onClickCallback} {...rest}>
      click
    </button>
  );
};
