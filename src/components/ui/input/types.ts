export interface IInputProps {
    name: string;
    lable: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export enum EInputNames {
    login = 'login',
    password = 'password',
    phone = 'phone',
    name = 'name',
    lastName = 'lastName',
    eMail = 'eMail',
  };