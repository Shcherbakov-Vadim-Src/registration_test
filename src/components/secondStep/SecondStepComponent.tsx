import { ButtonType } from './../ui/button/types';
import { ISecondStepComponentProps } from './types';
import { REGEX_EMAIL } from '../../consts';
import Wrapper from './../ui/wrapper/Wrapper';
import Button from './../ui/button/Button';
import Input from './../ui/input/Input';

const SecondStepComponent = ({ setStep, formData, onChange }: ISecondStepComponentProps) => {
  const handleClick = () => setStep(true);

  const getResult = () => console.log('result:', formData);

  const isDisabled = !!formData.name.length && !!formData.lastName.length && REGEX_EMAIL.test(formData.eMail);

    return (
      <Wrapper>
        <Input 
          lable='Имя' 
          name="name" 
          value={formData.name} 
          onChange={onChange}
        />
        <Input 
          lable='Фамилия' 
          name="lastName" 
          value={formData.lastName} 
          onChange={onChange}
        />
        <Input 
          lable='E-mail' 
          name="eMail" 
          value={formData.eMail} 
          onChange={onChange}
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