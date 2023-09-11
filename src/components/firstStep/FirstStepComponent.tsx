import { ButtonType } from './../ui/button/types';
import { IFirstStepComponentProps } from './types';
import { REGEX_PHONE } from '../../consts';
import Wrapper from './../ui/wrapper/Wrapper';
import Button from './../ui/button/Button';
import Input from './../ui/input/Input';

const FirstStepComponent = ({ setStep, formData, onChange }: IFirstStepComponentProps) => {
  const handleClick = () => setStep(false);

  const isDisabled = !!formData.login.length && formData.password.length >= 8 && REGEX_PHONE.test(formData.phone);

  return (
    <Wrapper>
      <Input 
        lable='Логин' 
        name="login" 
        value={formData.login} 
        onChange={onChange}
      />
      <Input 
        lable='Пароль' 
        name="password" 
        value={formData.password} 
        onChange={onChange} 
      />
      <Input 
        lable='Номер телефона' 
        name="phone" 
        value={formData.phone} 
        onChange={onChange} 
      />
      <Button 
        name="Продолжить" 
        type={ButtonType.primary} 
        onClick={handleClick} 
        disabled={!isDisabled} 
      />
    </Wrapper>
  );
}

export default FirstStepComponent;