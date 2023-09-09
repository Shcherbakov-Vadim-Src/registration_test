import { ButtonType } from './../ui/button/types';
import { Wrapper } from './styles';
import { IFirstStepComponentProps } from './types';
import Button from './../ui/button/Button';
import Input from './../ui/input/Input';
import { REGEX_PHONE } from '../../consts';


const FirstStepComponent = ({ setStep, formData, handleChange }: IFirstStepComponentProps) => {
  const handleClick = () => setStep(false);

  const isDisabled = !!formData.login.length && formData.password.length >= 8 && REGEX_PHONE.test(formData.phone);

  return (
    <Wrapper>
      <Input 
        lable='Логин' 
        name="login" 
        value={formData.login} 
        handleChange={handleChange} 
      />
      <Input 
        lable='Пароль' 
        name="password" 
        value={formData.password} 
        handleChange={handleChange} 
      />
      <Input 
        lable='Номер телефона' 
        name="phone" 
        value={formData.phone} 
        handleChange={handleChange} 
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