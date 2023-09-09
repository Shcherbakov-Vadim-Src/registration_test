import { ButtonType } from './../ui/button/types';
import { Wrapper } from './styles';
import { ISecondStepComponentProps } from './types';
import Button from './../ui/button/Button';
import Input from './../ui/input/Input';
import { REGEX_EMAIL } from '../../consts';

const SecondStepComponent = ({ setStep, formData, handleChange }: ISecondStepComponentProps) => {
  const handleClick = () => setStep(true);

  const getResult = () => console.log('result:', formData);

  const isDisabled = !!formData.name.length && !!formData.lastName.length && REGEX_EMAIL.test(formData.eMail);

    return (
      <Wrapper>
        <Input 
          lable='Имя' 
          name="name" 
          value={formData.name} 
          handleChange={handleChange} 
        />
        <Input 
          lable='Фамилия' 
          name="lastName" 
          value={formData.lastName} 
          handleChange={handleChange} 
        />
        <Input 
          lable='E-mail' 
          name="eMail" 
          value={formData.eMail} 
          handleChange={handleChange} 
        />
        <Button 
          name="Зарегистрировать" 
          type={ButtonType.primary} 
          onClick={getResult} 
          disabled={!isDisabled} 
        />
        <Button 
          name="< Назад" 
          type={ButtonType.secondary} 
          onClick={handleClick} 
        />
      </Wrapper>
    );
  }
  
  export default SecondStepComponent;