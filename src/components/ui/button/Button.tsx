import { memo } from 'react';
import { ButtonWrapper } from './styles';
import { IButtonProps } from './types';

const Button = ({ onClick, type, name, disabled}: IButtonProps) => {
    return (
      <ButtonWrapper onClick={onClick} type={type} disabled={disabled || false}>
        {name}
      </ButtonWrapper>
    );
};
  
export default memo(Button);