import { useState } from 'react';
import { AppContainer, FormWrapper, Title } from './styles';
import { IFormData } from './types';
import { INITIAL_DATA } from './consts';
import FirstStepComponent from './components/firstStep/FirstStepComponent';
import SecondStepComponent from './components/secondStep/SecondStepComponent';

const App = () => {
  const [isFirstStep, setIsFirstStep] = useState<boolean>(true);
  const [formData, setFormData] = useState<IFormData>(INITIAL_DATA);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <AppContainer>
      <FormWrapper>
        <Title>Регистрация</Title>
        { isFirstStep ?
          <FirstStepComponent 
            setStep={setIsFirstStep} 
            formData={formData} 
            onChange={handleChange} 
          /> 
          : 
          <SecondStepComponent 
            setStep={setIsFirstStep} 
            formData={formData} 
            onChange={handleChange} 
          />
        }
      </FormWrapper>
    </AppContainer>
  );
}

export default App;

