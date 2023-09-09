import { useEffect, useState, useRef, useCallback, memo } from 'react';
import { InputWrapper, Lable, Container, NotificationText, NotificationWrapper, WarningText } from './styles';
import { IInputProps, EInputNames } from './types';
import { IS_EMPTY, PHONE_JOTTING, EMAIL_JOTTING, PASSWORD_WARNING, EMAIL_WARNING, PHONE_WARNING, REGEX_EMAIL, REGEX_PHONE } from './../../../consts';

const Input = ({ lable, name, value, handleChange }: IInputProps) => {
    const [notification, setNotification] = useState<string>('');
    const [isWarning, setIsWarning] = useState<boolean>(false);
    const firstStep = useRef(true); 

    const isPassword = name === EInputNames.password;
    const isPhone = name === EInputNames.phone;
    const isEmail = name === EInputNames.eMail;

    const setInitialNotification = useCallback(() => {
      if (isPhone) {
        setNotification(PHONE_JOTTING);
      } else if (isEmail) {
        setNotification(EMAIL_JOTTING);
      } else {
        setNotification('');
      }
    }, [isPhone, isEmail]);

    const regexValue = useCallback(() => {
      if (isPassword && value.length < 8) {
        setNotification(PASSWORD_WARNING);
        setIsWarning(true);
      } 
      if (isEmail && !REGEX_EMAIL.test(value)) {
        setNotification(EMAIL_WARNING);
        setIsWarning(true);
      }
      if (isPhone && !REGEX_PHONE.test(value)) {
        setNotification(PHONE_WARNING);
        setIsWarning(true);
      }
    }, [isEmail, isPassword, isPhone, value]);

    useEffect(() => {
      setInitialNotification();
      if (!firstStep.current && value === '') {
        setIsWarning(true);
        setNotification(IS_EMPTY);
      } else if (value !== '') {
        setIsWarning(false);
        setInitialNotification();
        regexValue();
        firstStep.current = false;
      }
    }, [value, regexValue, setInitialNotification]);

    const handleBlur = () => {
      if (value === '') {
        setIsWarning(true);
        setNotification(IS_EMPTY);
      } else {
        setIsWarning(false);
        setInitialNotification();
      }
    };

    const handleFocus = () => {
      if (value === '') {
        setIsWarning(true);
        setNotification(IS_EMPTY);
      } else {
        setIsWarning(false);
        setInitialNotification();
      }
    };

    return (
      <Container>
        <Lable>{lable}</Lable>
        <InputWrapper 
          value={value} 
          name={name} 
          onBlur={handleBlur} 
          onFocus={handleFocus} 
          onChange={handleChange}
          type={isPassword ? EInputNames.password : 'text'}
        />
        <NotificationWrapper>
          { isWarning ? 
            <WarningText>{notification}</WarningText> 
            :
            <NotificationText>{notification}</NotificationText>
          }
        </NotificationWrapper>
      </Container>
    );
  }
  
  export default memo(Input);