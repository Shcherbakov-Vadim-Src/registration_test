import { useEffect, useState, useRef, useCallback, memo } from 'react';
import { InputWrapper, Lable, Container, NotificationText, NotificationWrapper, WarningText } from './styles';
import { IInputProps, EInputNames } from './types';
import { IS_EMPTY, PHONE_JOTTING, EMAIL_JOTTING, PASSWORD_WARNING, EMAIL_WARNING, PHONE_WARNING, REGEX_EMAIL, REGEX_PHONE } from './../../../consts';

const Input = ({ lable, name, value, onChange }: IInputProps) => {
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

    const setWarningNotification = useCallback((notification: string) => {
      setNotification(notification);
      setIsWarning(true);
    }, []);

    const regexValue = useCallback(() => {
      if (isPassword && value.length < 8) {
        setWarningNotification(PASSWORD_WARNING);
      } 
      if (isEmail && !REGEX_EMAIL.test(value)) {
        setWarningNotification(EMAIL_WARNING);
      }
      if (isPhone && !REGEX_PHONE.test(value)) {
        setWarningNotification(PHONE_WARNING);
      }
    }, [isEmail, isPassword, isPhone, value, setWarningNotification]); 

    useEffect(() => {
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

    const blurFocusFunction = () => {
      if (value === '') {
        setIsWarning(true);
        setNotification(IS_EMPTY);
      } else {
        setIsWarning(false);
        setInitialNotification();
      }
    };

    const onBlur = () => blurFocusFunction();

    const onFocus = () => blurFocusFunction();

    return (
      <Container>
        <Lable>{lable}</Lable>
        <InputWrapper 
          value={value} 
          name={name} 
          onBlur={onBlur} 
          onFocus={onFocus} 
          onChange={onChange}
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